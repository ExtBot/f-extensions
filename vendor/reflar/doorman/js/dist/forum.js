module.exports=function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=17)}({0:function(e,r){e.exports=flarum.core.compat.app},17:function(e,r,t){"use strict";t.r(r);var o=t(0),n=t.n(o),a=t(2),u=t(6),i=t.n(u);n.a.initializers.add("reflar-doorman",function(){Object(a.extend)(i.a.prototype,"init",function(){this.doorkey=m.prop("")}),Object(a.extend)(i.a.prototype,"fields",function(e){var r=JSON.parse(n.a.forum.data.attributes["reflar.doorman.allowPublic"]),t=n.a.translator.trans("reflar-doorman.forum.sign_up.doorman_placeholder");r&&(t=n.a.translator.trans("reflar-doorman.forum.sign_up.doorman_placeholder_optional")),e.add("doorkey",m("div",{className:"Form-group"},m("input",{className:"FormControl",name:"reflar-doorkey",type:"text",placeholder:t,bidi:this.doorkey,disabled:this.loading})))}),Object(a.extend)(i.a.prototype,"submitData",function(e){var r=e;return r["reflar-doorkey"]=this.doorkey,r})})},2:function(e,r){e.exports=flarum.core.compat.extend},6:function(e,r){e.exports=flarum.core.compat["components/SignUpModal"]}});
//# sourceMappingURL=forum.js.map