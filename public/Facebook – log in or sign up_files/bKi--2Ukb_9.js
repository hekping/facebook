;/*FB_PKG_DELIM*/

__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("getOpacityStyleName",[],(function(a,b,c,d,e,f){var g=!1,h=null;function a(){if(!g){if(document.body&&"opacity"in document.body.style)h="opacity";else{var a=document.createElement("div");a.style.filter="alpha(opacity=100)";a.style.filter&&(h="filter")}g=!0}return h}f["default"]=a}),66);
__d("StyleCore",["invariant","camelize","containsNode","err","getOpacityStyleName","getStyleProperty","hyphenate"],(function(a,b,c,d,e,f,g,h){function i(a,b){a=o.get(a,b);return a==="auto"||a==="scroll"}var j=new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)","g");function k(a){var b={};a.replace(j,function(a,c,d){b[c]=d;return d});return b}function l(a){var b="";for(var c in a)a[c]&&(b+=c+":"+a[c]+";");return b}function m(a){return a!==""?"alpha(opacity="+a*100+")":""}function n(a,b,d){switch(c("hyphenate")(b)){case"font-weight":case"line-height":case"opacity":case"z-index":case"animation-iteration-count":case"-webkit-animation-iteration-count":break;case"width":case"height":var e=parseInt(d,10)<0;e&&h(0,11849,a,b,d);default:isNaN(d)||!d||d==="0"||h(0,11850,a,b,d,d+"px");break}}var o={set:function(a,b,d){n("Style.set",b,d);if(a==null)return;a=a.style;switch(b){case"opacity":c("getOpacityStyleName")()==="filter"?a.filter=m(d):a.opacity=d;break;case"float":a.cssFloat=a.styleFloat=d||"";break;default:try{a[c("camelize")(b)]=d}catch(a){throw c("err")('Style.set: "%s" argument is invalid: %s',b,d)}}},apply:function(a,b){var d;for(d in b)n("Style.apply",d,b[d]);"opacity"in b&&c("getOpacityStyleName")()==="filter"&&(b.filter=m(b.opacity),delete b.opacity);var e=k(a.style.cssText);for(d in b){var f=b[d];delete b[d];var g=c("hyphenate")(d);for(var h in e)(h===g||h.indexOf(g+"-")===0)&&delete e[h];b[g]=f}Object.assign(e,b);a.style.cssText=l(e)},get:c("getStyleProperty"),getFloat:function(a,b){return parseFloat(o.get(a,b),10)},getOpacity:function(a){if(c("getOpacityStyleName")()==="filter"){var b=o.get(a,"filter");if(b){b=/(\d+(?:\.\d+)?)/.exec(b);if(b)return parseFloat(b.pop())/100}}return o.getFloat(a,"opacity")||1},isFixed:function(a){while(c("containsNode")(document.body,a)){if(o.get(a,"position")==="fixed")return!0;a=a.parentNode}return!1},getScrollParent:function(a){if(!a)return null;while(a&&a!==document.body){if(i(a,"overflow")||i(a,"overflowY")||i(a,"overflowX"))return a;a=a.parentNode}return window}};a=o;g["default"]=a}),98);
__d("Style",["$","StyleCore"],(function(a,b,c,d,e,f,g){a=babelHelpers["extends"]({},c("StyleCore"),{get:function(a,b){typeof a==="string"&&(a=c("$")(a));return c("StyleCore").get(a,b)},getFloat:function(a,b){typeof a==="string"&&(a=c("$")(a));return c("StyleCore").getFloat(a,b)}});b=a;g["default"]=b}),98);
__d("DOMControl",["$","DataStore"],(function(a,b,c,d,e,f){a=function(){"use strict";function a(a){this.root=b("$").fromIDOrElement(a),this.updating=!1,b("DataStore").set(a,"DOMControl",this)}var c=a.prototype;c.getRoot=function(){return this.root};c.beginUpdate=function(){if(this.updating)return!1;this.updating=!0;return!0};c.endUpdate=function(){this.updating=!1};c.update=function(a){if(!this.beginUpdate())return this;this.onupdate(a);this.endUpdate()};c.onupdate=function(a){};a.getInstance=function(a){return b("DataStore").get(a,"DOMControl")};return a}();e.exports=a}),null);
__d("Input",["CSS","DOMControl","DOMQuery"],(function(a,b,c,d,e,f,g){function h(a){return!/\S/.test(a||"")}function i(a){return h(a.value)}function a(a){return i(a)?"":a.value}function b(a){return a.value}function e(a,b){a.value=b||"";b=c("DOMControl").getInstance(a);b&&b.resetHeight&&b.resetHeight()}function f(a,b){b||(b=""),a.setAttribute("aria-label",b),a.setAttribute("placeholder",b)}function j(a){a.value="",a.style.height=""}function k(a,b){d("CSS").conditionClass(a,"enter_submit",b)}function l(a){return d("CSS").hasClass(a,"enter_submit")}function m(a,b){b>0?a.setAttribute("maxlength",b.toString()):a.removeAttribute("maxlength")}g.isWhiteSpaceOnly=h;g.isEmpty=i;g.getValue=a;g.getValueRaw=b;g.setValue=e;g.setPlaceholder=f;g.reset=j;g.setSubmitOnEnter=k;g.getSubmitOnEnter=l;g.setMaxLength=m}),98);
__d("csx",[],(function(a,b,c,d,e,f){function a(a){throw new Error("csx: Unexpected class selector transformation.")}f["default"]=a}),66);
__d("Form",["DOM","DOMQuery","DTSG","DTSGUtils","DataStore","Input","LSD","PHPQuerySerializer","Random","SprinkleConfig","URI","getElementPosition","isFacebookURI","isNode"],(function(a,b,c,d,e,f){var g,h,i="FileList"in window,j="FormData"in window;function k(a){var c={};(g||(g=b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a){if(a){a=/^([^=]*)(?:=(.*))?$/.exec(a);var d=(h||(h=b("URI"))).decodeComponent(a[1]),e=a[2]!==void 0;e=e?(h||(h=b("URI"))).decodeComponent(a[2]):null;c[d]=e}});return c}var l={getInputs:function(a){a===void 0&&(a=document);return[].concat(b("DOMQuery").scry(a,"input"),b("DOMQuery").scry(a,"select"),b("DOMQuery").scry(a,"textarea"),b("DOMQuery").scry(a,"button"))},getInputsByName:function(a){var b={};l.getInputs(a).forEach(function(a){var c=b[a.name];b[a.name]=typeof c==="undefined"?a:[a].concat(c)});return b},getSelectValue:function(a){return a.options[a.selectedIndex].value},setSelectValue:function(a,b){for(var c=0;c<a.options.length;++c)if(a.options[c].value==b){a.selectedIndex=c;break}},getRadioValue:function(a){for(var b=0;b<a.length;b++)if(a[b].checked)return a[b].value;return null},getElements:function(a){return a.tagName=="FORM"&&a.elements!=a?Array.from(a.elements):l.getInputs(a)},getAttribute:function(a,b){return(a.getAttributeNode(b)||{}).value||null},setDisabled:function(a,c){l.getElements(a).forEach(function(a){if(a.disabled!==void 0){var d=b("DataStore").get(a,"origDisabledState");c?(d===void 0&&b("DataStore").set(a,"origDisabledState",a.disabled),a.disabled=c):d===!1&&(a.disabled=!1)}})},forEachValue:function(a,c,d){l.getElements(a).forEach(function(a){if(!a.name||a.disabled)return;if(a.type==="submit")return;if(a.type==="reset"||a.type==="button"||a.type==="image")return;if((a.type==="radio"||a.type==="checkbox")&&!a.checked)return;if(a.nodeName==="SELECT"){for(var c=0,e=a.options.length;c<e;c++){var f=a.options[c];f.selected&&d("select",a.name,f.value)}return}if(a.type==="file"){if(i){f=a.files;for(c=0;c<f.length;c++)d("file",a.name,f.item(c))}return}d(a.type,a.name,b("Input").getValue(a))}),c&&c.name&&c.type==="submit"&&b("DOMQuery").contains(a,c)&&b("DOMQuery").isNodeOfType(c,["input","button"])&&d("submit",c.name,c.value)},createFormData:function(a,c){if(!j)return null;var d=new FormData();if(a)if(b("isNode")(a))l.forEachValue(a,c,function(a,b,c){d.append(b,c)});else{c=k(a);for(a in c)c[a]==null?d.append(a,""):d.append(a,c[a])}return d},serialize:function(a,b){var c={};l.forEachValue(a,b,function(a,b,d){if(a==="file")return;l._serializeHelper(c,b,d)});return l._serializeFix(c)},_serializeHelper:function(a,b,c){var d=Object.prototype.hasOwnProperty,e=/([^\]]+)\[([^\]]*)\](.*)/.exec(b);if(e){if(!a[e[1]]||!d.call(a,e[1])){a[e[1]]=d={};if(a[e[1]]!==d)return}d=0;if(e[2]==="")while(a[e[1]][d]!==void 0)d++;else d=e[2];e[3]===""?a[e[1]][d]=c:l._serializeHelper(a[e[1]],d.concat(e[3]),c)}else a[b]=c},_serializeFix:function(a){for(var b in a)a[b]instanceof Object&&(a[b]=l._serializeFix(a[b]));b=Object.keys(a);if(b.length===0||b.some(isNaN))return a;b.sort(function(a,b){return a-b});var c=0,d=b.every(function(a){return+a===c++});return d?b.map(function(b){return a[b]}):a},post:function(a,c,d,e){e===void 0&&(e=!0);a=new(h||(h=b("URI")))(a);var f=document.createElement("form");f.action=a.toString();f.method="POST";f.style.display="none";var g=!b("isFacebookURI")(a);if(d){if(g){f.rel="noopener";if(d==="_blank"){d=btoa(b("Random").uint32());var i=window.open("about:blank",d);i!==void 0&&(i.opener=null)}}f.target=d}if(e&&(!g&&a.getSubdomain()!=="apps")){i=b("DTSG").getToken();i&&(c.fb_dtsg=i,b("SprinkleConfig").param_name&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(i)));b("LSD").token&&(c.lsd=b("LSD").token,b("SprinkleConfig").param_name&&!i&&(c[b("SprinkleConfig").param_name]=b("DTSGUtils").getNumericValue(b("LSD").token)))}l.createHiddenInputs(c,f);b("DOMQuery").getRootElement().appendChild(f);f.submit();return!1},createHiddenInputs:function(a,c,d,e){e===void 0&&(e=!1);d=d||{};a=k(a);for(var f in a){if(a[f]===null)continue;if(d[f]&&e)d[f].value=a[f];else{var g=b("DOM").create("input",{type:"hidden",name:f,value:a[f]});d[f]=g;c.appendChild(g)}}return d},getFirstElement:function(a,c){c===void 0&&(c=['input[type="text"]',"textarea",'input[type="password"]','input[type="button"]','input[type="submit"]']);var d=[];for(var e=0;e<c.length;e++){d=b("DOMQuery").scry(a,c[e]);for(var f=0;f<d.length;f++){var g=d[f];try{var h=b("getElementPosition")(g);if(h.y>0&&h.x>0)return g}catch(a){}}}return null},focusFirst:function(a){a=l.getFirstElement(a);if(a){a.focus();return!0}return!1}};e.exports=l}),null);
__d("setImmediate",["TimeSlice","TimerStorage","setImmediateAcrossTransitions"],(function(a,b,c,d,e,f,g){function a(a){var b,d=function(){c("TimerStorage").unset(c("TimerStorage").IMMEDIATE,b);for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];Function.prototype.apply.call(a,this,e)};c("TimeSlice").copyGuardForWrapper(a,d);for(var e=arguments.length,f=new Array(e>1?e-1:0),g=1;g<e;g++)f[g-1]=arguments[g];b=c("setImmediateAcrossTransitions").apply(void 0,[d].concat(f));c("TimerStorage").set(c("TimerStorage").IMMEDIATE,b);return b}g["default"]=a}),98);