module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t,n){"use strict";var r={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return Number.parseInt(app.data["fof-nightmode.default_theme"])||0}};t.a=r},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s}));var r=n(4),o=n(0),i="flarum_nightmode",a=function(){var e=r.get(i);return e||"0"===e?Number(e):o.a.DEFAULT()},c=function(e){return r.set(i,e,{sameSite:"lax",secure:"https:"===location.protocol})},s=function(){return r.remove(i)}},function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(5),o=n(7),i=n.n(o),a=n(0),c=n(6),s=n(3);function u(){var e=app.session.user;e?(e.preferences().fofNightMode_perDevice&&Object(c.a)(),f(Object(s.a)())):f(a.a.DEFAULT())}function f(e){if(e===a.a.DARK)l("night");else if(e===a.a.LIGHT)l("day");else{l(window.matchMedia("(prefers-color-scheme: dark)").matches?"night":"day")}}function l(e){var t=document.querySelector("link.nightmode-light[rel=stylesheet]"),n=document.querySelector("link.nightmode-dark[rel=stylesheet]");if(t&&n){if(0===Object(s.a)())return;var r="day"===e?t:n;("day"===e?n:t).remove(),r.setAttribute("media",""),r.className="nightmode"}else{var o=t||n||document.querySelector("link.nightmode[rel=stylesheet]"),i={day:app.data["fof-nightmode.assets.day"],night:app.data["fof-nightmode.assets.night"]}[e];i!==o.href&&(o.href=i,o.className="nightmode")}}t.a=function(){Object(r.extend)(i.a.prototype,"init",u)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(1);function i(){var e,t=app.session.user,n=t&&!!t.preferences().fofNightMode_perDevice,i=t&&t.preferences().fofNightMode;return n?e=Object(o.a)():"number"==typeof i&&-1!==i&&(e=i),"number"==typeof e?e:r.a.DEFAULT()}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function i(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return o("Expires",e.expires?e.expires.toUTCString():"")+o("Domain",e.domain)+o("Path",e.path)+o("Secure",e.secure)+o("SameSite",e.sameSite)}(n)}function a(e){for(var t={},n=e?e.split("; "):[],r=/(%[\dA-F]{2})+/gi,o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");'"'===a.charAt(0)&&(a=a.slice(1,-1));try{t[i[0].replace(r,decodeURIComponent)]=a.replace(r,decodeURIComponent)}catch(e){}}return t}function c(){return a(document.cookie)}function s(e,t,n){document.cookie=i(e,t,r({path:"/"},n))}t.__esModule=!0,t.encode=i,t.parse=a,t.getAll=c,t.get=function(e){return c()[e]},t.set=s,t.remove=function(e,t){s(e,"",r(r({},t),{expires:-1}))}},function(e,t){e.exports=flarum.core.compat.extend},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(1);function i(){var e=Array.from(new Set(Object.values(r.a))),t=Object(o.a)();isNaN(t)?a("Theme is not a valid integer! Resetting..."):e.includes(t)||a("Theme is out of bounds! Resetting...")}function a(e){console.warn(e),Object(o.c)(r.a.DEFAULT())}},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.extensions["fof-components"]},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(8),o=n(0),i=r.settings.SettingsModal,a=r.settings.items.SelectItem,c="fof-nightmode.admin.settings.modal";var s=n(2);app.initializers.add("fof-nightmode",(function(){app.extensionSettings["fof-nightmode"]=function(){return app.modal.show(new i({title:app.translator.trans(c+".title"),size:"small",className:"fof-nightmode",items:[m("div",{className:"Form-group"},m("label",null,app.translator.trans(c+".default_theme")),a.component({options:(e={},Object.keys(o.a).forEach((function(t,n){"DEFAULT"!==t&&(e[n]=app.translator.trans(c+".theme_"+t.toLowerCase()))})),e),key:"fof-nightmode.default_theme",required:!1,cast:function(e){return""===e?0:e}})),m("p",null,app.translator.trans(c+".default_theme_helper")),m("p",{style:"color:#f00c;font-weight:bold;"},app.translator.trans(c+".default_theme_important"))]}));var e},Object(s.a)()}))}]);
//# sourceMappingURL=admin.js.map