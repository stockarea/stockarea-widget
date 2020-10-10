!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=0)}([function(n,t,e){"use strict";function r(n,t){if(!n)throw Error("API method required");if(n=n.toLowerCase(),-1===a.indexOf(n))throw Error("Method ".concat(n," is not supported"));switch(console.log("Handling API call ".concat(n),t),n){case"message":Object(i.a)(t);break;default:console.warn("No handler defined for ".concat(n))}}function o(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=(e(1),e(2)),a=["init","message"];!function(n){console.log("JS-Widget starting");var t={someDefaultConfiguration:!1},e=n[n["JS-Widget"]],i=e.q;if(i)for(var a=0;a<i.length;a++)"init"==i[a][0].toLowerCase()?(t=o(t,i[a][1]),console.log("JS-Widget started",t)):r(i[a][0],i[a][1]);e=r,e.configurations=t}(window)},function(n,t,e){"use strict"},function(n,t,e){"use strict";function r(){var n=document.createElement("div");n.innerHTML=a.a;var t=document.createElement("script");for(t.type="text/javascript",t.src=Object(s.resolve)("./searchWarehouse.js"),o=document.getElementsByTagName("body")[0];n.children.length>0;)u.push(n.children[0]),o.appendChild(n.children[0]);o.appendChild(t),console.log(o)}t.a=r;var o,i=e(3),a=e.n(i),c=e(4),s=(e.n(c),e(9)),u=(e.n(s),[])},function(n,t){n.exports='\n<div class="form-popup" id="myForm">\n    \n    <div  class="form-container">\n      <h1>Search warehouses on stockarea</h1>\n  \n      <label for="city_name"><b>Enter City</b></label>\n      <input type="text" id=\'city_name\' placeholder="Enter city" name="city_name" required>\n  \n  \n  \n      <button  onclick="searchWarehouse()" class="btn">Search</button>\n   \n    </div>\n  \n  </div>\n\n'},function(n,t,e){var r=e(5);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0;e(7)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){t=e(6)(!1),t.push([n.i,"{ box-sizing: border-box;}\n\n/* Button used to open the contact form - fixed at the bottom of the page */\n.open-button {\n  background-color: #555;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  width: 280px;\n}\n\n/* The popup form - hidden by default */\n.form-popup {\n  display: block;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border: 3px solid #f1f1f1;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n.form-container {\n  max-width: 300px;\n  padding: 10px;\n  background-color: white;\n}\n\n/* Full-width input fields */\n.form-container input[type=text], .form-container input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type=text]:focus, .form-container input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #4CAF50;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom:10px;\n  opacity: 0.8;\n}\n\n/* Add a red background color to the cancel button */\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}",""]),n.exports=t},function(n,t,e){"use strict";function r(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=o(r);return[e].concat(r.sources.map(function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")})).concat([i]).join("\n")}return[e].join("\n")}function o(n){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n)))))," */")}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=r(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},function(n,t,e){function r(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(f(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(f(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],c=i[1],s=i[2],u=i[3],f={css:c,media:s,sourceMap:u};r[a]?r[a].parts.push(f):e.push(r[a]={id:a,parts:[f]})}return e}function i(n,t){var e=m(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),y.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=m(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=y.indexOf(n);t>=0&&y.splice(t,1)}function c(n){var t=document.createElement("style");return n.attrs.type="text/css",u(t,n.attrs),i(n,t),t}function s(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",u(t,n.attrs),i(n,t),t}function u(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function f(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var u=g++;e=b||(b=c(t)),r=l.bind(null,e,u,!1),o=l.bind(null,e,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=s(t),r=d.bind(null,e,t),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=c(t),r=p.bind(null,e),o=function(){a(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}function l(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function p(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function d(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},v=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(n){var t={};return function(e){if(void 0===t[e]){var r=n.call(this,e);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[e]=r}return t[e]}}(function(n){return document.querySelector(n)}),b=null,g=0,y=[],w=e(8);n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=o(n,t);return r(e,t),function(n){for(var i=[],a=0;a<e.length;a++){var c=e[a],s=h[c.id];s.refs--,i.push(s)}if(n){r(o(n,t),t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete h[s.id]}}}};var x=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(n,t,e){(function(n){function e(n,t){for(var e=0,r=n.length-1;r>=0;r--){var o=n[r];"."===o?n.splice(r,1):".."===o?(n.splice(r,1),e++):e&&(n.splice(r,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}function r(n){"string"!=typeof n&&(n+="");var t,e=0,r=-1,o=!0;for(t=n.length-1;t>=0;--t)if(47===n.charCodeAt(t)){if(!o){e=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":n.slice(e,r)}function o(n,t){if(n.filter)return n.filter(t);for(var e=[],r=0;r<n.length;r++)t(n[r],r,n)&&e.push(n[r]);return e}t.resolve=function(){for(var t="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:n.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return t=e(o(t.split("/"),function(n){return!!n}),!r).join("/"),(r?"/":"")+t||"."},t.normalize=function(n){var r=t.isAbsolute(n),a="/"===i(n,-1);return n=e(o(n.split("/"),function(n){return!!n}),!r).join("/"),n||r||(n="."),n&&a&&(n+="/"),(r?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(o(n,function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))},t.relative=function(n,e){function r(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=t.resolve(n).substr(1),e=t.resolve(e).substr(1);for(var o=r(n.split("/")),i=r(e.split("/")),a=Math.min(o.length,i.length),c=a,s=0;s<a;s++)if(o[s]!==i[s]){c=s;break}for(var u=[],s=c;s<o.length;s++)u.push("..");return u=u.concat(i.slice(c)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var t=n.charCodeAt(0),e=47===t,r=-1,o=!0,i=n.length-1;i>=1;--i)if(47===(t=n.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?e?"/":".":e&&1===r?"/":n.slice(0,r)},t.basename=function(n,t){var e=r(n);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(n){"string"!=typeof n&&(n+="");for(var t=-1,e=0,r=-1,o=!0,i=0,a=n.length-1;a>=0;--a){var c=n.charCodeAt(a);if(47!==c)-1===r&&(o=!1,r=a+1),46===c?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){e=a+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===e+1?"":n.slice(t,r)};var i="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)}}).call(t,e(10))},function(n,t){function e(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(n){if(f===setTimeout)return setTimeout(n,0);if((f===e||!f)&&setTimeout)return f=setTimeout,setTimeout(n,0);try{return f(n,0)}catch(t){try{return f.call(null,n,0)}catch(t){return f.call(this,n,0)}}}function i(n){if(l===clearTimeout)return clearTimeout(n);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(n);try{return l(n)}catch(t){try{return l.call(null,n)}catch(t){return l.call(this,n)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):m=-1,h.length&&c())}function c(){if(!v){var n=o(a);v=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,v=!1,i(n)}}function s(n,t){this.fun=n,this.array=t}function u(){}var f,l,p=n.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:e}catch(n){f=e}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(n){l=r}}();var d,h=[],v=!1,m=-1;p.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];h.push(new s(n,t)),1!==h.length||v||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}]);