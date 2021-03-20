(()=>{"use strict";var e={944:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(645),o=n.n(r),i=n(667),a=n.n(i),c=n(447),s=o()((function(e){return e[1]})),l=a()(c.Z);s.push([e.id,"*{margin:0px;padding:0px;box-sizing:border-box}body{height:100%}.root{background:linear-gradient(#da0568, #ff7300, #e63d00, #da0568);text-align:center;height:100vh;width:100vw}.btnContainer,.ClockContainer{display:flex;justify-content:center;align-items:center}.MsText{color:#00ff2a}.timeText{color:#e0dada;font-size:30px;display:flex;justify-content:center;align-items:center;background-color:#ff5100;background-image:url("+l+");background-size:cover;border:2px solid #7e0000;border-radius:100px;height:200px;width:200px;font-family:Poppins, sans-serif;margin-top:20%;box-shadow:0px 7px 10px 0px #070000,inset 0px 7px 10px 0px #ce8585,0px 0px 5px 3px #130101,inset 0px 0px 10px 1px #000}.timeText>div{height:45px;width:38px;text-align:center;display:flex;justify-content:center;align-items:center;z-index:1}button{color:white;font-size:17px;background-color:#f30;outline:none;border:1px solid #305500;height:35px;width:70px;margin-top:10px;font-family:Poppins, sans-serif;border-radius:10px;cursor:pointer}.setTime,.resetTime{width:100px;background-color:#ff0062}button:active{color:#fff;background-color:#c40000}\n",""]);const u=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},447:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"bfb2004ff8a8a1ba463fe981b05808d2.png"},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],s=t.base?c[0]+t.base:c[0],l=n[s]||0,u="".concat(s," ").concat(l);n[s]=l+1;var d=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:u,updater:h(p,t),references:1}),r.push(u)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,x=0;function h(e,t){var n,r,o;if(t.singleton){var i=x++;n=f||(f=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(944);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelector(".startBTN"),i=document.querySelector(".resetBTN"),a=document.querySelector(".hourText"),c=document.querySelector(".minText"),s=document.querySelector(".secondText"),l=document.querySelector(".MsText"),u=document.querySelector(".setTime"),d=document.querySelector(".resetTime");let p,f,x="start",h=0,m=0,v=0,g=0,b=()=>{clearInterval(p),clearInterval(f),h=0,m=0,v=0,g=0,a.innerText=0,c.innerText=0,s.innerText=0,l.innerText=0,o.innerText="start",x="start"},y=0,T=0,w=0,S=0;o.addEventListener("click",(e=>{"start"==x?(x="pause",p=setInterval((()=>{h+=1,h>=10&&(h=0,m+=1,m>59&&(v+=1,m=0,v>59&&(g+=1,v=0))),a.innerText=g,c.innerText=v,s.innerText=m,l.innerText=h}),100)):"pause"==x&&(clearInterval(p),x="start"),o.innerText=x,console.log("i Came Here")})),i.addEventListener("click",(e=>{b()})),u.addEventListener("click",(e=>{b(),(()=>{let e="str";for(;isNaN(e);)e=parseInt(prompt("Enter Time in Minutes( Valid Number) to Set"));console.log(typeof e),(e=>{0==e&&b(),y=parseInt(60*e*10),f=setInterval((()=>{y--,h=parseInt(y%10),T=parseInt(y/10),m=parseInt(T%60),w=parseInt(T/60),v=parseInt(w%60),S=parseInt(w/60),g=parseInt(S%60),console.log(w),a.innerText=g,c.innerText=v,s.innerText=m,l.innerText=h,y<=0&&clearInterval(f)}),100)})(e)})()})),d.addEventListener("click",(e=>{b()})),console.log("hiii")})()})();