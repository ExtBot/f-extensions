module.exports=function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.extensions["fof-components"]},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(1),i=s.settings.SettingsModal,o=s.settings.items,l=(o.BooleanItem,o.SelectItem);r.a.initializers.add("fof/sitemap",(function(){r.a.extensionSettings["fof-sitemap"]=function(){return r.a.modal.show(new i({title:r.a.translator.trans("fof-sitemap.admin.settings.title"),type:"medium",items:[m("div",{className:"Form-group"},m("label",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_label")),l.component({options:{run:r.a.translator.trans("fof-sitemap.admin.settings.modes.runtime"),cache:r.a.translator.trans("fof-sitemap.admin.settings.modes.cache"),"cache-disk":r.a.translator.trans("fof-sitemap.admin.settings.modes.cache_disk"),"multi-file":r.a.translator.trans("fof-sitemap.admin.settings.modes.multi_file")},key:"fof-sitemap.mode",required:!0})),m("p",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help")),m("div",null,m("h3",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_runtime_label")),m("p",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_runtime"))),m("h4",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_schedule")),m("p",null,"Without the Flarum scheduler correctly setup, the following modes will not run. Refer here ",m("a",{href:"https://discuss.flarum.org/d/24118",target:"_blank"},"for more information.")),m("div",null,m("h3",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_cache_disk_label")),m("p",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_cache_disk"))),m("h4",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_large")),m("div",null,m("h3",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_multi_label")),m("p",null,r.a.translator.trans("fof-sitemap.admin.settings.mode_help_multi"))),m("hr",null),m("h3",null,r.a.translator.trans("fof-sitemap.admin.settings.advanced_options_label")),m("div",{className:"Form-group"},m("label",null,r.a.translator.trans("fof-sitemap.admin.settings.frequency_label")),l.component({options:{hourly:r.a.translator.trans("fof-sitemap.admin.settings.frequency.hourly"),"twice-daily":r.a.translator.trans("fof-sitemap.admin.settings.frequency.twice_daily"),daily:r.a.translator.trans("fof-sitemap.admin.settings.frequency.daily")},key:"fof-sitemap.frequency",required:!0}))]}))}}))}]);
//# sourceMappingURL=admin.js.map