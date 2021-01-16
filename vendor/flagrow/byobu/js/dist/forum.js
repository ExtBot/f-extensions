module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=43)}([function(t,e,n){"use strict";function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["models/Group"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["states/SearchState"]},function(t,e){t.exports=flarum.core.compat["components/Search"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"modals",(function(){return Xt})),n.d(e,"discussions",(function(){return Yt}));var o=n(0),s=n(13),i=n.n(s),r=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e)};var n=e.prototype;return n.icon=function(){return app.forum.data.attributes["byobu.icon-postAction"]},n.descriptionKey=function(){return"fof-byobu.forum.post.recipients_modified.removed_self"},e}(i.a),a=n(14),u=n.n(a),c=n(15),p=n.n(c),f=n(3),d=n.n(f),l=n(6),h=n.n(l),b=n(9),y=n.n(b);function v(t,e){var n;return void 0===e&&(e={}),e.style=e.style||{},e.className="RecipientLabel "+(e.className||""),e.href=u()(e,"link"),t instanceof d.a?(n=p()(t),e.href&&(e.title=t.username()||"",e.href=app.route.user(t))):t instanceof h.a?n=t.namePlural():(e.className+=" none",n=app.translator.trans("fof-byobu.forum.labels.user_deleted")),y.a.component(e,n)}function g(t,e){void 0===e&&(e={});var n=[],o=u()(e,"link");return e.className="RecipientsLabel "+(e.className||""),t?t.forEach((function(t){n.push(v(t,{link:o}))})):n.push(v()),m("span",e,n)}var x=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){function n(t,e,n){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById(n,t)}))}t.initAttrs.call(this,e);var o=e.post.content();if(o.new||2!=o.length){var s=n(o.new.users,o.old.users,"users"),i=n(o.old.users,o.new.users,"users"),r=n(o.new.groups,o.old.groups,"groups"),a=n(o.old.groups,o.new.groups,"groups");e.added=s.concat(r),e.removed=i.concat(a)}else{var u=e.post.content()[0],c=e.post.content()[1];e.added=n(c,u,"users"),e.removed=n(u,c,"users")}};var n=e.prototype;return n.icon=function(){return app.forum.data.attributes["byobu.icon-postAction"]},n.descriptionKey=function(){var t="fof-byobu.forum.post.recipients_modified.";return this.attrs.added.length?this.attrs.removed.length?t+"added_and_removed":t+"added":t+"removed"},n.descriptionData=function(){var t={};return this.attrs.added.length&&(t.added=g(this.attrs.added,{link:!0})),this.attrs.removed.length&&(t.removed=g(this.attrs.removed,{link:!0})),t},e}(i.a),R=n(1),_=n(19),P=n.n(_),w=n(20),D=n.n(w),j=function(t){!function(t){Object(R.extend)(P.a.prototype,"privacyItems",(function(e){var n=this;e.add("byobu-block-dm",D.a.component({state:this.user.blocksPd(),onchange:function(t){n.blocksPdLoading=!0,n.user.save({blocksPd:t}).then((function(){n.blocksPdLoading=!1,m.redraw()}))},loading:this.blocksPdLoading},t.translator.trans("fof-byobu.forum.user.settings.block_pd")))}))}(t),function(t){Object(R.extend)(P.a.prototype,"privacyItems",(function(e){var n=this;e.add("byobu-unified-index",D.a.component({state:this.user.unifiedIndex(),onchange:function(t){n.unifiedIndexLoading=!0,n.user.save({unifiedIndex:t}).then((function(){n.unifiedIndexLoading=!1,m.redraw()}))},loading:this.unifiedIndexLoading},t.translator.trans("fof-byobu.forum.user.settings.unified_index")))}))}(t)};var O=n(4),N=n.n(O),k=n(12),I=n.n(k),S=n(7),U=n.n(S),A=n(5),C=n.n(A),L=n(23),M=n.n(L),G=n(16),B=n.n(G),E=n(24),q=n.n(E),T=n(10),V=n.n(T),K=n(25),F=n.n(K),W=n(2),z=n.n(W),H=n(26),J=n.n(H),Q=n(27),X=n.n(Q),Y=n(28),Z=n.n(Y),tt=n(29),et=n.n(tt);function nt(){return(nt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var ot=n(17),st=n.n(ot),it=n(30),rt=n.n(it),at=function(){function t(){}var e=t.prototype;return e.view=function(t){var e=this;if(!(t.length<3||this.loading)){if(app.cache.byobuResults||(app.cache.byobuResults=[]),this.query=t,app.cache.byobuResults[this.query])return[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),app.cache.byobuResults[this.query].map((function(t){var n=p()(t),o=[st()(n.text,e.query)];return m("li",{className:"SearchResult","data-index":"users:"+t.id()},m("a",{"data-index":"users:"+t.id()},rt()(t),nt({},n,{text:void 0,children:o})))}))];this.loading=!0,app.cache.byobuResults[this.query]=[],app.store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},e.pushResults=function(t){var e=this;t.payload.data.map((function(t){var n=app.store.getById("users",t.id);app.cache.byobuResults[e.query].push(n)})),this.loading=!1,m.redraw()},t}(),ut=function(){function t(){}var e=t.prototype;return e.search=function(t){return app.store.find("groups",{filter:{q:t},page:{limit:5}})},e.view=function(t){t=t.toLowerCase();var e=app.store.all("groups").filter((function(e){return e.namePlural().toLowerCase().substr(0,t.length)===t}));return e.length?[m("li",{className:"Dropdown-header"},app.translator.trans("fof-byobu.forum.search.headings.groups")),e.map((function(e){var n=e.namePlural(),o=st()(n,t);return m("li",{className:"SearchResult","data-index":"groups:"+e.id()},m("a",{"data-index":"groups:"+e.id()},m("span",{class:"groupName"},o)))}))]:""},t}(),ct=n(21),pt=n.n(ct),ft=n(31),dt=n.n(ft),lt=n(32),mt=n.n(lt),ht=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oncreate=function(e){var n=this;t.prototype.oncreate.call(this,e);var o=this;this.$(".Search-results").on("click",(function(t){var e=n.$(".SearchResult.active");o.addRecipient(e.data("index")),o.$(".RecipientsInput").focus()})),this.$(".Search-results").on("touchstart",(function(t){var e=n.$(t.target.parentNode);o.addRecipient(e.data("index")),o.$(".RecipientsInput").focus()})),$(".RecipientsInput").on("keyup",(function(){clearTimeout(n.typingTimer),n.doSearch=!1,n.typingTimer=setTimeout((function(){n.doSearch=!0,m.redraw()}),900)})).on("keydown",(function(){clearTimeout(n.typingTimer)})),t.prototype.oncreate.call(this,e)},n.view=function(){var t=this;void 0===this.state.getValue()&&this.state.setValue("");var e=this.state.getValue()&&this.state.getValue().length>=3;return this.sources||(this.sources=this.sourceItems().toArray()),m("div",{className:"AddRecipientModal-form-input"},[m("div",{className:"RecipientsInput-selected RecipientsLabel"},this.attrs.selected().toArray().map((function(e){return v(e,{onclick:function(n){return t.removeRecipient(e,n)}})}))),m("input",{className:"RecipientsInput FormControl "+pt()({open:!!this.state.getValue(),focused:!!this.state.getValue(),active:!!this.state.getValue(),loading:!!this.loadingSources}),oncreate:function(t){t.dom.focus()},type:"search",placeholder:dt()(app.translator.trans("fof-byobu.forum.input.search_recipients")),value:this.state.getValue(),oninput:function(e){return t.state.setValue(e.target.value)},onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),m("ul",{className:"Dropdown-menu Search-results fade "+pt()({in:!!e})},this.doSearch?this.sources.map((function(e){return e.view(t.state.getValue())})):mt.a.component({size:"tiny",className:"Button Button--icon Button--link"}))])},n.sourceItems=function(){var t=new z.a;return(!this.attrs.discussion&&app.forum.attribute("canStartPrivateDiscussionWithUsers")||this.attrs.discussion&&this.attrs.discussion.canEditUserRecipients())&&t.add("users",new at),(!this.attrs.discussion&&app.forum.attribute("canStartPrivateDiscussionWithGroups")||this.attrs.discussion&&this.attrs.discussion.canEditGroupRecipients())&&t.add("groups",new ut),t},n.addRecipient=function(t){var e=t.split(":"),n=e[0],o=e[1],s=this.findRecipient(n,o);this.attrs.selected().add(t,s),this.state.clear()},n.removeRecipient=function(t,e){var n;e.preventDefault(),t instanceof d.a&&(n="users"),t instanceof h.a&&(n="groups"),this.attrs.selected().remove(n+":"+t.id())},n.findRecipient=function(t,e){return app.store.getById(t,e)},e}(et.a),bt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.selected=X()(new z.a),this.attrs.discussion?this.assignInitialRecipients(this.attrs.discussion):this.attrs.selectedRecipients&&this.attrs.selectedRecipients.toArray().length>0?this.selected().merge(this.attrs.selectedRecipients):this.selected().add("users:"+app.session.user.id(),app.session.user),this.recipientSearch=new Z.a},n.isDismissible=function(){return!1},n.assignInitialRecipients=function(t){var e=this;t.recipientUsers().map((function(t){e.selected().add("users:"+t.id(),t)})),t.recipientGroups().map((function(t){e.selected().add("groups:"+t.id(),t)}))},n.className=function(){return"AddRecipientModal"},n.title=function(){return this.attrs.discussion?app.translator.trans("fof-byobu.forum.modal.titles.update_recipients",{title:m("em",null,this.attrs.discussion.title())}):app.translator.trans("fof-byobu.forum.modal.titles.add_recipients")},n.helpText=function(){return this.attrs.discussion?app.translator.trans("fof-byobu.forum.modal.help.update_recipients"):app.translator.trans("fof-byobu.forum.modal.help.add_recipients")},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{class:"AddRecipientModal-help"},this.helpText()),m("div",{className:"AddRecipientModal-form"},ht.component({state:this.recipientSearch,selected:this.selected,discussion:this.attrs.discussion}),m("div",{className:"AddRecipientModal-form-submit App-primaryControl"},C.a.component({type:"submit",className:"Button Button--primary",icon:"fas fa-check"},app.translator.trans("fof-byobu.forum.buttons.submit")),C.a.component({onclick:this.hide.bind(this),className:"Button Button--cancel"},app.translator.trans("fof-byobu.forum.buttons.cancel")))))]},n.select=function(t){(t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index))&&this.selected().length&&this.$("form").submit()},n.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,n=this.selected(),o=[],s=[];n.toArray().forEach((function(t){t instanceof d.a&&s.push(t),t instanceof h.a&&o.push(t)})),e&&e.save({relationships:{recipientUsers:s,recipientGroups:o}}).then((function(){app.current instanceof B.a&&app.current.stream.update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(n),app.modal.close(),this.attrs.discussion||app.composer.show(),t.redraw=!1},e}(J.a),yt=function(t){U.a.prototype.recipientUsers=N.a.hasMany("recipientUsers"),U.a.prototype.oldRecipientUsers=N.a.hasMany("oldRecipientUsers"),U.a.prototype.recipientGroups=N.a.hasMany("recipientGroups"),U.a.prototype.oldRecipientGroups=N.a.hasMany("oldRecipientGroups"),U.a.prototype.canEditRecipients=N.a.attribute("canEditRecipients"),U.a.prototype.canEditUserRecipients=N.a.attribute("canEditUserRecipients"),U.a.prototype.canEditGroupRecipients=N.a.attribute("canEditGroupRecipients"),U.a.prototype.canEditGroupRecipients=N.a.attribute("canEditGroupRecipients"),function(t){Object(R.extend)(U.a.prototype,"badges",(function(e){(this.recipientUsers().length||this.recipientGroups().length)&&e.add("private",I.a.component({type:"private",label:t.translator.trans("fof-byobu.forum.badges.is_private.tooltip"),icon:t.forum.data.attributes["byobu.icon-badge"]}),10)}))}(t),Object(R.extend)(M.a.prototype,"infoItems",(function(t){var e=this.attrs.discussion;vt(e,t,!0)})),Object(R.extend)(q.a.prototype,"items",(function(t){var e=this.attrs.discussion;vt(e,t,!1)})),Object(R.extend)(B.a.prototype,"params",(function(t){t.include.push("recipientUsers"),t.include.push("recipientGroups")})),Object(R.extend)(V.a.prototype,"requestParams",(function(t){t.include.push("recipientUsers"),t.include.push("recipientGroups")})),gt()},vt=function(t,e,n){var o=[];t.recipientUsers().length&&(o=o.concat(t.recipientUsers())),t.recipientGroups().length&&(o=o.concat(t.recipientGroups())),o&&o.length&&(n?e.add("recipients",g(o),10):e.add("recipients",g(o,{link:!0}),4))};function gt(){Object(R.extend)(F.a,"moderationControls",(function(t,e){e.canEditRecipients()&&t.add("recipients",C.a.component({icon:app.forum.data.attributes["byobu.icon-badge"],onclick:function(){return app.modal.show(bt,{discussion:e})}},app.translator.trans("fof-byobu.forum.buttons.edit_recipients"))),e&&e.recipientUsers().find((function(t){return t.id()===app.session.user.id()}))&&t.add("remove",C.a.component({icon:"fas fa-user-slash",onclick:function(){if(e){var t=new z.a;e.recipientUsers().map((function(e){app.session.user.id()!==e.id()&&t.add("users:"+e.id(),e)}));var n=[],o=[];t.toArray().forEach((function(t){t instanceof d.a&&o.push(t),t instanceof h.a&&n.push(t)})),e.save({relationships:{recipientUsers:o,recipientGroups:n}}).then((function(){return app.history.back()}))}}},app.translator.trans("fof-byobu.forum.buttons.remove_from_discussion")))}))}var xt=n(33),Rt=n.n(xt),_t=n(34);var Pt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e),e.titlePlaceholder=app.translator.trans("fof-byobu.forum.composer_private_discussion.title_placeholder"),e.submitLabel=app.translator.trans("fof-byobu.forum.composer_private_discussion.submit_button")};var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.composer.fields.recipients=this.attrs.recipients||new z.a,this.composer.fields.recipientUsers=this.attrs.recipientUsers||[],this.composer.fields.recipientGroups=this.attrs.recipientGroups||[];var n=m.route.param("username");void 0!==n&&this.addDefaultRecipients(n)},n.data=function(){var e=t.prototype.data.call(this),n=[],o=[];return this.composer.fields.recipients.toArray().forEach((function(t){t instanceof d.a&&n.push(t),t instanceof h.a&&o.push(t)})),e.relationships=e.relationships||{},n.length&&(e.relationships.recipientUsers=n),o.length&&(e.relationships.recipientGroups=o),delete e.relationships.tags,e},n.chooseRecipients=function(){var t=this;app.modal.show(bt,{selectedRecipients:this.composer.fields.recipients,onsubmit:function(e){t.composer.fields.recipients=e,t.$(".RecipientsInput").focus()}})},n.headerItems=function(){var e=t.prototype.headerItems.call(this);if(e.remove("tags"),app.session.user&&app.forum.attribute("canStartPrivateDiscussion")){var n=this.composer.fields.recipients.toArray();e.add("recipients",m("a",{className:"PrivateDiscussionComposer-changeRecipients",onclick:this.chooseRecipients.bind(this)},n.length?function(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="RecipientLabel "+(e.className||"");var n=app.translator.transChoice("fof-byobu.forum.labels.recipients",t,{count:t});return m("span",e,m("span",{className:"RecipientLabel-text"},n))}(n.length):m("span",{className:"RecipientLabel none"},app.translator.trans("fof-byobu.forum.buttons.add_recipients"))),5)}return e},n.addDefaultRecipients=function(t){var e=app.store.getBy("users","username",t);this.composer.fields.recipients.add("users:"+app.session.user.id(),app.session.user),e.id()!==app.session.user.id()&&this.composer.fields.recipients.add("users:"+e.id(),e)},n.onsubmit=function(){if(this.loading=!0,this.composer.fields.recipients.toArray().length<2)this.chooseRecipients(),this.loading=!1;else{var t=this.data();app.store.createRecord("discussions").save(t).then((function(t){app.cache.discussionList&&app.cache.discussionList.refresh(),m.route.set(app.route.discussion(t)),app.composer.hide()}),this.loaded.bind(this))}},e}(n.n(_t).a),wt=n(18),Dt=n.n(wt),jt=function(t){d.a.prototype.blocksPd=N.a.attribute("blocksPd"),d.a.prototype.unifiedIndex=N.a.attribute("unifiedIndex"),d.a.prototype.cannotBeDirectMessaged=N.a.attribute("cannotBeDirectMessaged"),d.a.prototype.unreadPrivateMessagesCount=N.a.attribute("unreadPrivateMessagesCount"),function(t){Object(R.extend)(Rt.a,"userControls",(function(e,n){return t.session.user&&t.session.user.id()!==n.id()&&t.forum.attribute("canStartPrivateDiscussion")&&(!1===n.blocksPd()||t.forum.attribute("canStartPrivateDiscussionWithBlockers")&&n.cannotBeDirectMessaged())&&e.add("private-discussion",C.a.component({icon:t.forum.data.attributes["byobu.icon-badge"],onclick:function(e){return e.preventDefault(),new Promise((function(e){var o=new z.a;return o.add("users:"+t.session.user.id(),t.session.user),o.add("users:"+n.id(),n),Pt.prototype.recipients=o,t.composer.load(Pt,{user:t.session.user,recipients:o,recipientUsers:o,titlePlaceholder:t.translator.trans("fof-byobu.forum.composer_private_discussion.title_placeholder"),submitLabel:t.translator.trans("fof-byobu.forum.composer_private_discussion.submit_button")}),t.composer.show(),e(t.composer)}))}},t.translator.trans("fof-byobu.forum.buttons.send_pd",{username:n.username()}))),e}))}(t),function(t){Object(R.extend)(Dt.a.prototype,"navItems",(function(e){var n=t.route("byobuUserPrivate",{username:this.user.username()});(t.session.user||m.route.get()===n)&&(t.session.user&&t.session.user.username()===this.user.username()||e.add("byobu",y.a.component({href:n,icon:t.forum.data.attributes["byobu.icon-badge"]},t.translator.trans("fof-byobu.forum.user.byobu_link")),85))}))}(t)};var Ot=n(11),Nt=n.n(Ot),kt=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(V.a),It=n(35),St=n.n(It),Ut=n(22),At=n.n(Ut),Ct=n(36),Lt=function(t){function e(){return t.apply(this,arguments)||this}return Object(o.a)(e,t),e}(n.n(Ct).a);function Mt(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var Gt=n(37),Bt=n.n(Gt),Et=function(){function t(t){this.recipient=t}var e,n,o,s=t.prototype;return s.action=function(t){var e=this;return t.preventDefault(),new Promise((function(t,n){if(app.session.user){var o=new z.a;return o.add("users:"+app.session.user.id(),app.session.user),e.recipient&&app.session.user.id()!==e.recipient.id()&&o.add("users:"+e.recipient.id(),e.recipient),app.composer.load(Pt,{user:app.session.user,recipients:o,recipientUsers:o}),app.composer.show(),t()}return app.modal.show(Bt.a),n()}))},s.component=function(){return C.a.component({icon:"fas fa-pen",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"fof-byobu_primaryControl",onclick:this.action.bind(this),disabled:!this.canStartDiscussion},app.translator.trans(this.canStartDiscussion?"fof-byobu.forum.nav.start_button":"core.forum.index.cannot_start_discussion_button"))},e=t,(n=[{key:"canStartDiscussion",get:function(){return app.session.user&&app.forum.attribute("canStartPrivateDiscussion")}}])&&Mt(e.prototype,n),o&&Mt(e,o),t}(),qt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e),this.changeSort("latest")},n.show=function(e){this.list=new kt({q:"byobu:"+e.username()+" is:private",sort:this.sort}),this.list.refresh(),t.prototype.show.call(this,e)},n.handleChangeSort=function(t,e){e.preventDefault(),this.changeSort(t)},n.changeSort=function(t){this.sort=t,this.loadUser(m.route.param("username"))},n.content=function(){return m("div",{className:"DiscussionsUserPage"},m("div",{className:"DiscussionsUserPage-toolbar"},m("ul",{className:"DiscussionsUserPage-toolbar-action"},At()(this.actionItems().toArray())),m("ul",{className:"DiscussionsUserPage-toolbar-view"},At()(this.viewItems().toArray()))),m(Lt,{state:this.list}))},n.actionItems=function(){var t=new Et(this.user),e=new z.a;return app.session.user&&app.forum.attribute("canStartPrivateDiscussion")&&e.add("start_private",t.component()),e},n.viewItems=function(){var t=this,e=new z.a,n=this.list.sortMap(),o={};for(var s in n)o[s]=app.translator.trans("core.forum.index_sort."+s+"_button");return e.add("sort",St.a.component({buttonClassName:"Button",label:o[this.sort]||Object.keys(n).map((function(t){return o[t]}))[0]},Object.keys(o).map((function(e){var s=o[e],i=(t.sort||Object.keys(n)[0])===e;return C.a.component({icon:!i||"fas fa-check",onclick:t.handleChangeSort.bind(t,e),active:i},s)})))),e},e}(Dt.a),Tt=function(t){!function(t){t.routes.byobuUserPrivate={path:"/u/:username/private",component:qt},t.routes.byobuPrivate={path:"/private",component:Nt.a}}(t),function(t){Object(R.extend)(Nt.a.prototype,"navItems",(function(e){t.session.user&&e.add("privateDiscussions",y.a.component({icon:t.forum.data.attributes["byobu.icon-badge"],href:t.route("byobuPrivate")},t.translator.trans("fof-byobu.forum.nav.nav_item")),75)})),Object(R.extend)(Nt.a.prototype,"setTitle",(function(){"byobuPrivate"===t.current.get("routeName")&&t.setTitle(t.translator.trans("fof-byobu.forum.user.dropdown_label"))})),Object(R.extend)(V.a.prototype,"requestParams",(function(e){"byobuPrivate"===t.current.get("routeName")&&(e.filter.q=(e.filter.q||"")+" is:private")})),Object(R.extend)(Nt.a.prototype,"sidebarItems",(function(e){if("byobuPrivate"===t.current.get("routeName")){var n=new Et;e.replace("newDiscussion",n.component())}}))}(t)},Vt=n(38),$t=n.n(Vt),Kt=n(8),Ft=n.n(Kt),Wt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.icon=function(){return app.forum.data.attributes["byobu.icon-badge"]},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-byobu.forum.notifications.pd_text",{user:t})},e}(Ft.a),zt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.attrs.notification,e=t.subject(),n=t.content()||{};return app.route.discussion(e,n.postNumber)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-byobu.forum.notifications.pd_reply_text",{user:t})},e}(Ft.a),Ht=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.icon=function(){return app.forum.data.attributes["byobu.icon-badge"]},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-byobu.forum.notifications.pd_user_left_text",{user:t})},e}(Ft.a),Jt=function(t){function e(){return t.apply(this,arguments)||this}Object(o.a)(e,t);var n=e.prototype;return n.icon=function(){return app.forum.data.attributes["byobu.icon-badge"]},n.href=function(){var t=this.attrs.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.attrs.notification.fromUser();return app.translator.trans("fof-byobu.forum.notifications.pd_added_text",{user:t})},e}(Ft.a);function Qt(){Object(R.extend)($t.a.prototype,"notificationTypes",(function(t){t.add("byobuPrivateDiscussionCreated",{name:"byobuPrivateDiscussionCreated",icon:app.forum.data.attributes["byobu.icon-badge"],label:app.translator.trans("fof-byobu.forum.notifications.pd_label")}),t.add("byobuPrivateDiscussionReplied",{name:"byobuPrivateDiscussionReplied",icon:app.forum.data.attributes["byobu.icon-badge"],label:app.translator.trans("fof-byobu.forum.notifications.pd_reply_label")}),t.add("byobuPrivateDiscussionAdded",{name:"byobuPrivateDiscussionAdded",icon:app.forum.data.attributes["byobu.icon-badge"],label:app.translator.trans("fof-byobu.forum.notifications.pd_added_label")}),t.add("byobuRecipientRemoved",{name:"byobuRecipientRemoved",icon:app.forum.data.attributes["byobu.icon-badge"],label:app.translator.trans("fof-byobu.forum.notifications.pd_user_left_label")})}))}var Xt={AddRecipientModal:bt},Yt={PrivateDiscussionComposer:Pt,PrivateDiscussionList:Lt};app.initializers.add("fof-byobu",(function(t){!function(t){t.postComponents.recipientsModified=x,t.postComponents.recipientLeft=r}(t),function(t){yt(t),j(t),jt(t)}(t),Tt(t),function(t){t.notificationComponents.byobuPrivateDiscussionCreated=Wt,t.notificationComponents.byobuPrivateDiscussionReplied=zt,t.notificationComponents.byobuRecipientRemoved=Ht,t.notificationComponents.byobuPrivateDiscussionAdded=Jt,Qt()}(t)}))}]);
//# sourceMappingURL=forum.js.map