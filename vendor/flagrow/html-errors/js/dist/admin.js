module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=3)}([function(t,r){t.exports=flarum.core.compat.app},function(t,r){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,r){t.exports=flarum.core.compat.extend},function(t,r,e){"use strict";e.r(r);e(2);var o=e(0),n=e.n(o);var a=e(1),u=function(t){var r,e;function o(){return t.apply(this,arguments)||this}e=t,(r=o).prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e;var a=o.prototype;return a.title=function(){return n.a.translator.trans("fof-html-errors.admin.settings.title")},a.className=function(){return"Modal--large"},a.form=function(){var t=this;return[403,404,500,503].map((function(r){return m(".Form-group",[m("label",n.a.translator.trans("fof-html-errors.admin.settings.error."+r)),m("textarea.FormControl",{bidi:t.setting("flagrow-html-errors.custom"+r+"ErrorHtml"),placeholder:n.a.translator.trans("fof-html-errors.admin.settings.placeholder.empty_for_default")})])}))},o}(e.n(a).a);n.a.initializers.add("fof-html-errors",(function(t){t.extensionSettings["fof-html-errors"]=function(){return t.modal.show(u)}}))}]);
//# sourceMappingURL=admin.js.map