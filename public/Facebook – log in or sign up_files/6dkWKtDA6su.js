;/*FB_PKG_DELIM*/

__d("errorCode",[],(function(a,b,c,d,e,f){"use strict";function a(a){throw new Error('errorCode("'+a+'"): This should not happen. Oh noes!')}f["default"]=a}),66);
__d("BDHeaderConfig",[],(function(a,b,c,d,e,f){"use strict";a="198387";f.ASBD_ID=a}),66);
__d("getAsyncHeaders",["BDHeaderConfig","LSD","ZeroCategoryHeader","gkx","isFacebookURI"],(function(a,b,c,d,e,f,g){function a(a){var b={},d=c("isFacebookURI")(a);d&&c("ZeroCategoryHeader").value&&(b[c("ZeroCategoryHeader").header]=c("ZeroCategoryHeader").value);d=h(a);d&&(b["X-FB-LSD"]=d);if(c("gkx")("3579")||c("gkx")("4435")){d=i(a);d&&(b["X-ASBD-ID"]=d)}return b}function h(a){return j(a)?null:c("LSD").token}function i(a){return j(a)?null:d("BDHeaderConfig").ASBD_ID}function j(a){return!a.toString().startsWith("/")&&a.getOrigin()!==document.location.origin}g["default"]=a}),98);
__d("isBulletinDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)bulletin\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);
__d("uriIsRelativePath",[],(function(a,b,c,d,e,f){"use strict";function a(a){return!a.getProtocol()&&!a.getDomain()&&!a.getPort()&&a.toString()!==""}f["default"]=a}),66);
__d("routeBuilderUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a.split("/");return a.filter(function(a){return a!==""}).map(function(a){var b=a.split(/{|}/);if(b.length<3)return{isToken:!1,part:a};else{a=b[0];var c=b[1];b=b[2];var d=c[0]==="?",e=c[d?1:0]==="*";c=c.substring((d?1:0)+(e?1:0));return{isToken:!0,optional:d,catchAll:e,prefix:a,suffix:b,token:c}}})}f.getPathParts=a}),66);
__d("jsRouteBuilder",["ConstUriUtils","FBLogger","routeBuilderUtils"],(function(a,b,c,d,e,f,g){"use strict";var h="#";function a(a,b,e,f,g){g===void 0&&(g=!1);var i=d("routeBuilderUtils").getPathParts(a);function j(j){try{var k=f!=null?babelHelpers["extends"]({},f,j):(j=j)!=null?j:{},l={};j="";var m=!1;j=i.reduce(function(a,c){if(!c.isToken)return a+"/"+c.part;else{var d,e=c.optional,f=c.prefix,g=c.suffix;c=c.token;if(e&&m)return a;d=(d=k[c])!=null?d:b[c];if(d==null&&e){m=!0;return a}if(d==null)throw new Error("Missing required template parameter: "+c);if(d==="")throw new Error("Required template parameter is an empty string: "+c);l[c]=!0;return a+"/"+f+d+g}},"");a.slice(-1)==="/"&&(j+="/");j===""&&(j="/");var n=d("ConstUriUtils").getUri(j);for(var o in k){var p=k[o];!l[o]&&p!=null&&n!=null&&(e!=null&&e.has(o)?p!==!1&&(n=n.addQueryParam(o,null)):n=n.addQueryParam(o,p))}return[n,j]}catch(b){p=b==null?void 0:b.message;o=c("FBLogger")("JSRouteBuilder").blameToPreviousFrame().blameToPreviousFrame();g&&(o=o.blameToPreviousFrame());o.mustfix("Failed building URI for base path: %s message: %s",a,p);return[null,h]}}return{buildUri:function(a){a=(a=j(a)[0])!=null?a:d("ConstUriUtils").getUri(h);if(a==null)throw new Error("Not even the fallback URL parsed validly!");return a},buildUriNullable:function(a){return j(a)[0]},buildURL:function(a){a=j(a);var b=a[0];a=a[1];return(b=b==null?void 0:b.toString())!=null?b:a},buildURLStringDEPRECATED:function(a){a=j(a);var b=a[0];a=a[1];return(b=b==null?void 0:b.toString())!=null?b:a}}}g["default"]=a}),98);
__d("isLinkshimURI",["isBulletinDotComURI","isFacebookURI","isMessengerDotComURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.getPath();return(b==="/l.php"||b.indexOf("/si/ajax/l/")===0||b.indexOf("/l/")===0||b.indexOf("l/")===0)&&(c("isFacebookURI")(a)||c("isMessengerDotComURI")(a)||c("isBulletinDotComURI")(a))?!0:!1}g["default"]=a}),98);
__d("DateConsts",[],(function(a,b,c,d,e,f){var g=1e3;c=60;d=60;e=24;var h=7,i=12,j=1e3,k=30.43,l=4.333,m=365.242,n=c*d,o=n*e,p=o*h,q=o*m,r=g*c,s=r*d,t=g*o,u=t*h,v=t*m,w={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6};Object.freeze(w);function a(a,b){return new Date(a,b,0).getDate()}function b(){return Date.now()/g}var x={instantRange:{since:-864e10,until:864e10+1}};f.MS_PER_SEC=g;f.SEC_PER_MIN=c;f.MIN_PER_HOUR=d;f.HOUR_PER_DAY=e;f.DAYS_PER_WEEK=h;f.MONTHS_PER_YEAR=i;f.US_PER_MS=j;f.AVG_DAYS_PER_MONTH=k;f.AVG_WEEKS_PER_MONTH=l;f.AVG_DAYS_PER_YEAR=m;f.SEC_PER_HOUR=n;f.SEC_PER_DAY=o;f.SEC_PER_WEEK=p;f.SEC_PER_YEAR=q;f.MS_PER_MIN=r;f.MS_PER_HOUR=s;f.MS_PER_DAY=t;f.MS_PER_WEEK=u;f.MS_PER_YEAR=v;f.DAYS=w;f.getDaysInMonth=a;f.getCurrentTimeInSeconds=b;f["private"]=x}),66);
__d("IntlCLDRNumberType01",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a,b,d){return h(a,b,d,c("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,b,d){return h(a,b,d,c("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,b,d){return h(a,b,d,c("setTimeoutAcrossTransitions"),!0)}});function h(a,b,d,e,f){var g=b==null?100:b,h,i=null,j=0,k=null,l=[],m=c("TimeSlice").guard(function(){j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:c("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){c("TimeSliceInteractionSV").ref_counting_fix&&l.push(c("TimeSlice").getGuardedContinuation("throttleWithContinuation"));for(var a=arguments.length,b=new Array(a),n=0;n<a;n++)b[n]=arguments[n];i=b;h=this;d!==void 0&&(h=d);(k===null||Date.now()-j>g)&&(f===!0?m():k=e(m,0))}}b=a;g["default"]=b}),98);