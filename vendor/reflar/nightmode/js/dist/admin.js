module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=12)}({0:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r={AUTO:0,LIGHT:1,DARK:2,DEFAULT:function(){return Number.parseInt(app.data["fof-nightmode.default_theme"])||0}},o={localStorageKey:"fofNightMode_deviceTheme"};e.c=r},12:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(0),a=r.settings.SettingsModal,i=r.settings.items.SelectItem,u="fof-nightmode.admin.settings.modal";var f=function(){app.extensionSettings["fof-nightmode"]=function(){return app.modal.show(new a({title:app.translator.trans(u+".title"),size:"small",className:"fof-nightmode",items:[m("div",{className:"Form-group"},m("label",null,app.translator.trans(u+".default_theme")),i.component({options:(t={},Object.keys(o.c).forEach((function(e,n){"DEFAULT"!==e&&(t[n]=app.translator.trans(u+".theme_"+e.toLowerCase()))})),t),key:"fof-nightmode.default_theme",required:!1,cast:function(t){return""===t?0:t}})),m("p",null,app.translator.trans(u+".default_theme_helper")),m("p",{style:"color:#f00c;font-weight:bold;"},app.translator.trans(u+".default_theme_important"))]}));var t}};app.initializers.add("fof-nightmode",(function(t){f()}))},3:function(t,e){t.exports=flarum.extensions["fof-components"]}});
//# sourceMappingURL=admin.js.map