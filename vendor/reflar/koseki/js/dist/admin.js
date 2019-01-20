module.exports=function(t){var e={};function o(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=22)}([function(t,e,o){"use strict";function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",function(){return i})},,function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["tags/models/Tag"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Page"]},,,,function(t,e){t.exports=flarum.core.compat["tags/components/EditTagModal"]},,,,,,function(t,e){t.exports=flarum.core.compat["components/BasicsPage"]},function(t,e){t.exports=flarum.core.compat["components/AdminNav"]},function(t,e){t.exports=flarum.core.compat["components/AdminLinkButton"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["utils/saveSettings"]},,function(t,e,o){"use strict";o.r(e);var i=o(4),n=o(2),a=o.n(n),s=o(15),r=o.n(s),c=o(9),u=o.n(c),l=o(3),p=o.n(l),d=o(16),f=o.n(d),g=o(17),h=o.n(g),v=o(0),k=o(5),y=o.n(k),b=o(18),w=o.n(b),x=o(19),P=o.n(x),N=o(20),j=o.n(N),O=function(t){function e(){return t.apply(this,arguments)||this}Object(v.a)(e,t);var o=e.prototype;return o.init=function(){t.prototype.init.call(this),this.loading=!1,this.tagsView=m.prop(app.data.settings["koseki.tags_view"]),this.statisticsWidget=m.prop(app.data.settings["koseki.statistics_widget"])},o.view=function(){return m("div",{className:"KosekiPage"},m("div",{className:"KosekiPage-header"},m("div",{className:"container"},"Tidy up your flarum forum with a structured hierarchical layout.")),m("div",{className:"container"},m("h3",null,"Hierarchical grid layout"),"Choose a view grid which users will first see when they visit your forum.",m("br",null),m("br",null),m("form",{onsubmit:this.onsubmit.bind(this)},m("div",{class:"Form-group"},m("input",{type:"radio",className:"KosekiPage-radio",name:"tagsView",value:"compact",checked:"compact"==this.tagsView(),onclick:m.withAttr("value",this.tagsView)})," Compact",m("br",null),m("div",{className:"KosekiPage-viewBar"},"Forum title"),m("div",{className:"KosekiPage-viewBar"},"Statistics"),m("div",{className:"KosekiPage-viewBar"},"Last post")),m("div",{class:"Form-group"},m("input",{type:"radio",className:"KosekiPage-radio",name:"tagsView",value:"default",checked:void 0===this.tagsView()||"default"==this.tagsView(),onclick:m.withAttr("value",this.tagsView)})," Default",m("br",null),m("div",{className:"KosekiPage-viewBar"},"Forum title"),m("div",{className:"KosekiPage-viewBar"},"Discussions"),m("div",{className:"KosekiPage-viewBar"},"Posts"),m("div",{className:"KosekiPage-viewBar"},"Last post")),m("h3",null,"Settings"),m("div",{class:"Form-group"},P.a.component({state:this.statisticsWidget(),children:"Hide forum statistics",onchange:this.statisticsWidget})),w.a.component({type:"submit",className:"Button Button--primary",children:"Submit",loading:this.loading}))))},o.onsubmit=function(t){var e=this;if(t.preventDefault(),!this.loading){this.loading=!0;var o={"koseki.tags_view":this.tagsView(),"koseki.statistics_widget":this.statisticsWidget()};j()(o).then(function(){e.loading=!1,m.redraw()})}},e}(y.a),_=function(){app.routes.koseki={path:"/koseki",component:O.component()},app.extensionSettings["flarum-koseki"]=function(){return m.route(app.route("koseki"))},Object(i.extend)(f.a.prototype,"items",function(t){t.add("koseki",h.a.component({href:app.route("koseki"),icon:"fas fa-list",children:"Koseki",description:"Manage your hierarchical layout."}))})};app.initializers.add("reflar-koseki",function(t){_(),Object(i.extend)(r.a.prototype,"homePageItems",function(t){t.add("koseki",{path:"/koseki",label:"Koseki"})}),p.a.prototype.icon=a.a.attribute("icon"),Object(i.extend)(u.a.prototype,"init",function(){this.icon=m.prop(this.tag.icon()||"")});var e=0;Object(i.extend)(u.a.prototype,"content",function(t){if(0==e){var o=this,i=document.createElement("div");i.classList+="Form-group",i.innerHTML='<label>Icon</label> <input class="FormControl" value="'+this.icon()+'">';var n=i.querySelector("input");if(n.oninput=function(){o.icon=m.prop(n.value)},this.element)this.element.getElementsByClassName("Form-group")[4].before(i)}else e=0}),Object(i.extend)(u.a.prototype,"submitData",function(t){t.icon=this.icon,e=1})},-50)}]);
//# sourceMappingURL=admin.js.map