parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vwsr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;var e=chrome.runtime.getURL("assets/ninjacoin.svg");function t(t){t instanceof HTMLImageElement&&(t.src=e)}
},{}],"Gsiw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=n;var e=document.querySelector("html").lang,t={fr:"Santédollars",en:"Healthdollars"};function n(n){n&&n.textContent&&(n.textContent=n.textContent.replace(t[e],"Ninja Coins"))}
},{}],"h12m":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=t(require("./replaceText"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=n(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,u=function(){};return{s:u,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(){var t,n=r(document.querySelectorAll(".sky-form .tab-pane"));try{for(n.s();!(t=n.n()).done;){var o=t.value;new MutationObserver(function(t){(0,e.default)(document.querySelector("span.hidden-xs")),(0,e.default)(document.querySelector(".col-xs-12:nth-child(2) .TitreDiagrammes .Libelle"))}).observe(o,{attributes:!0,childList:!0})}}catch(u){n.e(u)}finally{n.f()}}
},{"./replaceText":"Gsiw"}],"BiQq":[function(require,module,exports) {
"use strict";var e=a(require("./replaceImage")),r=a(require("./replaceText")),u=a(require("./replaceSkyForm"));function a(e){return e&&e.__esModule?e:{default:e}}(0,e.default)(document.querySelector(".TableSommaire .ImageIcone")),(0,r.default)(document.querySelector(".TableSommaire .Libelle")),(0,u.default)();
},{"./replaceImage":"vwsr","./replaceText":"Gsiw","./replaceSkyForm":"h12m"}]},{},["BiQq"], null)
//# sourceMappingURL=/historique.js.map