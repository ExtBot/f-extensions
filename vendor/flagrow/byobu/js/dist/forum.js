module.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=46)}([function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/Group"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["helpers/username"]},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionList"]},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat["components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},,,function(t,e,n){"use strict";var s=n(0),o=n(5),i=n.n(o),r=n(4),a=n.n(r),c=n(3),p=n.n(c);function u(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var l=n(23),d=n.n(l),f=n(24),h=n.n(f),b=n(8),v=n.n(b),y=n(2),g=n.n(y),x=n(1),w=n.n(x),R=n(25),D=n.n(R),_=n(11),N=n.n(_),k=n(26),P=n.n(k),I=n(12),S=n.n(I),A=function(){function t(){}var e=t.prototype;return e.view=function(t){var e=this;if(!(t.length<3||this.loading)){if(app.cache.byobuResults||(app.cache.byobuResults=[]),this.query=t,app.cache.byobuResults[this.query])return[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),app.cache.byobuResults[this.query].map((function(t){var n=S()(t);return n.children[0]=N()(n.children[0],e.query),m("li",{className:"SearchResult","data-index":"users:"+t.id()},m("a",{"data-index":"users:"+t.id()},P()(t),n))}))];this.loading=!0,app.cache.byobuResults[this.query]=[],app.store.find("users",{filter:{q:this.query+" allows-pd"},page:{limit:5}}).then(this.pushResults.bind(this))}},e.pushResults=function(t){var e=this;t.payload.data.map((function(t){var n=app.store.getById("users",t.id);app.cache.byobuResults[e.query].push(n)})),this.loading=!1,m.redraw()},t}(),j=function(){function t(){}var e=t.prototype;return e.search=function(t){return app.store.find("groups",{filter:{q:t},page:{limit:5}})},e.view=function(t){t=t.toLowerCase();var e=app.store.all("groups").filter((function(e){return e.namePlural().toLowerCase().substr(0,t.length)===t}));return e.length?[m("li",{className:"Dropdown-header"},app.translator.trans("fof-byobu.forum.search.headings.groups")),e.map((function(e){var n=e.namePlural(),s=N()(n,t);return m("li",{className:"SearchResult","data-index":"groups:"+e.id()},m("a",{"data-index":"groups:"+e.id()},m("span",{class:"groupName"},s)))}))]:""},t}(),O=n(18),B=n.n(O),C=n(27),L=n.n(C),U=n(28),M=n.n(U),G=n(13),T=n.n(G),q=n(6),E=n.n(q);function H(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="RecipientLabel "+(e.className||"");var n,s=T()(e,"link");return t instanceof p.a?(n=S()(t),s&&(e.title=t.username()||"",e.href=app.route.user(t),e.config=m.route)):t instanceof E.a?n=t.namePlural():(e.className+=" none",n=app.translator.trans("fof-byobu.forum.labels.user_deleted")),m(s?"a":"span",e,m("span",{className:"RecipientLabel-text"},n))}var W=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.config=function(e){var n=this;if(!e){var s=this;this.$(".Search-results").on("click",(function(t){var e=n.$(".SearchResult.active");s.addRecipient(e.data("index")),s.$(".RecipientsInput").focus()})),this.$(".Search-results").on("touchstart",(function(t){var e=n.$(t.target.parentNode);s.addRecipient(e.data("index")),s.$(".RecipientsInput").focus()})),$(".RecipientsInput").on("keyup",(function(){clearTimeout(n.typingTimer),n.doSearch=!1,n.typingTimer=setTimeout((function(){n.doSearch=!0,m.redraw()}),900)})).on("keydown",(function(){clearTimeout(n.typingTimer)})),t.prototype.config.call(this,e)}},n.view=function(){var t=this;void 0===this.value()&&this.value("");var e=this.value()&&this.value().length>=3;return this.sources||(this.sources=this.sourceItems().toArray()),m("div",{className:"AddRecipientModal-form-input"},[m("div",{className:"RecipientsInput-selected RecipientsLabel"},this.props.selected().toArray().map((function(e){return H(e,{onclick:function(){t.removeRecipient(e)}})}))),m("input",{className:"RecipientsInput FormControl "+B()({open:!!this.value(),focused:!!this.value(),active:!!this.value(),loading:!!this.loadingSources}),config:function(t){t.focus()},type:"search",placeholder:L()(app.translator.trans("fof-byobu.forum.input.search_recipients")),value:this.value(),oninput:m.withAttr("value",this.value),onfocus:function(){return t.hasFocus=!0},onblur:function(){return t.hasFocus=!1}}),m("ul",{className:"Dropdown-menu Search-results fade "+B()({in:!!e})},this.doSearch?this.sources.map((function(e){return e.view(t.value())})):M.a.component({size:"tiny",className:"Button Button--icon Button--link"}))])},n.sourceItems=function(){var t=new w.a;return(!this.props.discussion&&app.forum.attribute("canStartPrivateDiscussionWithUsers")||this.props.discussion&&this.props.discussion.canEditUserRecipients())&&t.add("users",new A),(!this.props.discussion&&app.forum.attribute("canStartPrivateDiscussionWithGroups")||this.props.discussion&&this.props.discussion.canEditGroupRecipients())&&t.add("groups",new j),t},n.clear=function(){this.value(""),m.redraw()},n.addRecipient=function(t){var e=t.split(":"),n=e[0],s=e[1],o=this.findRecipient(n,s);this.props.selected().add(t,o),this.clear()},n.removeRecipient=function(t){var e;t instanceof p.a&&(e="users"),t instanceof E.a&&(e="groups"),this.props.selected().remove(e+":"+t.id()),m.redraw()},n.findRecipient=function(t,e){return app.store.getById(t,e)},e}(D.a),F=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.selected=m.prop(new w.a),this.props.discussion?this.assignInitialRecipients(this.props.discussion):this.props.selectedRecipients.toArray().length>0?this.selected().merge(this.props.selectedRecipients):this.selected().add("users:"+app.session.user.id(),app.session.user),this.recipientSearch=W.component({selected:this.selected,discussion:this.props.discussion})},n.isDismissible=function(){return!1},n.assignInitialRecipients=function(t){var e=this;t.recipientUsers().map((function(t){e.selected().add("users:"+t.id(),t)})),t.recipientGroups().map((function(t){e.selected().add("groups:"+t.id(),t)}))},n.className=function(){return"AddRecipientModal"},n.title=function(){return this.props.discussion?app.translator.trans("fof-byobu.forum.modal.titles.update_recipients",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("fof-byobu.forum.modal.titles.add_recipients")},n.helpText=function(){return this.props.discussion?app.translator.trans("fof-byobu.forum.modal.help.update_recipients"):app.translator.trans("fof-byobu.forum.modal.help.add_recipients")},n.content=function(){var t=this.selected().toArray().length<2;return[m("div",{className:"Modal-body"},m("div",{class:"AddRecipientModal-help"},this.helpText()),m("div",{className:"AddRecipientModal-form"},this.recipientSearch,m("div",{className:"AddRecipientModal-form-submit App-primaryControl"},g.a.component({type:"submit",className:"Button Button--primary",disabled:t,icon:"fas fa-check",children:app.translator.trans("fof-byobu.forum.buttons.submit")}),g.a.component({onclick:this.hide.bind(this),className:"Button Button--cancel",children:app.translator.trans("fof-byobu.forum.buttons.cancel")}))))]},n.select=function(t){(t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index))&&this.selected().length&&this.$("form").submit()},n.onsubmit=function(t){t.preventDefault();var e=this.props.discussion,n=this.selected(),s=[],o=[];n.toArray().forEach((function(t){t instanceof p.a&&o.push(t),t instanceof E.a&&s.push(t)})),e&&e.save({relationships:{recipientUsers:o,recipientGroups:s}}).then((function(){app.current instanceof v.a&&app.current.stream.update(),m.redraw()})),this.props.onsubmit&&this.props.onsubmit(n),app.modal.close(),app.composer.show(),m.redraw.strategy("none")},e}(h.a),K=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.chooseRecipients();var e=m.route.param("username");void 0!==e&&this.addDefaultRecipients(e)},n.onsubmit=function(){if(this.loading=!0,this.recipients.toArray().length<2)app.modal.show(new F({selectedRecipients:this.recipients})),this.loading=!1;else{var t=this.data();app.store.createRecord("discussions").save(t).then((function(t){app.composer.hide(),app.cache.discussionList.addDiscussion(t),m.route(app.route.discussion(t))}),this.loaded.bind(this))}},e}(d.a);function z(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="RecipientLabel "+(e.className||"");var n=app.translator.transChoice("fof-byobu.forum.labels.recipients",t,{count:t});return m("span",e,m("span",{className:"RecipientLabel-text"},n))}var J=n(29),Q=n.n(J),V=n(30),X=n.n(V),Y=n(14),Z=n.n(Y);function tt(t,e){void 0===e&&(e={});var n=[],s=T()(e,"link");return e.className="RecipientsLabel "+(e.className||""),t?t.forEach((function(t){n.push(H(t,{link:s}))})):n.push(H()),m("span",e,n)}var et=n(31),nt=n.n(et),st=function(){Object(s.extend)(nt.a,"moderationControls",(function(t,e){e.canEditRecipients()&&t.add("recipients",g.a.component({children:app.translator.trans("fof-byobu.forum.buttons.edit_recipients"),icon:"far fa-map",onclick:function(){return app.modal.show(new F({discussion:e}))}}))}))},ot=n(32),it=n.n(ot);function rt(){Object(s.extend)(a.a.prototype,"badges",(function(t){(this.recipientUsers().length||this.recipientGroups().length)&&t.add("private",it.a.component({type:"private",label:app.translator.trans("fof-byobu.forum.badges.is_private.tooltip"),icon:"fas fa-map"}),10)}))}var at=n(33),ct=n.n(at),pt=function(){Object(s.extend)(ct.a,"userControls",(function(t,e){return app.session.user&&app.session.user.id()!==e.id()&&app.forum.attribute("canStartPrivateDiscussion")&&(!1===e.blocksPd()||app.forum.attribute("canStartPrivateDiscussionWithBlockers")&&e.cannotBeDirectMessaged())&&t.add("private-discussion",g.a.component({children:app.translator.trans("fof-byobu.forum.buttons.send_pd",{username:e.username()}),icon:"far fa-map",onclick:function(){var t=m.deferred(),n=new w.a;n.add("users:"+app.session.user.id(),app.session.user),n.add("users:"+e.id(),e),K.prototype.recipients=n;var s=new K({user:app.session.user,recipients:n,recipientUsers:n});return app.composer.load(s),app.composer.show(),t.resolve(s),t.promise}})),t}))},ut=n(34),lt=n.n(ut),dt=n(35),ft=n.n(dt),mt=function(){Object(s.extend)(lt.a.prototype,"privacyItems",(function(t){var e=this;t.add("byobu-block-dm",ft.a.component({children:app.translator.trans("fof-byobu.forum.user.settings.block_pd"),state:this.user.preferences().blocksPd,onchange:function(t,n){return e.preferenceSaver("blocksPd")(t,n)}}))}))},ht=n(15),bt=n.n(ht),vt=n(9),yt=n.n(vt),gt=function(t){function e(){return t.apply(this,arguments)||this}return u(e,t),e}(Z.a),xt=n(36),wt=n.n(xt),Rt=n(7),Dt=n.n(Rt),_t=n(16),Nt=n.n(_t),kt=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),this.changeSort("latest")},n.show=function(e){this.list=new gt({params:{q:"byobu:"+e.username()+" is:private",sort:this.sort}}),this.list.refresh(),t.prototype.show.call(this,e)},n.handleChangeSort=function(t,e){e.preventDefault(),this.changeSort(t)},n.changeSort=function(t){this.sort=t,this.loadUser(m.route.param("username"))},n.newDiscussionAction=function(t){t.preventDefault();var e=m.deferred();if(app.session.user){var n=new w.a;n.add("users:"+app.session.user.id(),app.session.user),K.prototype.recipients=n;var s=new K;app.composer.load(s),e.resolve(s)}else e.reject(),app.modal.show(new Nt.a);return e.promise},n.content=function(){return m("div",{className:"DiscussionsUserPage"},m("div",{className:"DiscussionsUserPage-toolbar"},m("ul",{className:"DiscussionsUserPage-toolbar-action"},Dt()(this.actionItems().toArray())),m("ul",{className:"DiscussionsUserPage-toolbar-view"},Dt()(this.viewItems().toArray()))),this.list.render())},n.actionItems=function(){var t=new w.a,e=app.forum.attribute("canStartDiscussion")||!app.session.user;return t.add("start_private",g.a.component({children:app.translator.trans(e?"fof-byobu.forum.nav.start_button":"core.forum.index.cannot_start_discussion_button"),className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:this.newDiscussionAction.bind(this),disabled:!e})),t},n.viewItems=function(){var t=this,e=new w.a,n=this.list.sortMap(),s={};for(var o in n)s[o]=app.translator.trans("core.forum.index_sort."+o+"_button");return e.add("sort",wt.a.component({buttonClassName:"Button",label:s[this.sort]||Object.keys(n).map((function(t){return s[t]}))[0],children:Object.keys(s).map((function(e){var o=s[e],i=(t.sort||Object.keys(n)[0])===e;return g.a.component({children:o,icon:!i||"fas fa-check",onclick:t.handleChangeSort.bind(t,e),active:i})}))})),e},e}(bt.a),Pt=function(){Number(app.data["fof-byobu.enable_byobu_user_page"])&&(app.routes["user.byobu"]={path:"/u/:username/byobu",component:kt.component()},Object(s.extend)(bt.a.prototype,"navItems",(function(t){var e=app.route("user.byobu",{username:this.user.username()});(app.session.user||m.route()===e)&&t.add("byobu",yt.a.component({href:e,children:app.translator.trans("fof-byobu.forum.user.byobu_link"),icon:"fas fa-map"}),85)})))},It=n(37),St=n.n(It),At=n(17),jt=n.n(At),Ot=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-map"},n.href=function(){var t=this.props.notification.subject();return app.route.discussion(t)},n.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("fof-byobu.forum.notifications.pd_text",{user:t})},e}(jt.a),Bt=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.icon=function(){return"fas fa-reply"},n.href=function(){var t=this.props.notification,e=t.subject(),n=t.content()||{};return app.route.discussion(e,n.postNumber)},n.content=function(){var t=this.props.notification.fromUser();return app.translator.trans("fof-byobu.forum.notifications.pd_reply_text",{user:t})},e}(jt.a),Ct=n(38),Lt=n.n(Ct),Ut=n(39),Mt=n.n(Ut),Gt=n(40),Tt=n.n(Gt),$t=n(41),qt=n.n($t),Et=n(42),Ht=n.n(Et),Wt=function(t){function e(){return t.apply(this,arguments)||this}u(e,t);var n=e.prototype;return n.init=function(){t.prototype.init.call(this),app.previous instanceof v.a&&(this.lastDiscussion=app.previous.discussion),app.previous instanceof e&&(app.cache.privateDiscussionList=null);var n=this.params();app.cache.privateDiscussionList&&Object.keys(n).some((function(t){if(app.cache.privateDiscussionList.props.params[t]!==n[t])return app.cache.privateDiscussionList=null,!0})),app.cache.privateDiscussionList||(app.cache.privateDiscussionList=new gt({params:n})),app.history.push("private-index",Mt()("far fa-map")),this.bodyClass="App--index"},n.onunload=function(){app.cache.scrollTop=$(window).scrollTop()},n.view=function(){return m("div",{className:"IndexPage"},this.hero(),m("div",{className:"container"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,Dt()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},Dt()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},Dt()(this.actionItems().toArray()))),app.cache.discussionList.render())))},n.config=function(e,n){if(t.prototype.config.apply(this,arguments),!e){Object(s.extend)(n,"onunload",(function(){return $("#app").css("min-height","")})),app.setTitle(""),app.setTitleCount(0);var o=app.cache.heroHeight,i=app.cache.heroHeight=this.$(".Hero").outerHeight(),r=app.cache.scrollTop;$("#app").css("min-height",$(window).height()+i);var a=function(){return $(window).scrollTop(r-o+i)};if(a(),setTimeout(a,1),this.lastDiscussion){var c=this.$('.DiscussionListItem[data-id="'+this.lastDiscussion.id()+'"]');if(c.length){var p=$("#header").outerHeight(),u=$(window).height(),l=c.offset().top,d=l+c.outerHeight();(l<r+p||d>r+u)&&$(window).scrollTop(l-p)}}}},n.hero=function(){return Tt.a.component()},n.sidebarItems=function(){var t=new w.a,e=app.forum.attribute("canStartDiscussion")||!app.session.user;return t.add("newDiscussion",g.a.component({children:app.translator.trans(e?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button"),icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:this.newDiscussion.bind(this),disabled:!e})),t.add("nav",Ht.a.component({children:this.navItems(this).toArray(),buttonClassName:"Button",className:"App-titleControl"})),t},n.navItems=function(){var t=new w.a,e=this.stickyParams();return t.add("allDiscussions",yt.a.component({href:app.route("index",e),children:app.translator.trans("core.forum.index.all_discussions_link"),icon:"far fa-comments"}),100),t},n.viewItems=function(){var t=new w.a,e=app.cache.discussionList.sortMap(),n={};for(var s in e)n[s]=app.translator.trans("core.forum.index_sort."+s+"_button");return t.add("sort",qt.a.component({options:n,value:this.params().sort||Object.keys(e)[0],onchange:this.changeSort.bind(this)})),t},n.actionItems=function(){var t=new w.a;return t.add("refresh",g.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-refresh",className:"Button Button--icon",onclick:function(){return app.cache.discussionList.refresh()}})),app.session.user&&t.add("markAllAsRead",g.a.component({title:app.translator.trans("core.forum.index.mark_all_as_read_tooltip"),icon:"fas fa-check",className:"Button Button--icon",onclick:this.markAllAsRead.bind(this)})),t},n.searching=function(){return this.params().q},n.clearSearch=function(){var t=this.params();delete t.q,m.route(app.route(this.props.routeName,t))},n.changeSort=function(t){var e=this.params();t===Object.keys(app.cache.discussionList.sortMap())[0]?delete e.sort:e.sort=t,m.route(app.route(this.props.routeName,e))},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.params=function(){var t=this.stickyParams();return t.filter=m.route.param("filter"),t},n.newDiscussion=function(){var t=m.deferred();return app.session.user?this.composeNewDiscussion(t):app.modal.show(new Nt.a({onlogin:this.composeNewDiscussion.bind(this,t)})),t.promise},n.composeNewDiscussion=function(t){var e=new K({user:app.session.user});return app.composer.load(e),app.composer.show(),t.resolve(e),t.promise},n.markAllAsRead=function(){confirm(app.translator.trans("core.forum.index.mark_all_as_read_confirmation"))&&app.session.user.save({readTime:new Date})},e}(Lt.a),Ft=n(43),Kt=function(t){function e(){return t.apply(this,arguments)||this}u(e,t),e.initProps=function(e){function n(t,e,n){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById(n,t)}))}t.initProps.call(this,e);var s=e.post.content();if(s.new||2!=s.length){var o=n(s.new.users,s.old.users,"users"),i=n(s.old.users,s.new.users,"users"),r=n(s.new.groups,s.old.groups,"groups"),a=n(s.old.groups,s.new.groups,"groups");e.added=o.concat(r),e.removed=i.concat(a)}else{var c=e.post.content()[0],p=e.post.content()[1];e.added=n(p,c,"users"),e.removed=n(c,p,"users")}};var n=e.prototype;return n.icon=function(){return"far fa-map"},n.descriptionKey=function(){var t="fof-byobu.forum.post.recipients_modified.";return this.props.added.length?this.props.removed.length?t+"added_and_removed":t+"added":t+"removed"},n.descriptionData=function(){var t={};return this.props.added.length&&(t.added=tt(this.props.added,{link:!0})),this.props.removed.length&&(t.removed=tt(this.props.removed,{link:!0})),t},e}(n.n(Ft).a),zt=n(44),Jt=n.n(zt),Qt=function(){Object(s.extend)(Jt.a.prototype,"items",(function(t){var e=app.session.user;t.add("privateDiscussions",yt.a.component({icon:"fas fa-map",children:app.translator.trans("fof-byobu.forum.user.dropdown_label"),href:app.route("user.byobu",{username:e.username()})}),99)}))};app.initializers.add("fof-byobu",(function(t){var e;t.routes.private_discussions={path:"/private-discussions",component:Wt.component()},a.a.prototype.recipientUsers=i.a.hasMany("recipientUsers"),a.a.prototype.oldRecipientUsers=i.a.hasMany("oldRecipientUsers"),a.a.prototype.recipientGroups=i.a.hasMany("recipientGroups"),a.a.prototype.oldRecipientGroups=i.a.hasMany("oldRecipientGroups"),a.a.prototype.canEditRecipients=i.a.attribute("canEditRecipients"),a.a.prototype.canEditUserRecipients=i.a.attribute("canEditUserRecipients"),a.a.prototype.canEditGroupRecipients=i.a.attribute("canEditGroupRecipients"),a.a.prototype.canEditGroupRecipients=i.a.attribute("canEditGroupRecipients"),p.a.prototype.blocksPd=i.a.attribute("blocksPd"),p.a.prototype.cannotBeDirectMessaged=i.a.attribute("cannotBeDirectMessaged"),t.postComponents.recipientsModified=Kt,function(t){K.prototype.recipients=new w.a,K.prototype.recipientUsers=[],K.prototype.recipientGroups=[],K.prototype.addDefaultRecipients=function(e){var n=t.store.getBy("users","username",e);this.recipients.add("users:"+t.session.user.id(),t.session.user),n.id()!==t.session.user.id()&&this.recipients.add("users:"+n.id(),n)},K.prototype.chooseRecipients=function(){var e=this;t.modal.show(new F({selectedRecipients:this.recipients,onsubmit:function(t){e.recipients=t,e.$(".RecipientsInput").focus()}}))},Object(s.extend)(K.prototype,"headerItems",(function(e){if(t.session.user&&t.forum.attribute("canStartPrivateDiscussion")){var n=this.recipients.toArray();e.add("recipients",m("a",{className:"PrivateDiscussionComposer-changeRecipients",onclick:this.chooseRecipients.bind(this)},n.length?z(n.length):m("span",{className:"RecipientLabel none"},t.translator.trans("fof-byobu.forum.buttons.add_recipients"))),5)}})),Object(s.extend)(K.prototype,"data",(function(t){var e=[],n=[];this.recipients.toArray().forEach((function(t){t instanceof p.a&&e.push(t),t instanceof E.a&&n.push(t)})),t.relationships=t.relationships||{},e.length&&(t.relationships.recipientUsers=e),n.length&&(t.relationships.recipientGroups=n)}))}(t),e=function(t,e,n){var s=[];t.recipientUsers().length&&(s=s.concat(t.recipientUsers())),t.recipientGroups().length&&(s=s.concat(t.recipientGroups())),s&&s.length&&(n?e.add("recipients",tt(s),10):e.add("recipients",tt(s,{link:!0}),4))},Object(s.extend)(Q.a.prototype,"infoItems",(function(t){var n=this.props.discussion;e(n,t,!0)})),Object(s.extend)(v.a.prototype,"params",(function(t){t.include.push("recipientUsers"),t.include.push("recipientGroups")})),Object(s.extend)(Z.a.prototype,"requestParams",(function(t){t.include.push("recipientUsers"),t.include.push("recipientGroups")})),Object(s.extend)(X.a.prototype,"items",(function(t){var n=this.props.discussion;e(n,t,!1)})),st(),rt(),mt(),pt(),Pt(),Qt(),t.notificationComponents.byobuPrivateDiscussionCreated=Ot,t.notificationComponents.byobuPrivateDiscussionReplied=Bt,Object(s.extend)(St.a.prototype,"notificationTypes",(function(e){e.add("byobuPrivateDiscussionCreated",{name:"byobuPrivateDiscussionCreated",icon:"fas fa-map",label:t.translator.trans("fof-byobu.forum.notifications.pd_label")}),e.add("byobuPrivateDiscussionReplied",{name:"byobuPrivateDiscussionReplied",icon:"fas fa-map",label:t.translator.trans("fof-byobu.forum.notifications.pd_reply_label")})}))}))},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Search"]},function(t,e){t.exports=flarum.core.compat["helpers/avatar"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/SettingsPage"]},function(t,e){t.exports=flarum.core.compat["components/Switch"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["components/NotificationGrid"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat["components/WelcomeHero"]},function(t,e){t.exports=flarum.core.compat["components/Select"]},function(t,e){t.exports=flarum.core.compat["components/SelectDropdown"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/SessionDropdown"]},,function(t,e,n){"use strict";n.r(e);var s=n(10);for(var o in s)"default"!==o&&function(t){n.d(e,t,(function(){return s[t]}))}(o);n(21)}]);
//# sourceMappingURL=forum.js.map