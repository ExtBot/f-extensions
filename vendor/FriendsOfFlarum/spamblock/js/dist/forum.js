module.exports=function(t){var o={};function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=o,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="",r(r.s=6)}([function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["utils/UserControls"]},function(t,o){t.exports=flarum.core.compat["models/User"]},function(t,o){t.exports=flarum.core.compat.Model},,function(t,o,r){"use strict";r.r(o);var e=r(0),n=r(1),a=r.n(n),u=r(2),c=r.n(u),i=r(3),f=r.n(i),l=r(4),p=r.n(l);app.initializers.add("fof/spamblock",(function(){f.a.prototype.canSpamblock=p.a.attribute("canSpamblock"),Object(e.extend)(c.a,"moderationControls",(function(t,o){o.canSpamblock()&&t.add("spammer",a.a.component({icon:"fas fa-pastafarianism",children:app.translator.trans("fof-spamblock.forum.user_controls.spammer_button"),onclick:function(){confirm(app.translator.trans("fof-spamblock.forum.user_controls.spammer_confirmation"))&&app.request({url:app.forum.attribute("apiUrl")+"/users/"+o.id()+"/spamblock",method:"POST"}).then((function(){return window.location.reload()}))}}))}))}))}]);
//# sourceMappingURL=forum.js.map