(function(T){"object"===typeof exports&&"undefined"!==typeof module?module.exports=T():"function"===typeof define&&define.amd?define([],T):("undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:this).i18nextko=T()})(function(){return function E(z,x,w){function C(y,J){if(!x[y]){if(!z[y]){var p="function"==typeof require&&require;if(!J&&p)return p(y,!0);if(K)return K(y,!0);p=Error("Cannot find module '"+y+"'");throw p.code="MODULE_NOT_FOUND",p;}p=x[y]=
{exports:{}};z[y][0].call(p.exports,function(p){var w=z[y][1][p];return C(w?w:p)},p,p.exports,E,z,x,w)}return x[y].exports}for(var K="function"==typeof require&&require,H=0;H<w.length;H++)C(w[H]);return C}({1:[function(E,z,x){(function(w){function C(a,b){if(!b||"function"===typeof b)return a;for(var d in b)a[d]=b[d];return a}function K(a,b){for(var d in b)d in a?K(a[d],b[d]):a[d]=b[d];return a}function x(a,b,d){var e,c=0,g=a.length,f=void 0===g||"[object Array]"!==Object.prototype.toString.apply(a)||
"function"===typeof a;if(d)if(f)for(e in a){if(!1===b.apply(a[e],d))break}else for(;c<g&&!1!==b.apply(a[c++],d););else if(f)for(e in a){if(!1===b.call(a[e],e,a[e]))break}else for(;c<g&&!1!==b.call(a[c],c,a[c++]););return a}function y(a){var b=function(a){if(window.XMLHttpRequest)return a(null,new XMLHttpRequest);if(window.ActiveXObject)try{return a(null,new ActiveXObject("Msxml2.XMLHTTP"))}catch(b){return a(null,new ActiveXObject("Microsoft.XMLHTTP"))}return a(Error())},d=function(a){if("string"===
typeof a)return a;var b=[],d;for(d in a)a.hasOwnProperty(d)&&b.push(encodeURIComponent(d)+"="+encodeURIComponent(a[d]));return b.join("&")},e=function(){for(var a=arguments[0],b=1;b<arguments.length;b++){var d=arguments[b],e;for(e in d)d.hasOwnProperty(e)&&(a[e]=d[e])}return a},c=function(a,f,m,l){"function"===typeof m&&(l=m,m={});m.cache=m.cache||!1;m.data=m.data||{};m.headers=m.headers||{};m.jsonp=m.jsonp||!1;m.async=void 0===m.async?!0:m.async;var n=e({accept:"*/*","content-type":"application/x-www-form-urlencoded;charset=UTF-8"},
c.headers,m.headers),q;q="application/json"===n["content-type"]?JSON.stringify(m.data):d(m.data);if("GET"===a){var F=[];q&&(F.push(q),q=null);m.cache||F.push("_="+(new Date).getTime());m.jsonp&&(F.push("callback="+m.jsonp),F.push("jsonp="+m.jsonp));F=F.join("&");1<F.length&&(f=-1<f.indexOf("?")?f+("&"+F):f+("?"+F));if(m.jsonp){var F=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript";r.src=f;F.appendChild(r);return}}b(function(b,d){if(b)return l(b);
d.open(a,f,m.async);for(var e in n)n.hasOwnProperty(e)&&d.setRequestHeader(e,n[e]);d.onreadystatechange=function(){if(4===d.readyState){var a=d.responseText||"";l&&l(d.status,{text:function(){return a},json:function(){try{return JSON.parse(a)}catch(b){return k.error("Can not parse JSON. URL: "+f),{}}}})}};d.send(q)})};({authBasic:function(a,b){var d=c.headers,e;e=a+":"+b;e=e.replace(/\r\n/g,"\n");for(var n="",q=0;q<e.length;q++){var k=e.charCodeAt(q);128>k?n+=String.fromCharCode(k):(127<k&&2048>k?
n+=String.fromCharCode(k>>6|192):(n+=String.fromCharCode(k>>12|224),n+=String.fromCharCode(k>>6&63|128)),n+=String.fromCharCode(k&63|128))}e=n;var n="",r,u,p,v,t=0;do r=e.charCodeAt(t++),q=e.charCodeAt(t++),k=e.charCodeAt(t++),u=r>>2,r=(r&3)<<4|q>>4,p=(q&15)<<2|k>>6,v=k&63,isNaN(q)?p=v=64:isNaN(k)&&(v=64),n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(u)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(r)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(p)+
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(v);while(t<e.length);d.Authorization="Basic "+n},connect:function(a,b,d){return c("CONNECT",a,b,d)},del:function(a,b,d){return c("DELETE",a,b,d)},get:function(a,b,d){return c("GET",a,b,d)},head:function(a,b,d){return c("HEAD",a,b,d)},headers:function(a){c.headers=a||{}},isAllowed:function(a,b,d){this.options(a,function(a,e){d(-1!==e.text().indexOf(b))})},options:function(a,b,d){return c("OPTIONS",a,b,d)},patch:function(a,b,
d){return c("PATCH",a,b,d)},post:function(a,b,d){return c("POST",a,b,d)},put:function(a,b,d){return c("PUT",a,b,d)},trace:function(a,b,d){return c("TRACE",a,b,d)}})[a.type?a.type.toLowerCase():"get"](a.url,a,function(b,d){200===b||0===b&&d.text()?a.success(d.json(),b,null):a.error(d.text(),b,null)})}function J(a,b){"function"===typeof a&&(b=a,a={});a=a||{};k.extend(c,a);delete c.fixLng;c.functions&&(delete c.functions,k.extend(k,a.functions));"string"==typeof c.ns&&(c.ns={namespaces:[c.ns],defaultNs:c.ns});
"string"==typeof c.fallbackNS&&(c.fallbackNS=[c.fallbackNS]);if("string"==typeof c.fallbackLng||"boolean"==typeof c.fallbackLng)c.fallbackLng=[c.fallbackLng];c.interpolationPrefixEscaped=k.regexEscape(c.interpolationPrefix);c.interpolationSuffixEscaped=k.regexEscape(c.interpolationSuffix);c.lng||(c.lng=k.detectLanguage());P=k.toLanguages(c.lng);I=P[0];k.log("currentLng set to: "+I);c.useCookie&&k.cookie.read(c.cookieName)!==I&&k.cookie.create(c.cookieName,I,c.cookieExpirationTime,c.cookieDomain);
c.detectLngFromLocalStorage&&"undefined"!==typeof document&&window.localStorage&&k.localStorage.setItem("i18next_lng",I);var d=B;a.fixLng&&(d=function(a,b){b=b||{};b.lng=b.lng||d.lng;return B(a,b)},d.lng=I);A.setCurrentLng(I);t&&c.setJqueryExt?X&&X():Y&&Y();var e;t&&t.Deferred&&(e=t.Deferred());if(c.resStore)u=c.resStore,Q=!0,b&&b(null,d),e&&e.resolve(d);else{var h=k.toLanguages(c.lng);"string"===typeof c.preload&&(c.preload=[c.preload]);for(var g=0,f=c.preload.length;g<f;g++)for(var m=k.toLanguages(c.preload[g]),
l=0,n=m.length;l<n;l++)0>h.indexOf(m[l])&&h.push(m[l]);v.sync.load(h,c,function(a,c){u=c;Q=!0;b&&b(a,d);e&&(a?e.reject:e.resolve)(a||d)})}if(e)return e.promise()}function p(a,b,d,e){"string"!==typeof b?(resource=b,b=c.ns.defaultNs):0>c.ns.namespaces.indexOf(b)&&c.ns.namespaces.push(b);u[a]=u[a]||{};u[a][b]=u[a][b]||{};d=d.split(c.keyseparator);var h=0;for(a=u[a][b];d[h];)h==d.length-1?a[d[h]]=e:(null==a[d[h]]&&(a[d[h]]={}),a=a[d[h]]),h++;c.useLocalStorage&&G._storeLocal(u)}function L(a,b){var d={dynamicLoad:c.dynamicLoad,
resGetPath:c.resGetPath,getAsync:c.getAsync,customLoad:c.customLoad,ns:{namespaces:a,defaultNs:""}},e=k.toLanguages(c.lng);"string"===typeof c.preload&&(c.preload=[c.preload]);for(var h=0,g=c.preload.length;h<g;h++)for(var f=k.toLanguages(c.preload[h]),m=0,l=f.length;m<l;m++)0>e.indexOf(f[m])&&e.push(f[m]);for(var n=[],h=0,g=e.length;h<g;h++){f=!1;if(m=u[e[h]])for(var l=0,q=a.length;l<q;l++)m[a[l]]||(f=!0);else f=!0;f&&n.push(e[h])}n.length?v.sync._fetch(n,d,function(d,e){var h=a.length*n.length;
k.each(a,function(a,d){0>c.ns.namespaces.indexOf(d)&&c.ns.namespaces.push(d);k.each(n,function(a,f){u[f]=u[f]||{};u[f][d]=e[f][d];h--;0===h&&b&&(c.useLocalStorage&&v.sync._storeLocal(u),b())})})}):b&&b()}function O(a,b,d){"function"===typeof b?(d=b,b={}):b||(b={});b.lng=a;return J(b,d)}function X(){function a(a,b,h){if(0!==b.length){var g="text";0===b.indexOf("[")&&(g=b.split("]"),b=g[1],g=g[0].substr(1,g[0].length-1));b.indexOf(";")===b.length-1&&(b=b.substr(0,b.length-2));if("html"===g)h=c.defaultValueFromContent?
t.extend({defaultValue:a.html()},h):h,a.html(t.t(b,h));else if("text"===g)h=c.defaultValueFromContent?t.extend({defaultValue:a.text()},h):h,a.text(t.t(b,h));else if("prepend"===g)h=c.defaultValueFromContent?t.extend({defaultValue:a.html()},h):h,a.prepend(t.t(b,h));else if("append"===g)h=c.defaultValueFromContent?t.extend({defaultValue:a.html()},h):h,a.append(t.t(b,h));else if(0===g.indexOf("data-")){var f=g.substr(5);h=c.defaultValueFromContent?t.extend({defaultValue:a.data(f)},h):h;b=t.t(b,h);a.data(f,
b);a.attr(g,b)}else h=c.defaultValueFromContent?t.extend({defaultValue:a.attr(g)},h):h,a.attr(g,t.t(b,h))}}function b(b,e){var h=b.attr(c.selectorAttr);h||"undefined"===typeof h||!1===h||(h=b.text()||b.val());if(h){var g=b,f=b.data("i18n-target");f&&(g=b.find(f)||b);e||!0!==c.useDataAttrOptions||(e=b.data("i18n-options"));e=e||{};0<=h.indexOf(";")?(h=h.split(";"),t.each(h,function(b,d){""!==d&&a(g,d,e)})):a(g,h,e);!0===c.useDataAttrOptions&&b.data("i18n-options",e)}}t.t=t.t||B;t.fn.i18n=function(a){return this.each(function(){b(t(this),
a);t(this).find("["+c.selectorAttr+"]").each(function(){b(t(this),a)})})}}function Y(){function a(a,d,e){if(0!==d.length){var c="text";0===d.indexOf("[")&&(c=d.split("]"),d=c[1],c=c[0].substr(1,c[0].length-1));d.indexOf(";")===d.length-1&&(d=d.substr(0,d.length-2));"html"===c?a.innerHTML=B(d,e):"text"===c?a.textContent=B(d,e):"prepend"===c?a.insertAdjacentHTML(B(d,e),"afterbegin"):"append"===c?a.insertAdjacentHTML(B(d,e),"beforeend"):a.setAttribute(c,B(d,e))}}v.translateObject=function(b,d){for(var e=
b.querySelectorAll("["+c.selectorAttr+"]"),h=0,g=e.length;h<g;h++){var f=e[h],m=d,l=f.getAttribute(c.selectorAttr);l||"undefined"===typeof l||!1===l||(l=f.textContent||f.value);if(l){var n=f,k=f.getAttribute("i18n-target");k&&(n=f.querySelector(k)||f);if(0<=l.indexOf(";"))for(f=l.split(";"),l=0,k=f.length;l<k;l++)""!==f[l]&&a(n,f[l],m);else a(n,l,m)}}}}function D(a,b,d,e){if(!a)return a;e=e||b;if(0>a.indexOf(e.interpolationPrefix||c.interpolationPrefix))return a;var h=e.interpolationPrefix?k.regexEscape(e.interpolationPrefix):
c.interpolationPrefixEscaped,g=e.interpolationSuffix?k.regexEscape(e.interpolationSuffix):c.interpolationSuffixEscaped,f="HTML"+g;k.each(b.replace&&"object"===typeof b.replace?b.replace:b,function(b,l){var n=d?d+c.keyseparator+b:b;"object"===typeof l&&null!==l?a=D(a,l,n,e):e.escapeInterpolation||c.escapeInterpolation?(a=a.replace(new RegExp([h,n,f].join(""),"g"),k.regexReplacementEscape(l)),a=a.replace(new RegExp([h,n,g].join(""),"g"),k.regexReplacementEscape(k.escape(l)))):a=a.replace(new RegExp([h,
n,g].join(""),"g"),k.regexReplacementEscape(l))});return a}function E(a,b){var d=k.extend({},b);for(delete d.postProcess;-1!=a.indexOf(c.reusePrefix);){U++;if(U>c.maxRecursion)break;var e=a.lastIndexOf(c.reusePrefix),h=a.indexOf(c.reuseSuffix,e)+c.reuseSuffix.length,g=a.substring(e,h),f=g.replace(c.reusePrefix,"").replace(c.reuseSuffix,"");if(h<=e)return k.error("there is an missing closing in following translation value",a),"";if(-1!=f.indexOf(",")&&(e=f.indexOf(","),-1!=f.indexOf("{",e)&&-1!=f.indexOf("}",
e))){var h=f.indexOf("{",e),m=f.indexOf("}",h)+1;try{d=k.extend(d,JSON.parse(f.substring(h,m))),f=f.substring(0,e)}catch(l){}}f=V(f,d);a=a.replace(g,k.regexReplacementEscape(f))}return a}function Z(a,b){b=b||{};var d=void 0!==b.defaultValue?b.defaultValue:a,e=R(a,b);return void 0!==e||e===d}function B(a,b){b=b||{};if(!Q)return k.log("i18next not finished initialization. you might have called t function before loading resources finished."),b.defaultValue||"";U=0;return V.apply(null,arguments)}function aa(){for(var a=
[],b=1;b<arguments.length;b++)a.push(arguments[b]);return{postProcess:"sprintf",sprintf:a}}function V(a,b){b&&"object"!==typeof b?"sprintf"===c.shortcutFunction?b=aa.apply(null,arguments):"defaultValue"===c.shortcutFunction&&(b={defaultValue:b}):b=b||{};"object"===typeof c.defaultVariables&&(b=k.extend({},c.defaultVariables,b));if(void 0===a||null===a||""===a)return"";"number"===typeof a&&(a=String(a));"string"===typeof a&&(a=[a]);var d=a[0];if(1<a.length)for(var e=0;e<a.length&&(d=a[e],!Z(d,b));e++);
var e=void 0!==b.defaultValue?b.defaultValue:d,h=R(d,b),g=b.lng?k.toLanguages(b.lng,b.fallbackLng):P,f=b.ns||c.ns.defaultNs,m;-1<d.indexOf(c.nsseparator)&&(m=d.split(c.nsseparator),f=m[0],d=m[1]);void 0===h&&c.sendMissing&&"function"===typeof c.missingKeyHandler&&(b.lng?c.missingKeyHandler(g[0],f,d,e,g):c.missingKeyHandler(c.lng,f,d,e,g));g="string"===typeof c.postProcess&&""!==c.postProcess?[c.postProcess]:"array"===typeof c.postProcess||"object"===typeof c.postProcess?c.postProcess:[];if("string"===
typeof b.postProcess&&""!==b.postProcess)g=g.concat([b.postProcess]);else if("array"===typeof b.postProcess||"object"===typeof b.postProcess)g=g.concat(b.postProcess);void 0!==h&&g.length&&g.forEach(function(a){M[a]&&(h=M[a](h,d,b))});m=e;-1<e.indexOf(c.nsseparator)&&(m=e.split(c.nsseparator),m=m[1]);m===d&&c.parseMissingKey&&(e=c.parseMissingKey(e));if(void 0===h&&(e=D(e,b),e=E(e,b),g.length)){var l=void 0!==b.defaultValue?b.defaultValue:d;g.forEach(function(a){M[a]&&(h=M[a](l,d,b))})}return void 0!==
h?h:e}function R(a,b){b=b||{};var d,e,h=void 0!==b.defaultValue?b.defaultValue:a,g=P;if(!u||"cimode"===g[0].toLowerCase())return h;b.lngs&&(g=b.lngs);if(b.lng&&(g=k.toLanguages(b.lng,b.fallbackLng),!u[g[0]])){var f=c.getAsync;c.getAsync=!1;v.sync.load(g,c,function(a,b){k.extend(u,b);c.getAsync=f})}var m=b.ns||c.ns.defaultNs;-1<a.indexOf(c.nsseparator)&&(d=a.split(c.nsseparator),m=d[0],a=d[1]);if(b.context&&("string"==typeof b.context||"number"==typeof b.context)&&(d=k.extend({},b),delete d.context,
d.defaultValue=c.contextNotFound,e=B(m+c.nsseparator+a+"_"+b.context,d),e!=c.contextNotFound))return D(e,{context:b.context});if(void 0!==b.count&&"string"!=typeof b.count){d=k.extend({lngs:[g[0]]},b);delete d.count;d._origLng=d._origLng||d.lng||g[0];delete d.lng;d.defaultValue=c.pluralNotFound;if(A.needsPlural(g[0],b.count)){e=m+c.nsseparator+a+c.pluralSuffix;var l=A.get(g[0],b.count);0<=l?e=e+"_"+l:1===l&&(e=m+c.nsseparator+a)}else e=m+c.nsseparator+a;e=B(e,d);if(e!=c.pluralNotFound)return D(e,
{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix});if(1<g.length){if(e=g.slice(),e.shift(),b=k.extend(b,{lngs:e}),b._origLng=d._origLng,delete b.lng,e=B(m+c.nsseparator+a,b),e!=c.pluralNotFound)return e}else return d.lng=d._origLng,delete d._origLng,e=B(m+c.nsseparator+a,d),D(e,{count:b.count,interpolationPrefix:b.interpolationPrefix,interpolationSuffix:b.interpolationSuffix})}if(void 0!==b.indefinite_article&&"string"!=typeof b.indefinite_article&&
b.indefinite_article&&(d=k.extend({},b),delete d.indefinite_article,d.defaultValue=c.indefiniteNotFound,e=B(m+c.nsseparator+a+(b.count&&(void 0===b.count||"string"==typeof b.count)||!b.count?c.indefiniteSuffix:""),d),e!=c.indefiniteNotFound))return e;var n;d=a.split(c.keyseparator);e=0;for(l=g.length;e<l&&void 0===n;e++){for(var q=g[e],p=0,r=u[q]&&u[q][m];d[p];)r=r&&r[d[p]],p++;if(void 0!==r&&(!c.showKeyIfEmpty||""!==r)){n=Object.prototype.toString.apply(r);if("string"===typeof r)r=D(r,b),r=E(r,b);
else if("[object Array]"===n&&!c.returnObjectTrees&&!b.returnObjectTrees)r=r.join("\n"),r=D(r,b),r=E(r,b);else if(null===r&&!0===c.fallbackOnNull)r=void 0;else if(null!==r)if(!c.returnObjectTrees&&!b.returnObjectTrees)c.objectTreeKeyHandler&&"function"==typeof c.objectTreeKeyHandler?r=c.objectTreeKeyHandler(a,r,q,m,b):(r="key '"+m+":"+a+" ("+q+")' returned an object instead of string.",k.log(r));else if("[object Number]"!==n&&"[object Function]"!==n&&"[object RegExp]"!==n){var t="[object Array]"===
n?[]:{};k.each(r,function(d){t[d]=V(m+c.nsseparator+a+c.keyseparator+d,b)});r=t}"string"===typeof r&&""===r.trim()&&!0===c.fallbackOnEmpty&&(r=void 0);n=r}}if(void 0===n&&!b.isFallbackLookup&&(!0===c.fallbackToDefaultNS||c.fallbackNS&&0<c.fallbackNS.length)){b.isFallbackLookup=!0;if(c.fallbackNS.length)for(g=0,d=c.fallbackNS.length;g<d;g++){if((n=R(c.fallbackNS[g]+c.nsseparator+a,b))||""===n&&!1===c.fallbackOnEmpty)if(e=-1<n.indexOf(c.nsseparator)?n.split(c.nsseparator)[1]:n,l=-1<h.indexOf(c.nsseparator)?
h.split(c.nsseparator)[1]:h,e!==l)break}else b.ns=c.ns.defaultNs,n=R(a,b);b.isFallbackLookup=!1}return n}Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),d=b.length>>>0;if(0===d)return-1;var e=0;0<arguments.length&&(e=Number(arguments[1]),e!=e?e=0:0!=e&&Infinity!=e&&-Infinity!=e&&(e=(0<e||-1)*Math.floor(Math.abs(e))));if(e>=d)return-1;for(e=0<=e?e:Math.max(d-Math.abs(e),0);e<d;e++)if(e in b&&b[e]===a)return e;return-1});Array.prototype.lastIndexOf||
(Array.prototype.lastIndexOf=function(a){if(null==this)throw new TypeError;var b=Object(this),d=b.length>>>0;if(0===d)return-1;var e=d;1<arguments.length&&(e=Number(arguments[1]),e!=e?e=0:0!=e&&e!=1/0&&e!=-(1/0)&&(e=(0<e||-1)*Math.floor(Math.abs(e))));for(d=0<=e?Math.min(e,d-1):d-Math.abs(e);0<=d;d--)if(d in b&&b[d]===a)return d;return-1});"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var t=w.jQuery||w.Zepto,v={},u={},I,U=0,P=[],
Q=!1,G={},W=null;"undefined"!==typeof z&&z.exports?z.exports=v:(t&&(t.i18n=t.i18n||v),w.i18n&&(W=w.i18n),w.i18n=v);var G={load:function(a,b,d){b.useLocalStorage?G._loadLocal(a,b,function(e,c){for(var g=[],f=0,m=a.length;f<m;f++)c[a[f]]||g.push(a[f]);0<g.length?G._fetch(g,b,function(a,b){k.extend(c,b);G._storeLocal(b);d(a,c)}):d(e,c)}):G._fetch(a,b,function(a,b){d(a,b)})},_loadLocal:function(a,b,d){var e={},c=(new Date).getTime();if(window.localStorage){var g=a.length;k.each(a,function(a,m){var l=
k.localStorage.getItem("res_"+m);l&&(l=JSON.parse(l),l.i18nStamp&&l.i18nStamp+b.localStorageExpirationTime>c&&(e[m]=l));g--;0===g&&d(null,e)})}},_storeLocal:function(a){if(window.localStorage)for(var b in a)a[b].i18nStamp=(new Date).getTime(),k.localStorage.setItem("res_"+b,JSON.stringify(a[b]))},_fetch:function(a,b,d){var e=b.ns,c={};if(b.dynamicLoad){var g=function(a,b){d(a,b)};if("function"==typeof b.customLoad)b.customLoad(a,e.namespaces,b,g);else{var f=D(b.resGetPath,{lng:a.join("+"),ns:e.namespaces.join("+")});
k.ajax({url:f,cache:b.cache,success:function(a,b,e){k.log("loaded: "+f);d(null,a)},error:function(a,b,e){k.log("failed loading: "+f);d("failed loading resource.json error: "+e,void 0)},dataType:"json",async:b.getAsync,timeout:b.ajaxTimeout})}}else{var m=e.namespaces.length*a.length,l;k.each(e.namespaces,function(e,f){k.each(a,function(a,e){var g=function(a,b){a&&(l=l||[],l.push(a));c[e]=c[e]||{};c[e][f]=b;m--;0===m&&d(l,c)};"function"==typeof b.customLoad?b.customLoad(e,f,b,g):G._fetchOne(e,f,b,g)})})}},
_fetchOne:function(a,b,d,e){var c=D(d.resGetPath,{lng:a,ns:b});k.ajax({url:c,cache:d.cache,success:function(a,b,d){k.log("loaded: "+c);e(null,a)},error:function(a,b,d){b&&200==b||a&&a.status&&200==a.status?k.error("There is a typo in: "+c):b&&404==b||a&&a.status&&404==a.status?k.log("Does not exist: "+c):k.log((b?b:a&&a.status?a.status:null)+" when loading "+c);e(d,{})},dataType:"json",async:d.getAsync,timeout:d.ajaxTimeout})},postMissing:function(a,b,d,e,h){var g={};g[d]=e;var f=[];if("fallback"===
c.sendMissingTo&&!1!==c.fallbackLng[0])for(a=0;a<c.fallbackLng.length;a++)f.push({lng:c.fallbackLng[a],url:D(c.resPostPath,{lng:c.fallbackLng[a],ns:b})});else if("current"===c.sendMissingTo||"fallback"===c.sendMissingTo&&!1===c.fallbackLng[0])f.push({lng:a,url:D(c.resPostPath,{lng:a,ns:b})});else if("all"===c.sendMissingTo){a=0;for(var m=h.length;a<m;a++)f.push({lng:h[a],url:D(c.resPostPath,{lng:h[a],ns:b})})}h=0;for(a=f.length;h<a;h++){var l=f[h];k.ajax({url:l.url,type:c.sendType,data:g,success:function(a,
c,f){k.log("posted missing key '"+d+"' to: "+l.url);a=d.split(".");c=0;for(f=u[l.lng][b];a[c];)f=c===a.length-1?f[a[c]]=e:f[a[c]]=f[a[c]]||{},c++},error:function(a,b,e){k.log("failed posting missing key '"+d+"' to: "+l.url)},dataType:"json",async:c.postAsync,timeout:c.ajaxTimeout})}},reload:function(a){u={};O(I,a)}},c={lng:void 0,load:"all",preload:[],lowerCaseLng:!1,returnObjectTrees:!1,fallbackLng:["dev"],fallbackNS:[],detectLngQS:"setLng",detectLngFromLocalStorage:!1,ns:{namespaces:["translation"],
defaultNs:"translation"},fallbackOnNull:!0,fallbackOnEmpty:!1,fallbackToDefaultNS:!1,showKeyIfEmpty:!1,nsseparator:":",keyseparator:".",selectorAttr:"data-i18n",debug:!1,resGetPath:"locales/__lng__/__ns__.json",resPostPath:"locales/add/__lng__/__ns__",getAsync:!0,postAsync:!0,resStore:void 0,useLocalStorage:!1,localStorageExpirationTime:6048E5,dynamicLoad:!1,sendMissing:!1,sendMissingTo:"fallback",sendType:"POST",interpolationPrefix:"__",interpolationSuffix:"__",defaultVariables:!1,reusePrefix:"$t(",
reuseSuffix:")",pluralSuffix:"_plural",pluralNotFound:["plural_not_found",Math.random()].join(""),contextNotFound:["context_not_found",Math.random()].join(""),escapeInterpolation:!1,indefiniteSuffix:"_indefinite",indefiniteNotFound:["indefinite_not_found",Math.random()].join(""),setJqueryExt:!0,defaultValueFromContent:!0,useDataAttrOptions:!1,cookieExpirationTime:void 0,useCookie:!0,cookieName:"i18next",cookieDomain:void 0,objectTreeKeyHandler:void 0,postProcess:void 0,parseMissingKey:void 0,missingKeyHandler:G.postMissing,
ajaxTimeout:0,shortcutFunction:"sprintf"},ba={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};w={create:function(a,b,d,e){if(d){var c=new Date;c.setTime(c.getTime()+6E4*d);d="; expires="+c.toGMTString()}else d="";document.cookie=a+"="+b+d+";"+(e?"domain="+e+";":"")+"path=/"},read:function(a){a+="=";for(var b=document.cookie.split(";"),d=0;d<b.length;d++){for(var c=b[d];" "==c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(a))return c.substring(a.length,c.length)}return null},
remove:function(a){this.create(a,"",-1)}};var ca={create:function(a,b,d,c){},read:function(a){return null},remove:function(a){}},k={extend:t?t.extend:C,deepExtend:K,each:t?t.each:x,ajax:t?t.ajax:"undefined"!==typeof document?y:function(){},cookie:"undefined"!==typeof document?w:ca,detectLanguage:function(){var a,b=c.lngWhitelist||[],d=[];"undefined"!==typeof window&&function(){for(var a=window.location.search.substring(1).split("&"),b=0;b<a.length;b++){var e=a[b].indexOf("=");0<e&&a[b].substring(0,
e)==c.detectLngQS&&d.push(a[b].substring(e+1))}}();if(c.useCookie&&"undefined"!==typeof document){var e=k.cookie.read(c.cookieName);e&&d.push(e)}c.detectLngFromLocalStorage&&"undefined"!==typeof window&&window.localStorage&&(e=k.localStorage.getItem("i18next_lng"))&&d.push(e);if("undefined"!==typeof navigator){if(navigator.languages)for(e=0;e<navigator.languages.length;e++)d.push(navigator.languages[e]);navigator.userLanguage&&d.push(navigator.userLanguage);navigator.language&&d.push(navigator.language)}(function(){for(var e=
0;e<d.length;e++){var g=d[e];-1<g.indexOf("-")&&(g=g.split("-"),g=c.lowerCaseLng?g[0].toLowerCase()+"-"+g[1].toLowerCase():g[0].toLowerCase()+"-"+g[1].toUpperCase());if(0===b.length||-1<b.indexOf(g)){a=g;break}}})();a||(a=c.fallbackLng[0]);return a},escape:function(a){return"string"===typeof a?a.replace(/[&<>"'\/]/g,function(a){return ba[a]}):a},log:function(a){c.debug&&"undefined"!==typeof console&&console.log(a)},error:function(a){"undefined"!==typeof console&&console.error(a)},getCountyIndexOfLng:function(a){var b=
0;if("nb-NO"===a||"nn-NO"===a||"nb-no"===a||"nn-no"===a)b=1;return b},toLanguages:function(a,b){function d(a){var b=a;"string"===typeof a&&-1<a.indexOf("-")?(a=a.split("-"),b=c.lowerCaseLng?a[0].toLowerCase()+"-"+a[1].toLowerCase():a[0].toLowerCase()+"-"+a[1].toUpperCase()):b=c.lowerCaseLng?a.toLowerCase():a;return b}var e=this.log;b=b||c.fallbackLng;"string"===typeof b&&(b=[b]);var h=[],g=c.lngWhitelist||!1,f=function(a){!g||-1<g.indexOf(a)?h.push(a):e("rejecting non-whitelisted language: "+a)};
if("string"===typeof a&&-1<a.indexOf("-")){var k=a.split("-");"unspecific"!==c.load&&f(d(a));"current"!==c.load&&f(d(k[this.getCountyIndexOfLng(a)]))}else f(d(a));for(f=0;f<b.length;f++)-1===h.indexOf(b[f])&&b[f]&&h.push(d(b[f]));return h},regexEscape:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},regexReplacementEscape:function(a){return"string"===typeof a?a.replace(/\$/g,"$$$$"):a},localStorage:{setItem:function(a,b){if(window.localStorage)try{window.localStorage.setItem(a,
b)}catch(d){k.log('failed to set value for key "'+a+'" to localStorage.')}},getItem:function(a,b){if(window.localStorage)try{return window.localStorage.getItem(a,b)}catch(d){k.log('failed to get value for key "'+a+'" from localStorage.')}}}};k.applyReplacement=D;var N=[["ach","Acholi",[1,2],1],["af","Afrikaans",[1,2],2],["ak","Akan",[1,2],1],["am","Amharic",[1,2],1],["an","Aragonese",[1,2],2],["ar","Arabic",[0,1,2,3,11,100],5],["arn","Mapudungun",[1,2],1],["ast","Asturian",[1,2],2],["ay","Aymar\u00e1",
[1],3],["az","Azerbaijani",[1,2],2],["be","Belarusian",[1,2,5],4],["bg","Bulgarian",[1,2],2],["bn","Bengali",[1,2],2],["bo","Tibetan",[1],3],["br","Breton",[1,2],1],["bs","Bosnian",[1,2,5],4],["ca","Catalan",[1,2],2],["cgg","Chiga",[1],3],["cs","Czech",[1,2,5],6],["csb","Kashubian",[1,2,5],7],["cy","Welsh",[1,2,3,8],8],["da","Danish",[1,2],2],["de","German",[1,2],2],["dev","Development Fallback",[1,2],2],["dz","Dzongkha",[1],3],["el","Greek",[1,2],2],["en","English",[1,2],2],["eo","Esperanto",[1,
2],2],["es","Spanish",[1,2],2],["es_ar","Argentinean Spanish",[1,2],2],["et","Estonian",[1,2],2],["eu","Basque",[1,2],2],["fa","Persian",[1],3],["fi","Finnish",[1,2],2],["fil","Filipino",[1,2],1],["fo","Faroese",[1,2],2],["fr","French",[1,2],9],["fur","Friulian",[1,2],2],["fy","Frisian",[1,2],2],["ga","Irish",[1,2,3,7,11],10],["gd","Scottish Gaelic",[1,2,3,20],11],["gl","Galician",[1,2],2],["gu","Gujarati",[1,2],2],["gun","Gun",[1,2],1],["ha","Hausa",[1,2],2],["he","Hebrew",[1,2],2],["hi","Hindi",
[1,2],2],["hr","Croatian",[1,2,5],4],["hu","Hungarian",[1,2],2],["hy","Armenian",[1,2],2],["ia","Interlingua",[1,2],2],["id","Indonesian",[1],3],["is","Icelandic",[1,2],12],["it","Italian",[1,2],2],["ja","Japanese",[1],3],["jbo","Lojban",[1],3],["jv","Javanese",[0,1],13],["ka","Georgian",[1],3],["kk","Kazakh",[1],3],["km","Khmer",[1],3],["kn","Kannada",[1,2],2],["ko","Korean",[1],3],["ku","Kurdish",[1,2],2],["kw","Cornish",[1,2,3,4],14],["ky","Kyrgyz",[1],3],["lb","Letzeburgesch",[1,2],2],["ln","Lingala",
[1,2],1],["lo","Lao",[1],3],["lt","Lithuanian",[1,2,10],15],["lv","Latvian",[1,2,0],16],["mai","Maithili",[1,2],2],["mfe","Mauritian Creole",[1,2],1],["mg","Malagasy",[1,2],1],["mi","Maori",[1,2],1],["mk","Macedonian",[1,2],17],["ml","Malayalam",[1,2],2],["mn","Mongolian",[1,2],2],["mnk","Mandinka",[0,1,2],18],["mr","Marathi",[1,2],2],["ms","Malay",[1],3],["mt","Maltese",[1,2,11,20],19],["nah","Nahuatl",[1,2],2],["nap","Neapolitan",[1,2],2],["nb","Norwegian Bokmal",[1,2],2],["ne","Nepali",[1,2],2],
["nl","Dutch",[1,2],2],["nn","Norwegian Nynorsk",[1,2],2],["no","Norwegian",[1,2],2],["nso","Northern Sotho",[1,2],2],["oc","Occitan",[1,2],1],["or","Oriya",[2,1],2],["pa","Punjabi",[1,2],2],["pap","Papiamento",[1,2],2],["pl","Polish",[1,2,5],7],["pms","Piemontese",[1,2],2],["ps","Pashto",[1,2],2],["pt","Portuguese",[1,2],2],["pt_br","Brazilian Portuguese",[1,2],2],["rm","Romansh",[1,2],2],["ro","Romanian",[1,2,20],20],["ru","Russian",[1,2,5],4],["sah","Yakut",[1],3],["sco","Scots",[1,2],2],["se",
"Northern Sami",[1,2],2],["si","Sinhala",[1,2],2],["sk","Slovak",[1,2,5],6],["sl","Slovenian",[5,1,2,3],21],["so","Somali",[1,2],2],["son","Songhay",[1,2],2],["sq","Albanian",[1,2],2],["sr","Serbian",[1,2,5],4],["su","Sundanese",[1],3],["sv","Swedish",[1,2],2],["sw","Swahili",[1,2],2],["ta","Tamil",[1,2],2],["te","Telugu",[1,2],2],["tg","Tajik",[1,2],1],["th","Thai",[1],3],["ti","Tigrinya",[1,2],1],["tk","Turkmen",[1,2],2],["tr","Turkish",[1,2],1],["tt","Tatar",[1],3],["ug","Uyghur",[1],3],["uk",
"Ukrainian",[1,2,5],4],["ur","Urdu",[1,2],2],["uz","Uzbek",[1,2],1],["vi","Vietnamese",[1],3],["wa","Walloon",[1,2],1],["wo","Wolof",[1],3],["yo","Yoruba",[1,2],2],["zh","Chinese",[1],3]],da={1:function(a){return Number(1<a)},2:function(a){return Number(1!=a)},3:function(a){return 0},4:function(a){return Number(1==a%10&&11!=a%100?0:2<=a%10&&4>=a%10&&(10>a%100||20<=a%100)?1:2)},5:function(a){return Number(0===a?0:1==a?1:2==a?2:3<=a%100&&10>=a%100?3:11<=a%100?4:5)},6:function(a){return Number(1==a?
0:2<=a&&4>=a?1:2)},7:function(a){return Number(1==a?0:2<=a%10&&4>=a%10&&(10>a%100||20<=a%100)?1:2)},8:function(a){return Number(1==a?0:2==a?1:8!=a&&11!=a?2:3)},9:function(a){return Number(2<=a)},10:function(a){return Number(1==a?0:2==a?1:7>a?2:11>a?3:4)},11:function(a){return Number(1==a||11==a?0:2==a||12==a?1:2<a&&20>a?2:3)},12:function(a){return Number(1!=a%10||11==a%100)},13:function(a){return Number(0!==a)},14:function(a){return Number(1==a?0:2==a?1:3==a?2:3)},15:function(a){return Number(1==
a%10&&11!=a%100?0:2<=a%10&&(10>a%100||20<=a%100)?1:2)},16:function(a){return Number(1==a%10&&11!=a%100?0:0!==a?1:2)},17:function(a){return Number(1==a||1==a%10?0:1)},18:function(a){return Number(1==a?1:2)},19:function(a){return Number(1==a?0:0===a||1<a%100&&11>a%100?1:10<a%100&&20>a%100?2:3)},20:function(a){return Number(1==a?0:0===a||0<a%100&&20>a%100?1:2)},21:function(a){return Number(1==a%100?1:2==a%100?2:3==a%100||4==a%100?3:0)}},A={rules:function(){var a,b={};for(a=N.length;a--;)b[N[a][0]]={name:N[a][1],
numbers:N[a][2],plurals:da[N[a][3]]};return b}(),addRule:function(a,b){A.rules[a]=b},setCurrentLng:function(a){if(!A.currentRule||A.currentRule.lng!==a){var b=a.split("-");A.currentRule={lng:a,rule:A.rules[b[0]]}}},needsPlural:function(a,b){var d=a.split("-");return(d=A.currentRule&&A.currentRule.lng===a?A.currentRule.rule:A.rules[d[k.getCountyIndexOfLng(a)]])&&1>=d.numbers.length?!1:1!==this.get(a,b)},get:function(a,b){var d;d=a.split("-")[k.getCountyIndexOfLng(a)];if(d=A.currentRule&&A.currentRule.lng===
a?A.currentRule.rule:A.rules[d]){var c;c=d.noAbs?d.plurals(b):d.plurals(Math.abs(b));c=d.numbers[c];2===d.numbers.length&&1===d.numbers[0]&&(2===c?c=-1:1===c&&(c=1));d=c}else d=1===b?"1":"-1";return d}},M={};w=function(a,b){M[a]=b};var S=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var b=function(){b.cache.hasOwnProperty(arguments[0])||(b.cache[arguments[0]]=b.parse(arguments[0]));return b.format.call(null,b.cache[arguments[0]],arguments)};b.format=function(b,
c){var h=1,g=b.length,f="",k=[],l,n,q,p;for(l=0;l<g;l++)if(f=a(b[l]),"string"===f)k.push(b[l]);else if("array"===f){q=b[l];if(q[2])for(f=c[h],n=0;n<q[2].length;n++){if(!f.hasOwnProperty(q[2][n]))throw S('[sprintf] property "%s" does not exist',q[2][n]);f=f[q[2][n]]}else f=q[1]?c[q[1]]:c[h++];if(/[^s]/.test(q[8])&&"number"!=a(f))throw S("[sprintf] expecting number but found %s",a(f));switch(q[8]){case "b":f=f.toString(2);break;case "c":f=String.fromCharCode(f);break;case "d":f=parseInt(f,10);break;
case "e":f=q[7]?f.toExponential(q[7]):f.toExponential();break;case "f":f=q[7]?parseFloat(f).toFixed(q[7]):parseFloat(f);break;case "o":f=f.toString(8);break;case "s":f=(f=String(f))&&q[7]?f.substring(0,q[7]):f;break;case "u":f=Math.abs(f);break;case "x":f=f.toString(16);break;case "X":f=f.toString(16).toUpperCase()}f=/[def]/.test(q[8])&&q[3]&&0<=f?"+"+f:f;n=q[4]?"0"==q[4]?"0":q[4].charAt(1):" ";p=q[6]-String(f).length;if(q[6]){for(var r=[];0<p;r[--p]=n);n=r.join("")}else n="";k.push(q[5]?f+n:n+f)}return k.join("")};
b.cache={};b.parse=function(a){for(var b=[],c=[],g=0;a;){if(null!==(b=/^[^\x25]+/.exec(a)))c.push(b[0]);else if(null!==(b=/^\x25{2}/.exec(a)))c.push("%");else if(null!==(b=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))){if(b[2]){var g=g|1,f=[],k=b[2],l=[];if(null!==(l=/^([a-z_][a-z_\d]*)/i.exec(k)))for(f.push(l[1]);""!==(k=k.substring(l[0].length));)if(null!==(l=/^\.([a-z_][a-z_\d]*)/i.exec(k)))f.push(l[1]);else if(null!==(l=/^\[(\d+)\]/.exec(k)))f.push(l[1]);
else throw"[sprintf] huh?";else throw"[sprintf] huh?";b[2]=f}else g|=2;if(3===g)throw"[sprintf] mixing positional and named placeholders is not (yet) supported";c.push(b)}else throw"[sprintf] huh?";a=a.substring(b[0].length)}return c};return b}();w("sprintf",function(a,b,c){return c.sprintf?"[object Array]"===Object.prototype.toString.apply(c.sprintf)?(b=c.sprintf,b.unshift(a),S.apply(null,b)):"object"===typeof c.sprintf?S(a,c.sprintf):a:a});v.init=J;v.isInitialized=function(){return Q};v.setLng=
O;v.preload=function(a,b){"string"===typeof a&&(a=[a]);for(var d=0,e=a.length;d<e;d++)0>c.preload.indexOf(a[d])&&c.preload.push(a[d]);return J(b)};v.addResourceBundle=function(a,b,d,e){"string"!==typeof b?(d=b,b=c.ns.defaultNs):0>c.ns.namespaces.indexOf(b)&&c.ns.namespaces.push(b);u[a]=u[a]||{};u[a][b]=u[a][b]||{};e?k.deepExtend(u[a][b],d):k.extend(u[a][b],d);c.useLocalStorage&&G._storeLocal(u)};v.hasResourceBundle=function(a,b){"string"!==typeof b&&(b=c.ns.defaultNs);u[a]=u[a]||{};var d=u[a][b]||
{},e=!1,h;for(h in d)d.hasOwnProperty(h)&&(e=!0);return e};v.getResourceBundle=function(a,b){"string"!==typeof b&&(b=c.ns.defaultNs);u[a]=u[a]||{};return k.extend({},u[a][b])};v.addResource=p;v.addResources=function(a,b,d){"string"!==typeof b?(resource=b,b=c.ns.defaultNs):0>c.ns.namespaces.indexOf(b)&&c.ns.namespaces.push(b);for(var e in d)"string"===typeof d[e]&&p(a,b,e,d[e])};v.removeResourceBundle=function(a,b){"string"!==typeof b&&(b=c.ns.defaultNs);u[a]=u[a]||{};u[a][b]={};c.useLocalStorage&&
G._storeLocal(u)};v.loadNamespace=function(a,b){L([a],b)};v.loadNamespaces=L;v.setDefaultNamespace=function(a){c.ns.defaultNs=a};v.t=B;v.translate=B;v.exists=Z;v.detectLanguage=k.detectLanguage;v.pluralExtensions=A;v.sync=G;v.functions=k;v.lng=function(){return I};v.addPostProcessor=w;v.applyReplacement=k.applyReplacement;v.options=c;v.noConflict=function(){window.i18next=window.i18n;W?window.i18n=W:delete window.i18n}})("undefined"===typeof x?window:x)},{}],2:[function(E,z,x){(function(){var w;w=
"undefined"!==typeof E?E("i18next-client"):window.i18n;var C,x,H={init:function(w,p,L,x,z){C.utils.domNodeDisposal.addDisposeCallback(w,function(){var p=y._koElements.indexOf(w);0<=p&&(y._koElements.splice(p,1),y._koCallbacks.splice(p,1))});y._koElements.push(w);y._koCallbacks.push(C.bindingHandlers.i18n.update.bind(void 0,w,p,L,x,z));H.update(w,p,L,x,z)},update:function(y,p,x,z,E){p=C.toJS(p());if("string"===typeof p)y.innerHTML=w.t(p);else if(p.key)y.innerHTML=w.t(p.key,p.options);else for(var H in p)x=
p[H],x="string"===typeof x?w.t(x):w.t(x.key,C.toJS(x.options)),"html"==H?y.innerHTML=x:(z=document.createElement("div"),z.innerHTML=x,y.setAttribute(H,z.innerText))}},y={_koElements:[],_koCallbacks:[],setLanguage:function(z){w.setLng(z);y._language(z);y._koCallbacks.forEach(function(p){return p.call(void 0)});"undefined"!==typeof x&&"undefined"!==typeof x.fn.i18n&&x("html").i18n()},init:function(z,p,E,O){C=E||window.ko;x=O||window.$;w.init({lng:p||"en",resStore:z});C.bindingHandlers.i18n=H;y._language=
C.observable(p);y.setLanguage(p)},t:function(){var x=arguments;return C.computed(function(){y._language();return w.t.apply(void 0,x)})},i18n:w};"undefined"!==typeof z?z.exports=y:window.i18nextko=y})()},{"i18next-client":1}]},{},[2])(2)});