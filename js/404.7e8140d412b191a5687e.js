(()=>{"use strict";var e,r,t,n,o,i,c={134:(e,r,t)=>{var n=t(260),o=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function a(){}function d(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(l(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function u(e){if(!e)return!1;var r=document.querySelectorAll("link"),t=!1;return c.call(r,(function(r){if(r.href){var o=function(e,r){var t;return e=n(e),r.some((function(n){e.indexOf(r)>-1&&(t=n)})),t}(r.href,e);l(o)&&!0!==r.visited&&o&&(d(r,o),t=!0)}})),t}function s(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&d(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,r){if(i)return console.log("no window.document found, will not HMR CSS"),a;var t,c,d,l=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(r=i.src)}o[e]=r}return function(e){if(!r)return null;var t=r.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return n(r.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return t=function(){var e=l(r.filename),t=u(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void s();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),s())},c=50,d=0,function(){var e=this,r=arguments,n=function(){return t.apply(e,r)};clearTimeout(d),d=setTimeout(n,c)}}},260:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(r,"i"),"").split("/"),n=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",r+n+t.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},585:(e,r,t)=>{var n=t(134)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},717:(e,r,t)=>{var n=t(122),o=t(490),i=t(200),c=t(323);if(Object.values(o.Routing).includes(i.default.route.path)){localStorage.setItem("restore.route",i.default.route.href),window.location=i.default.route.origin+c.state.basePath}else{var a=document.createElement("img");a.src=n,document.body.append(a)}},200:function(e,r,t){var n,o=this&&this.__extends||(n=function(e,r){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])},n(e,r)},function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function t(){this.constructor=e}n(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0});var i=t(323),c=function(e){function r(){var r=e.call(this)||this;return i.state.basePath=-1===r.route.host.indexOf("github.io")?"/":"/RS-clone/",r}return o(r,e),Object.defineProperty(r.prototype,"route",{get:function(){var e=new URL(window.location.href),r=e.pathname.replace(i.state.basePath,""),t=r.split("/"),n=t[0],o=t[1];return{host:e.host,path:r,resource:n,parameter:o,href:e.href,origin:e.origin}},enumerable:!1,configurable:!0}),r}(t(811).default);r.default=new c},323:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.state=void 0,r.state={counter:0,basePath:""}},490:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Routing=void 0,function(e){e.MAIN="/",e.HELLO="hello",e.COUNTER="counter",e.ABOUT="about"}(r.Routing||(r.Routing={}))},811:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(){this.events={}}return e.prototype.on=function(e,r){var t,n;null!==(t=(n=this.events)[e])&&void 0!==t||(n[e]=[]),this.events[e].push(r)},e.prototype.emit=function(e){if(this.events[e])for(var r=0,t=this.events[e];r<t.length;r++){(0,t[r])()}},e}();r.default=t},122:(e,r,t)=>{e.exports=t.p+"assets/img/404.jpg"}},a={};function d(e){var r=a[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=a[e]={id:e,exports:{}};try{var n={id:e,module:t,factory:c[e],require:d};d.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.exports}d.m=c,d.c=a,d.i=[],d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>{},d.hmrF=()=>"404."+d.h()+".hot-update.json",d.h=()=>"1599ed44ef0b120cdbd9",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},d.l=(r,t,n,o)=>{if(e[r])e[r].push(t);else{var i,c;if(void 0!==n)for(var a=document.getElementsByTagName("script"),u=0;u<a.length;u++){var s=a[u];if(s.getAttribute("src")==r){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r),e[r]=[t];var l=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),c&&document.head.appendChild(i)}},(()=>{var e,r,t,n={},o=d.c,i=[],c=[],a="idle",u=0,s=[];function l(e){a=e;for(var r=[],t=0;t<c.length;t++)r[t]=c[t].call(null,e);return Promise.all(r)}function f(){0==--u&&l("ready").then((function(){if(0===u){var e=s;s=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==a)throw new Error("check() is only allowed in idle status");return l("check").then(d.hmrM).then((function(t){return t?l("prepare").then((function(){var n=[];return r=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,o){return d.hmrC[o](t.c,t.r,t.m,e,r,n),e}),[])).then((function(){return r=function(){return e?v(e):l("ready").then((function(){return n}))},0===u?r():new Promise((function(e){s.push((function(){e(r())}))}));var r}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==a?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+a+")")})):v(e)}function v(e){e=e||{},m();var n=r.map((function(r){return r(e)}));r=void 0;var o=n.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");n.forEach((function(e){e.dispose&&e.dispose()}));var c,a=l("apply"),d=function(e){c||(c=e)},u=[];return n.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)u.push(r[t])}})),Promise.all([i,a]).then((function(){return c?l("fail").then((function(){throw c})):t?v(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return u}))}))}function m(){if(t)return r||(r=[]),Object.keys(d.hmrI).forEach((function(e){t.forEach((function(t){d.hmrI[e](t,r)}))})),t=void 0,!0}d.hmrD=n,d.i.push((function(s){var v,m,y,g,b=s.module,_=function(r,t){var n=o[t];if(!n)return r;var c=function(c){if(n.hot.active){if(o[c]){var a=o[c].parents;-1===a.indexOf(t)&&a.push(t)}else i=[t],e=c;-1===n.children.indexOf(c)&&n.children.push(c)}else console.warn("[HMR] unexpected require("+c+") from disposed module "+t),i=[];return r(c)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&"e"!==s&&Object.defineProperty(c,s,d(s));return c.e=function(e){return function(e){switch(a){case"ready":l("prepare");case"prepare":return u++,e.then(f,f),e;default:return e}}(r.e(e))},c}(s.require,s.id);b.hot=(v=s.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){i=m.parents.slice(),e=y?void 0:v,d(v)},active:!0,accept:function(e,r,t){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=r||function(){},g._acceptedErrorHandlers[e[n]]=t;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,a){case"idle":r=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](v,r)})),l("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:p,apply:h,status:function(e){if(!e)return a;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:n[v]},e=void 0,g),b.parents=i,b.children=[],i=[],s.require=_})),d.hmrC={},d.hmrI={}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var r=d.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e+"../"})(),r=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)t();else{var c=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=c,d.request=a,o.parentNode.removeChild(o),n(d)}},o.href=r,document.head.appendChild(o),o},t=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(c=t[n]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===r))return c}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var c;if((o=(c=i[n]).getAttribute("data-href"))===e||o===r)return c}},n=[],o=[],i=e=>({dispose:()=>{for(var e=0;e<n.length;e++){var r=n[e];r.parentNode&&r.parentNode.removeChild(r)}n.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}),d.hmrC.miniCss=(e,c,a,u,s,l)=>{s.push(i),e.forEach((e=>{var i=d.miniCssF(e),c=d.p+i,a=t(i,c);a&&u.push(new Promise(((t,i)=>{var d=r(e,c,(()=>{d.as="style",d.rel="preload",t()}),i);n.push(a),o.push(d)})))}))},(()=>{var e,r,t,n,o,i=d.hmrS_jsonp=d.hmrS_jsonp||{596:0},c={};function a(r,t){return e=t,new Promise(((e,t)=>{c[r]=e;var n=d.p+d.hu(r),o=new Error;d.l(n,(e=>{if(c[r]){c[r]=void 0;var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,t(o)}}))}))}function u(e){function c(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,c=o.chain,u=d.c[i];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(u.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<u.parents.length;s++){var l=u.parents[s],f=d.c[l];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([l]),moduleId:i,parentId:l};-1===r.indexOf(l)&&(f.hot._acceptedDependencies[i]?(t[l]||(t[l]=[]),a(t[l],[i])):(delete t[l],r.push(l),n.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}d.f&&delete d.f.jsonpHmr,r=void 0;var u={},s=[],l={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(d.o(t,p)){var h,v=t[p],m=!1,y=!1,g=!1,b="";switch((h=v?c(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in l[p]=v,a(s,h.outdatedModules),h.outdatedDependencies)d.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),a(u[p],h.outdatedDependencies[p]));g&&(a(s,[h.moduleId]),l[p]=f)}t=void 0;for(var _,w=[],E=0;E<s.length;E++){var O=s[E],j=d.c[O];j&&(j.hot._selfAccepted||j.hot._main)&&l[O]!==f&&!j.hot._selfInvalidated&&w.push({module:O,require:j.hot._requireSelf,errorHandler:j.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete i[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var o=t.pop(),c=d.c[o];if(c){var a={},l=c.hot._disposeHandlers;for(E=0;E<l.length;E++)l[E].call(null,a);for(d.hmrD[o]=a,c.hot.active=!1,delete d.c[o],delete u[o],E=0;E<c.children.length;E++){var f=d.c[c.children[E]];f&&((e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1))}}}for(var p in u)if(d.o(u,p)&&(c=d.c[p]))for(_=u[p],E=0;E<_.length;E++)r=_[E],(e=c.children.indexOf(r))>=0&&c.children.splice(e,1)},apply:function(r){for(var t in l)d.o(l,t)&&(d.m[t]=l[t]);for(var n=0;n<o.length;n++)o[n](d);for(var i in u)if(d.o(u,i)){var c=d.c[i];if(c){_=u[i];for(var a=[],f=[],p=[],h=0;h<_.length;h++){var v=_[h],m=c.hot._acceptedDependencies[v],y=c.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(y),p.push(v)}}for(var g=0;g<a.length;g++)try{a[g].call(null,_)}catch(t){if("function"==typeof f[g])try{f[g](t,{moduleId:i,dependencyId:p[g]})}catch(n){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:t}),e.ignoreErrored||r(t)}}}for(var b=0;b<w.length;b++){var E=w[b],O=E.module;try{E.require(O)}catch(t){if("function"==typeof E.errorHandler)try{E.errorHandler(t,{moduleId:O,module:d.c[O]})}catch(n){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:O,error:n,originalError:t}),e.ignoreErrored||(r(n),r(t))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:O,error:t}),e.ignoreErrored||r(t)}}return s}}}self.webpackHotUpdate=(r,n,i)=>{for(var a in n)d.o(n,a)&&(t[a]=n[a],e&&e.push(a));i&&o.push(i),c[r]&&(c[r](),c[r]=void 0)},d.hmrI.jsonp=function(e,r){t||(t={},o=[],n=[],r.push(u)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(e,c,s,l,f,p){f.push(u),r={},n=c,t=s.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){d.o(i,e)&&void 0!==i[e]?(l.push(a(e,p)),r[e]=!0):r[e]=!1})),d.f&&(d.f.jsonpHmr=function(e,t){r&&d.o(r,e)&&!r[e]&&(t.push(a(e)),r[e]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),d(717);d(585)})();