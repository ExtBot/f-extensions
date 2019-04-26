module.exports=function(a){var t={};function n(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=a,n.c=t,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)n.d(e,r,function(t){return a[t]}.bind(null,r));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="",n(n.s=23)}([function(a,t){a.exports=flarum.core.compat.app},function(a,t){a.exports=flarum.core.compat.Model},function(a,t){a.exports=flarum.core.compat["components/Button"]},function(a,t){a.exports=flarum.core.compat.Component},function(a,t){a.exports=flarum.core.compat["components/Badge"]},function(a,t){a.exports=flarum.core.compat["helpers/icon"]},function(a,t){a.exports=flarum.core.compat["components/Modal"]},function(a,t){a.exports=flarum.core.compat["utils/computed"]},function(a,t){a.exports=flarum.core.compat["components/LinkButton"]},function(a,t){a.exports=flarum.core.compat.extend},function(a,t){a.exports=flarum.core.compat["utils/mixin"]},function(a,t){a.exports=flarum.core.compat["components/SettingsModal"]},function(a,t){a.exports=flarum.core.compat["components/Switch"]},function(a,t){a.exports=flarum.core.compat["helpers/fullTime"]},function(a,t){a.exports=flarum.core.compat["utils/ItemList"]},function(a,t){a.exports=flarum.core.compat["utils/extract"]},function(a,t){a.exports=flarum.core.compat["components/AdminNav"]},function(a,t){a.exports=flarum.core.compat["components/AdminLinkButton"]},function(a,t){a.exports=flarum.core.compat["components/Dropdown"]},function(a,t){a.exports=flarum.core.compat["components/Placeholder"]},function(a,t){a.exports=flarum.core.compat["utils/extractText"]},function(a,t){a.exports=flarum.core.compat["utils/saveSettings"]},function(a,t){a.exports=flarum.core.compat["helpers/humanTime"]},function(a,t,n){"use strict";n.r(t);var e=n(9),r=n(0),o=n.n(r);function i(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}var s=n(1),l=n.n(s),c=n(10),u=n.n(c),p=n(7),d=n.n(p),f=function(a){function t(){return a.apply(this,arguments)||this}return i(t,a),t}(u()(l.a,{package:l.a.attribute("package"),title:l.a.attribute("title"),description:l.a.attribute("description"),license:l.a.attribute("license"),icon:l.a.attribute("icon"),locale:l.a.attribute("locale"),discuss_link:l.a.attribute("discuss_link"),landing_link:l.a.attribute("landing_link"),downloads:l.a.attribute("downloads"),installed:l.a.attribute("installed"),enabled:l.a.attribute("enabled"),pending:l.a.attribute("pending"),installed_version:l.a.attribute("installed_version"),highest_version:l.a.attribute("highest_version"),outdated:l.a.attribute("outdated"),flarum_id:l.a.attribute("flarum_id"),premium:l.a.attribute("premium"),subscribed:l.a.attribute("subscribed"),can_install:d()("installed","premium","subscribed","flarumCompatibilityCurrent",function(a,t,n,e){return!a&&e&&(!t||n)}),can_uninstall:d()("installed","enabled",function(a,t){return a&&!t}),can_enable:d()("installed","enabled",function(a,t){return a&&!t}),can_disable:d()("installed","enabled",function(a,t){return a&&t}),canCheckout:l.a.attribute("canCheckout"),canUnsubscribe:l.a.attribute("canUnsubscribe"),canSafelyUnsubscribe:d()("canUnsubscribe","installed",function(a,t){return a&&!t}),favorites:l.a.attribute("favorites"),favorited:l.a.attribute("favorited"),flarumCompatibilityLatest:l.a.attribute("flarumCompatibilityLatest"),flarumCompatibilityNext:l.a.attribute("flarumCompatibilityNext"),flarumCompatibilityCurrent:l.a.attribute("flarumCompatibilityCurrent")})),h=function(a){function t(){return a.apply(this,arguments)||this}return i(t,a),t}(u()(l.a,{status:l.a.attribute("status"),command:l.a.attribute("command"),package:l.a.attribute("package"),output:l.a.attribute("output"),created_at:l.a.attribute("created_at"),started_at:l.a.attribute("started_at"),finished_at:l.a.attribute("finished_at")})),b=n(16),g=n.n(b),v=n(17),w=n.n(v),x=n(3),y=n.n(x),z=function(){function a(a){this.extensions=m.prop([]),this.loading=a}var t=a.prototype;return t.requestError=function(){this.loading("error"),m.redraw()},t.installExtension=function(a){var t=this;this.loading(!0),o.a.request({method:"POST",url:o.a.forum.attribute("apiUrl")+"/bazaar-extensions",timeout:0,data:{id:a.id()}}).then(function(a){return t.updateExtensionInRepository(a)}).catch(function(){return t.requestError()})},t.installFailure=function(a){this.resetNavigation(),this.loadNextPage()},t.uninstallExtension=function(a){var t=this;this.loading(!0),o.a.request({method:"DELETE",timeout:0,url:o.a.forum.attribute("apiUrl")+"/bazaar-extensions/"+a.id()}).then(function(a){return t.updateExtensionInRepository(a)}).catch(function(){return t.requestError()})},t.uninstallFailure=function(a){this.resetNavigation(),this.loadNextPage()},t.favoriteExtension=function(a){var t=this;this.loading(!0),o.a.request({method:"post",url:o.a.forum.attribute("apiUrl")+"/bazaar-extensions/"+a.id()+"/favorite",data:{favorite:1!=a.favorited()}}).then(function(a){return t.updateExtensionInRepository(a)}).catch(function(){return t.requestError()})},t.premiumExtensionSubscribe=function(a,t){void 0===t&&(t=!0),function(a){void 0===a&&(a={});var t=a.url||"/",n=a.waitForUrl||null,e=a.width||600,r=a.height||400,o=$(window),i=m.deferred(),s=window.open(t,"bazaarPopup","width="+e+",height="+r+",top="+(o.height()/2-r/2)+",left="+(o.width()/2-e/2)+",status=no,scrollbars=no,resizable=no"),l=window.setInterval(function(){try{s.closed?(window.clearInterval(l),i.reject()):s.document.URL===n&&(window.clearInterval(l),s.close(),i.resolve())}catch(a){}},500);return i.promise}({url:o.a.forum.attribute("apiUrl")+"/bazaar/redirect/"+(t?"":"un")+"subscribe/"+a.id(),waitForUrl:o.a.forum.attribute("apiUrl")+"/bazaar/callback/subscription"}).then(function(){window.location.reload()}).catch(function(){alert(o.a.translator.trans("flagrow-bazaar.admin.page.extension.subscribe_check_failed"))})},t.premiumExtensionUnsubscribe=function(a){this.premiumExtensionSubscribe(a,!1)},t.updateExtension=function(a){var t=this;this.loading(!0),o.a.request({url:o.a.forum.attribute("apiUrl")+"/bazaar-extensions/"+a.id(),timeout:0,method:"PATCH"}).then(function(a){return t.updateExtensionInRepository(a)}).catch(function(){return t.requestError()})},t.toggleExtension=function(a){var t=this;this.loading(!0);var n=a.enabled();o.a.request({url:o.a.forum.attribute("apiUrl")+"/bazaar-extensions/"+a.id()+"/toggle",method:"PATCH",data:{enabled:!n}}).then(function(a){return t.updateExtensionInRepository(a)}).catch(function(){return t.requestError()})},t.disableExtension=function(a){return this.toggleExtension(a)},t.enableExtension=function(a){return this.toggleExtension(a)},t.getExtensionIndex=function(a){return this.extensions().findIndex(function(t){return t.id()==a.id()})},t.updateExtensionInRepository=function(a){this.loading(!1);var t=o.a.store.pushObject(a.data);return this.extensions()[this.getExtensionIndex(t)]=t,m.redraw(),t},a}(),k=n(2),N=n.n(k),_=n(5),B=n.n(_),E=n(14),q=n.n(E),I=n(18),P=n.n(I),C=n(4),M=n.n(C),T=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.config=function(a){a||this.props.extension.description()&&this.$(".ExtensionIcon").tooltip({container:"body"})},n.view=function(){var a=this.props.extension,t=this.props.connected||!1,n=this.controlItems(a,t).toArray(),e=this.badges(a).toArray(),r=this.props.repository;return m("div",{className:"Extension "+(a.enabled()?"enabled ":"disabled ")+(a.installed()?"installed ":"uninstalled ")+(a.outdated()?"outdated ":"")+(a.pending()?"pending ":"")+(n.length>0?"hasControls":"")+(a.favorited()?"favorited":"")+(a.flarumCompatibilityCurrent()?" compatible":"incompatible"),key:a.id(),"data-id":a.id()},m("span",{className:"Extension-icon",style:a.icon()||"",title:a.description()},a.icon()?B()("fas fa-"+a.icon().name):""),m("div",{className:"Extension-meta"},m("ul",{className:"ExtensionListItem-badges badges"},e),m("label",{className:"Meta-Title"},a.title()||a.package()),m("div",{className:"Meta-Item description"},a.description()),m("div",{className:"Meta-Item vendor"},m("div",{className:"label"},m("i",{className:"fas fa-user"})," ",app.translator.trans("flagrow-bazaar.admin.page.extension.vendor")),m("div",{className:"value"},a.package().split("/")[0])),m("div",{className:"Meta-Item downloads"},m("div",{className:"label"},m("i",{class:"fas fa-download"})," ",app.translator.trans("flagrow-bazaar.admin.page.extension.downloads")),m("div",{className:"value"},a.downloads())),m("div",{className:"Meta-Item favorites"},m("div",{className:"label"},m("i",{className:"fas fa-heart"})," ",app.translator.trans("flagrow-bazaar.admin.page.extension.favorites")),m("div",{className:"value"},a.favorites())),a.installed_version()?m("div",{className:"Meta-Item version"},m("div",{className:"label"},app.translator.trans("flagrow-bazaar.admin.page.extension.installed_version")),m("div",{className:"value"},a.installed_version())):"",m("div",{className:"Meta-Item version"},m("div",{className:"label"},app.translator.trans("flagrow-bazaar.admin.page.extension.highest_version")),m("div",{className:"value"},a.highest_version())),m("div",{className:"Extension-controls"},t?m(N.a,{className:"Button Button--icon Button--flat favorite",icon:(a.favorited()?"fas":"far")+" fa-heart",onclick:function(){return r.favoriteExtension(a)}}):"",a.discuss_link()?m(N.a,{className:"Button Button--icon Button--flat",icon:"fas fa-comments",onclick:function(){return window.open(a.discuss_link())}}):"",a.landing_link()?m(N.a,{className:"Button Button--icon Button--flat",icon:"fas fa-chart-line",onclick:function(){return window.open(a.landing_link())}}):"",n.length>0?m(P.a,{buttonClassName:"Button Button--icon Button--flat",menuClassName:"Dropdown-menu--right",icon:"fas fa-ellipsis-h"},n):"")))},n.controlItems=function(a,t){var n=this,e=new q.a,r=this.props.repository,o=a.favorited()?"flagrow-bazaar.admin.page.button.remove_favorite_button":"flagrow-bazaar.admin.page.button.favorite_button";return t&&e.add("favorite",N.a.component({icon:"fas fa-heart",children:app.translator.trans(o),onclick:function(){r.favoriteExtension(a)}})),a.pending()||(a.enabled()&&app.extensionSettings[name]&&e.add("settings",N.a.component({icon:"fas fa-cog",children:app.translator.trans("core.admin.extensions.settings_button"),onclick:app.extensionSettings[name]})),a.can_uninstall()&&e.add("uninstall",N.a.component({icon:"fas fa-minus-square",children:app.translator.trans("flagrow-bazaar.admin.page.button.uninstall"),onclick:function(){n.props.extension=r.uninstallExtension(a)}})),a.can_enable()&&e.add("enable",N.a.component({icon:"fas fa-check-square",children:app.translator.trans("flagrow-bazaar.admin.page.button.enable"),onclick:function(){r.enableExtension(a)}})),a.installed()&&a.outdated()&&e.add("update",N.a.component({icon:"fas fa-level-up",children:app.translator.trans("flagrow-bazaar.admin.page.button.update"),onclick:function(){n.props.extension=r.updateExtension(a)}})),a.can_disable()&&e.add("disable",N.a.component({icon:"fas fa-square",children:app.translator.trans("flagrow-bazaar.admin.page.button.disable"),onclick:function(){n.props.extension=r.disableExtension(a)}})),a.can_install()&&e.add("install",N.a.component({icon:"fas fa-plus-square",children:app.translator.trans("flagrow-bazaar.admin.page.button.install"),onclick:function(){n.props.extension=r.installExtension(a)}}))),a.premium()&&!t&&e.add("subscribe",N.a.component({disabled:!0,icon:"fas fa-shopping-cart",children:app.translator.trans("flagrow-bazaar.admin.page.button.connect_to_subscribe")})),a.canCheckout()&&t&&e.add("subscribe",N.a.component({icon:"fas fa-shopping-cart",children:app.translator.trans("flagrow-bazaar.admin.page.button.subscribe"),onclick:function(){r.premiumExtensionSubscribe(a)}})),a.canSafelyUnsubscribe()&&t&&e.add("unsubscribe",N.a.component({icon:"fas fa-ban",children:app.translator.trans("flagrow-bazaar.admin.page.button.unsubscribe"),onclick:function(){r.premiumExtensionUnsubscribe(a)}})),e},n.badges=function(a){var t=new q.a;return a.flarumCompatibilityNext()||t.add("nextIncompatible",m(M.a,{icon:"fas fa-exclamation",type:"nextIncompatible",label:app.translator.trans("flagrow-bazaar.admin.page.extension.next_incompatible")})),a.flarumCompatibilityLatest()||t.add("latestIncompatible",m(M.a,{icon:"fas fa-exclamation-circle",type:"latestIncompatible",label:app.translator.trans("flagrow-bazaar.admin.page.extension.latest_incompatible")})),a.flarumCompatibilityCurrent()||t.add("incompatible",m(M.a,{icon:"fas fa-exclamation-triangle",type:"incompatible",label:app.translator.trans("flagrow-bazaar.admin.page.extension.incompatible")})),a.subscribed()?t.add("subscribed",m(M.a,{icon:"fas fa-shopping-cart",type:"subscribed",label:app.translator.trans("flagrow-bazaar.admin.page.extension.subscribed")})):a.premium()&&t.add("premium",m(M.a,{icon:"fas fa-certificate",type:"premium",label:app.translator.trans("flagrow-bazaar.admin.page.extension.premium")})),a.pending()&&t.add("pending",m(M.a,{icon:"fas fa-circle-notch fa-spin",type:"pending",label:app.translator.trans("flagrow-bazaar.admin.page.extension.pending")})),a.installed()&&a.outdated()&&t.add("outdated",m(M.a,{icon:"fas fa-sort-numeric-down",type:"outdated",label:app.translator.trans("flagrow-bazaar.admin.page.extension.outdated",{new:a.highest_version()})})),a.favorited()&&t.add("favorited",m(M.a,{icon:"fas fa-heart",type:"favorited",label:app.translator.trans("flagrow-bazaar.admin.page.extension.favorited")})),a.installed()&&!a.enabled()&&t.add("installed",m(M.a,{icon:"fas fa-plus-square",type:"installed",label:app.translator.trans("flagrow-bazaar.admin.page.extension.installed")})),a.enabled()&&t.add("enabled",m(M.a,{icon:"fas fa-check-square",type:"enabled",label:app.translator.trans("flagrow-bazaar.admin.page.extension.enabled")})),t},t}(y.a),U=n(8),L=n.n(U),R=function(a){function t(){return a.apply(this,arguments)||this}return i(t,a),t.prototype.view=function(){var a=this,t="error"===this.props.loading();return m("div",{className:"Bazaar--Loader "+(t?"Error":null),hidden:!1===this.props.loading()},[m(".Loader-modal",[m(".Loader-icon",B()(t?"fas fa-exclamation-triangle":"fas fa-shopping-bag")),m("div",[m("p",app.translator.trans(t?"flagrow-bazaar.admin.loader.error":"flagrow-bazaar.admin.loader.is_loading")),t?[N.a.component({className:"Button Button--block",icon:"fas fa-sync",onclick:function(){return location.reload()},children:app.translator.trans("flagrow-bazaar.admin.loader.refresh")}),N.a.component({className:"Button Button--block",icon:"fas fa-times",onclick:function(){return a.props.loading(!1)},children:app.translator.trans("flagrow-bazaar.admin.loader.close")}),L.a.component({className:"Button Button--block",icon:"fas fa-bug",href:"https://github.com/flagrow/bazaar/issues",target:"_blank",config:{},children:app.translator.trans("flagrow-bazaar.admin.loader.report_issue")})]:null])])])},t}(y.a),F=n(19),S=n.n(F),O=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.init=function(){this.loading=this.props.loading,this.moreResults=!1,this.resultMeta={},this.extensions=[],this.refresh()},n.view=function(){var a,t=this;if(this.loading()?a=R.component({loading:this.loading}):this.moreResults&&(a=[N.a.component({children:app.translator.trans("flagrow-bazaar.admin.page.button.more",{current:this.resultMeta.pages_current+1,total:this.resultMeta.pages_total}),className:"Button Button--primary",onclick:this.loadMore.bind(this)})]),0===this.extensions.length&&!this.loading){var n=app.translator.trans("flagrow-bazaar.admin.page.state.no_results_available");return this.props.authorized||(n=app.translator.trans("flagrow-bazaar.admin.page.state.not_authorized")),m("div",{className:"DiscussionList"},S.a.component({text:n}))}return m("div",{className:"ExtensionList-wrapper"},m("div",{className:"ExtensionList"},this.extensions.map(function(a){return T.component({extension:a,repository:t.props.repository,connected:t.props.connected,key:a.package()})})),m("div",{className:"ExtensionList-loadMore"},a))},n.update=function(a){this.props.params=a,this.refresh()},n.refresh=function(a){var t=this;return void 0===a&&(a=!0),a&&(this.loading(!0),this.extensions=[]),this.loadResults().then(function(a){t.extensions=[],t.parseResults(a)},function(){t.loading(!1),m.redraw()})},n.loadResults=function(a){var t=this.requestParams();return t.page={offset:a},t.include=t.include.join(","),app.store.find("bazaar-extensions",t)},n.parseResults=function(a){return[].push.apply(this.extensions,a),this.loading(!1),this.moreResults=!!a.payload.links.next,this.resultMeta=a.payload.meta||{},m.lazyRedraw(),a},n.loadMore=function(){this.loading(!0),this.loadResults(this.extensions.length).then(this.parseResults.bind(this))},n.requestParams=function(){var a=this.props.params,t={include:[],filter:{}};return t.sort=this.sortMap()[a.sort],a.q&&(t.filter.q=a.q),a.filter&&(t.filter=window.$.param(a.filter)),t},n.sortMap=function(){var a={};return this.props.params.q&&(a.relevance=""),a},t}(y.a);function j(){return(j=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(a[e]=n[e])}return a}).apply(this,arguments)}var H=n(15),D=n.n(H),A=n(20),G=n.n(A),J=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.view=function(){var a=j({},this.props);delete a.state,delete a.children,a.className=a.className||"",a.type=a.type||"button",this.props.state&&(a.className+=" active"),!a.title&&this.props.children&&(a.title=G()(this.props.children)),D()(a,"icon")&&(a.className+=" hasIcon");var t=D()(a,"loading");return(a.disabled||t)&&(a.className+=" disabled"+(t?" loading":""),delete a.onclick),m("button",j({},a,{onclick:this.onchange.bind(this)}),this.getButtonContent())},n.onchange=function(){this.props.onchange&&this.props.onchange(!this.props.state,this)},t}(N.a),K=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.init=function(){var a,t,n,e,r=this;this.updateDebounce=(a=function(){r.props.onsubmit&&r.props.onsubmit(r.props.params)},t=500,function(){var r=this,o=arguments,i=n&&!e;clearTimeout(e),e=setTimeout(function(){e=null,n||a.apply(r,o)},t),i&&a.apply(r,o)})},n.view=function(){var a=this;return m("div",[m("fieldset",{className:"ExtensionSearch"},m("input[type=text].FormControl",{value:this.props.params.q||"",oninput:m.withAttr("value",function(t){return a.search(t)}),placeholder:app.translator.trans("flagrow-bazaar.admin.search.placeholder")})),m("div",{className:"ExtensionFilters ButtonGroup"},[J.component({icon:"fas fa-level-up",className:"Button hasIcon",state:this.isToggled("update"),onchange:function(t){return a.toggleFilter("update",t)},children:app.translator.trans("flagrow-bazaar.admin.search.filter_update")}),J.component({icon:"fas fa-circle-notch",className:"Button hasIcon",state:this.isToggled("pending"),onchange:function(t){return a.toggleFilter("pending",t)},children:app.translator.trans("flagrow-bazaar.admin.search.filter_pending")}),J.component({icon:"fas fa-plus-square",className:"Button hasIcon",state:this.isToggled("installed"),onchange:function(t){return a.toggleFilter("installed",t)},children:app.translator.trans("flagrow-bazaar.admin.search.filter_installed")}),this.connected?[J.component({icon:"fas fa-heart",className:"Button hasIcon",state:this.isToggled("favorited"),onchange:function(t){return a.toggleFilter("favorited",t)},children:app.translator.trans("flagrow-bazaar.admin.search.filter_favorited")}),J.component({icon:"fas fa-shopping-cart",className:"Button hasIcon",state:this.isToggled("subscribed"),onchange:function(t){return a.toggleFilter("subscribed",t)},children:app.translator.trans("flagrow-bazaar.admin.search.filter_subscribed")})]:"",J.component({icon:"fas fa-certificate",className:"Button hasIcon",state:this.isToggled("premium"),onchange:function(t){return a.toggleFilter("premium",t)},children:app.translator.trans("flagrow-bazaar.admin.search.filter_premium")})])])},n.isToggled=function(a){return((this.props.params.filter||{}).is||[]).indexOf(a)>=0},n.toggleFilter=function(a,t){var n=this.props.params.filter||{},e=n.is||[],r=e.indexOf(a);t&&-1===r?e.push(a):!t&&r>=0&&e.splice(r,1),n.is=e,this.props.params.filter=n,this.updateDebounce()},n.search=function(a){this.props.params.q=a,this.updateDebounce()},t}(y.a),Q=n(6),V=n.n(Q),W=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.className=function(){return"FilePermissionsModal"},n.title=function(){return app.translator.trans("flagrow-bazaar.admin.modal.requirements.file-permissions.title")},n.content=function(){var a=this.props.file_permissions,t=[];return a.forEach(function(a){t.push(m("li",m("span",{className:"code"},a)))}),m("div",{className:"Modal-body"},[m("p",app.translator.trans("flagrow-bazaar.admin.modal.requirements.file-permissions.description",{a:m("a",{href:"https://github.com/flagrow/bazaar/wiki/File-permissions",target:"_blank"})})),m("ul",t)])},t}(V.a),X=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.className=function(){return"MemoryLimitModal"},n.title=function(){return app.translator.trans("flagrow-bazaar.admin.modal.requirements.php-memory_limit.title")},n.content=function(){var a=this.props.memory_requested,t=this.props.memory_limit;return m("div",{className:"Modal-body"},app.translator.trans("flagrow-bazaar.admin.modal.requirements.php-memory_limit.description",{required:a,limit:t,a:m("a",{href:"https://github.com/flagrow/bazaar/wiki/PHP-memory-limit",target:"_blank"})}))},t}(V.a),Y=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.className=function(){return"FilePermissionsModal"},n.title=function(){return app.translator.trans("flagrow-bazaar.admin.modal.connect-bazaar.title")},n.content=function(){var a=this.props.flagrowHost;return m("div",{className:"Modal-body"},[m("p",app.translator.trans("flagrow-bazaar.admin.modal.connect-bazaar.description",{host:a})),m("div",{className:"App-primaryControl"},[N.a.component({type:"submit",className:"Button Button--primary Button--block",disabled:!1,icon:"check",children:app.translator.trans("flagrow-bazaar.admin.page.button.connect")})])])},n.connect=function(){var a=window.open();app.request({method:"GET",url:app.forum.attribute("apiUrl")+"/bazaar/connect"}).then(function(t){t&&t.redirect?a.location=t.redirect:a.close()})},n.onsubmit=function(){this.connect()},t}(V.a),Z=n(11),aa=n.n(Z),ta=n(12),na=n.n(ta),ea=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.title=function(){return o.a.translator.trans("flagrow-bazaar.admin.modal.settings.title")},n.form=function(){return[m("div",{className:"Form-group"},[m("label",{for:"use-cron"},o.a.translator.trans("flagrow-bazaar.admin.modal.settings.field.use_cron_for_tasks.label")),na.a.component({state:this.setting("flagrow.bazaar.use_cron_for_tasks")(),onchange:this.setting("flagrow.bazaar.use_cron_for_tasks"),children:o.a.translator.trans("flagrow-bazaar.admin.modal.settings.field.use_cron_for_tasks.toggle")}),m("span",o.a.translator.trans("flagrow-bazaar.admin.modal.settings.field.use_cron_for_tasks.description",{a:m("a",{href:"https://github.com/flagrow/bazaar/wiki/Cron-task-processing",target:"_blank"})}))]),m("div",{className:"Form-group"},[m("label",{for:"bazaar-api-token"},o.a.translator.trans("flagrow-bazaar.admin.modal.settings.field.token.label")),m("input",{id:"bazaar-api-token",className:"FormControl",bidi:this.setting("flagrow.bazaar.api_token")}),m("span",o.a.translator.trans("flagrow-bazaar.admin.modal.settings.field.token.description"))])]},t}(aa.a),ra=n(21),oa=n.n(ra),ia=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.title=function(){return app.translator.trans("flagrow-bazaar.admin.modal.dashboard.title")},n.form=function(){var a=this.props.flagrowHost,t=this.setting("flagrow.bazaar.sync",!1);return m("div",{className:"Modal-body"},[m("p",app.translator.trans("flagrow-bazaar.admin.modal.dashboard.sync.description",{host:a})),na.a.component({state:!0===t()||1==t(),onchange:this.updateSetting.bind(this,t,"flagrow.bazaar.sync"),children:app.translator.trans("flagrow-bazaar.admin.modal.dashboard.sync.switch",{host:a})})])},n.submitButton=function(){var a=this.props.flagrowHost;return m("div",{className:"ButtonGroup"},[N.a.component({className:"Button Connected",icon:"dashboard",children:app.translator.trans("flagrow-bazaar.admin.modal.dashboard.visit-remote-dashboard"),onclick:function(){return window.open(a+"/home")}})])},n.updateSetting=function(a,t,n){var e;oa()(((e={})[t]=n,e)),a(n)},t}(aa.a),sa=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.view=function(){return m("div",{className:"ExtensionsPage-header"},m("div",{className:"container"},this.header()))},n.header=function(){var a=[].concat(this.pagesButtons(),this.settingsButton(),this.requirementsButtons(),this.connectedButtons());return m("div",{className:"ButtonGroup"},a)},n.settingsButton=function(){return[N.a.component({className:"Button Button--icon",icon:"fas fa-cog",onclick:function(){return o.a.modal.show(new ea)}})]},n.requirementsButtons=function(){var a=o.a.data.settings["flagrow.bazaar.php.memory_limit-met"]||!1,t=o.a.data.settings["flagrow.bazaar.php.memory_limit"],n=o.a.data.settings["flagrow.bazaar.php.memory_requested"],e=o.a.data.settings["flagrow.bazaar.file-permissions"]||[],r=[];return a||r.push(N.a.component({className:"Button Button--icon Requirement-MemoryLimit",icon:"fas fa-signal",onclick:function(){return o.a.modal.show(new X({memory_requested:n,memory_limit:t}))}})),e.length>0&&r.push(N.a.component({className:"Button Button--icon Requirement-FilePermissions",icon:"fas fa-hdd",onclick:function(){return o.a.modal.show(new W({file_permissions:e}))}})),r},n.connectedButtons=function(){var a=this.props.connected,t=o.a.data.settings["flagrow.bazaar.flagrow-host"]||"https://flagrow.io";return a?[N.a.component({className:"Button Button--icon Connected",icon:"fas fa-plug",onclick:function(){return o.a.modal.show(new ia({flagrowHost:t}))}})]:[N.a.component({className:"Button Button--icon Connect",icon:"fas fa-plug",onclick:function(){return o.a.modal.show(new Y({flagrowHost:t}))}})]},n.pagesButtons=function(){if(void 0===o.a.current)return null;var a=o.a.current.props.routeName,t=[];return t.push(L.a.component({className:"Button Button--icon",icon:"fas fa-shopping-bag",href:o.a.route("flagrow-bazaar"),title:o.a.translator.trans("flagrow-bazaar.admin.header.extensions"),active:"flagrow-bazaar"===a})),t.push(L.a.component({className:"Button Button--icon",icon:"fas fa-history",href:o.a.route("flagrow-bazaar-tasks"),title:o.a.translator.trans("flagrow-bazaar.admin.header.tasks"),active:"flagrow-bazaar-tasks"===a})),t},t}(y.a),la=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.init=function(){app.current=this,this.authorized=(app.data.settings["flagrow.bazaar.api_token"]||"").length>0,this.connected=app.data.settings["flagrow.bazaar.connected"]&&"0"!==app.data.settings["flagrow.bazaar.connected"],this.loading=m.prop(!0),this.params=this.params(),this.repository=new z(this.loading),this.extensionList=new O({params:this.params,loading:this.loading,repository:this.repository,connected:this.connected,authorized:this.authorized}),this.search=K.component({params:this.params,onsubmit:this.updateResults.bind(this)})},n.updateResults=function(a){this.params=a,this.extensionList.update(a)},n.view=function(){return m("div",{className:"Bazaar Extensions"},[sa.component({connected:this.connected}),m("div",{className:"ExtensionsPage-list"},[m("div",{className:"container"},[this.search,this.extensionList.render()])])])},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.params=function(){var a=this.stickyParams();return a.filter=m.route.param("filter"),a},t}(y.a),ca=function(){function a(a){this.tasks=m.prop([]),this.nextPageUrl=null,this.loading=a,this.resetNavigation()}var t=a.prototype;return t.loadNextPage=function(){var a=this;!this.loading()&&this.nextPageUrl&&(this.loading(!0),o.a.request({method:"GET",url:this.nextPageUrl}).then(function(t){var n=t.data.map(function(a){return o.a.store.createRecord("bazaar-tasks",a)});a.tasks(n),a.nextPageUrl=null,a.loading(!1),m.redraw()}))},t.resetNavigation=function(){this.loading(!1),this.nextPageUrl=o.a.forum.attribute("apiUrl")+"/bazaar/tasks",this.tasks([])},a}(),ua=n(22),pa=n.n(ua),da=n(13),ma=n.n(da),fa=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.init=function(){this.extended=m.prop(!1)},n.view=function(){var a=this,t=this.props.task,n=function(){switch(t.status()){case"success":return"fas fa-check";case"exception":return"fas fa-exclamation";case"working":return"fas fa-spinner"}return"fas fa-clock"}();return m("tbody",{className:"TaskListItem status-"+t.status()},m("tr",null,m("td",{className:"time-column"},pa()(t.created_at())),m("td",{className:"status-column",title:o.a.translator.trans("flagrow-bazaar.admin.page.task.status."+(null!==t.status()?t.status():"unknown"))},m("div",{className:"status"},B()(n))),m("td",{className:"command-column"},o.a.translator.trans("flagrow-bazaar.admin.page.task.command."+t.command(),{extension:m("strong",null,t.package())})),m("td",{className:"details-column"},N.a.component({icon:"fas fa-plus",className:"Button",onclick:function(){a.extended(!a.extended())}}))),this.extended()?m("tr",null,m("td",{className:"output-column",colspan:"4"},m("dl",null,m("dt",null,o.a.translator.trans("flagrow-bazaar.admin.page.task.attribute.created_at")),m("dd",null,ma()(t.created_at()))),m("dl",null,m("dt",null,o.a.translator.trans("flagrow-bazaar.admin.page.task.attribute.started_at")),m("dd",null,ma()(t.started_at()))),m("dl",null,m("dt",null,o.a.translator.trans("flagrow-bazaar.admin.page.task.attribute.finished_at")),m("dd",null,ma()(t.finished_at()))),m("p",null,o.a.translator.trans("flagrow-bazaar.admin.page.task.header.output")),m("pre",{className:"output"},t.output()))):null)},t}(y.a),ha=function(a){function t(){return a.apply(this,arguments)||this}i(t,a);var n=t.prototype;return n.init=function(){o.a.current=this,this.loading=m.prop(!1),this.repository=new ca(this.loading),this.repository.loadNextPage(),this.loader=R.component({loading:this.loading}),this.connected=o.a.data.settings["flagrow.bazaar.connected"]&&"0"!==o.a.data.settings["flagrow.bazaar.connected"]},n.view=function(){return m("div",{className:"ExtensionsPage Bazaar TaskPage"},sa.component({connected:this.connected}),m("div",{className:"ExtensionsPage-list"},m("div",{className:"container"},this.taskGroups().map(function(a){return a.tasks.length?m("div",null,m("h2",null,a.title),m("table",{className:"TaskPage-table"},m("thead",null,m("tr",null,m("th",{className:"time-column"},o.a.translator.trans("flagrow-bazaar.admin.page.task.header.time")),m("th",{className:"status-column"},o.a.translator.trans("flagrow-bazaar.admin.page.task.header.status")),m("th",null,o.a.translator.trans("flagrow-bazaar.admin.page.task.header.command")),m("th",{className:"details-column"},o.a.translator.trans("flagrow-bazaar.admin.page.task.header.details")))),a.tasks.map(function(a){return m(fa,{task:a})}))):null}))),this.loader)},n.taskGroups=function(){var a=[{title:o.a.translator.trans("flagrow-bazaar.admin.page.task.group.today"),tasks:[]},{title:o.a.translator.trans("flagrow-bazaar.admin.page.task.group.lastmonth"),tasks:[]},{title:o.a.translator.trans("flagrow-bazaar.admin.page.task.group.older"),tasks:[]}],t=0,n=(new Date).setHours(0,0,0,0);return this.repository.tasks().forEach(function(e){var r=new Date(e.created_at()).setHours(0,0,0,0);switch(t){case 0:r===n?a[t].tasks.push(e):t++;break;case 1:(n-r)/864e5<=30?a[t].tasks.push(e):t++;break;default:a[t].tasks.push(e)}}),a},t}(y.a);o.a.initializers.add("flagrow-bazaar",function(a){a.store.models["bazaar-extensions"]=f,a.store.models["bazaar-tasks"]=h,o.a.routes["flagrow-bazaar"]={path:"/flagrow/bazaar",component:la.component()},o.a.extensionSettings["flagrow-bazaar"]=function(){return m.route(o.a.route("flagrow-bazaar"))},Object(e.extend)(g.a.prototype,"items",function(a){a.add("flagrow-bazaar",w.a.component({href:o.a.route("flagrow-bazaar"),icon:"fas fa-shopping-bag",children:o.a.translator.trans("flagrow-bazaar.admin.nav.title"),description:o.a.translator.trans("flagrow-bazaar.admin.nav.description")}))}),o.a.routes["flagrow-bazaar-tasks"]={path:"/flagrow/bazaar/tasks",component:ha.component()}})}]);
//# sourceMappingURL=admin.js.map