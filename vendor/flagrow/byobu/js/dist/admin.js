module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=39)}({0:function(e,t){e.exports=flarum.core.compat.extend},16:function(e,t){e.exports=flarum.core.compat["components/PermissionGrid"]},18:function(e,t,r){"use strict";var n=r(37),i=r.n(n),o=r(0),s=r(16),a=r.n(s),u=function(){Object(o.extend)(a.a.prototype,"startItems",function(e){e.add("startPrivateUsers",{icon:"far fa-map",label:app.translator.trans("flagrow-byobu.admin.permission.create_private_discussions_with_users"),permission:"discussion.startPrivateDiscussionWithUsers"},95),e.add("startPrivateGroups",{icon:"far fa-map",label:app.translator.trans("flagrow-byobu.admin.permission.create_private_discussions_with_groups"),permission:"discussion.startPrivateDiscussionWithGroups"},95)}),Object(o.extend)(a.a.prototype,"moderateItems",function(e){e.add("editUserRecipients",{icon:"far fa-map",label:app.translator.trans("flagrow-byobu.admin.permission.edit_user_recipients"),permission:"discussion.editUserRecipients"},95),e.add("editGroupRecipients",{icon:"far fa-map",label:app.translator.trans("flagrow-byobu.admin.permission.edit_group_recipients"),permission:"discussion.editGroupRecipients"},95)})};app.initializers.add("flagrow-byobu",function(e){e.store.models.recipients=i.a,u()})},37:function(e,t){e.exports=flarum.core.compat["core/models/User"]},39:function(e,t,r){"use strict";r.r(t);var n=r(9);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);r(18)},9:function(e,t){}});
//# sourceMappingURL=admin.js.map