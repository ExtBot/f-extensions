module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["utils/UserControls"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["models/User"]},,function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(0),a=o.n(r),u=o(2),i=o.n(u),f=o(3),c=o.n(f),l=o(4),p=o.n(l),s=o(5),m=o.n(s);a.a.initializers.add("fof/impersonate",(function(){m.a.prototype.fofCanImpersonate=p.a.attribute("fofCanImpersonate"),Object(n.extend)(i.a,"moderationControls",(function(e,t){t.fofCanImpersonate()&&e.add("fof-impersonate-login",c.a.component({children:a.a.translator.trans("fof-impersonate.forum.user_controls.impersonate_button"),icon:"fas fa-id-card",onclick:function(){a.a.request({method:"POST",url:a.a.forum.attribute("apiUrl")+"/impersonate/"+t.id()}).then((function(){window.location.reload()}))}}))}))}))}]);
//# sourceMappingURL=forum.js.map