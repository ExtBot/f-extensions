module.exports=function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=38)}([function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["utils/ItemList"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionComposer"]},function(e,t){e.exports=flarum.core.compat["components/Button"]},function(e,t){e.exports=flarum.core.compat["models/Discussion"]},function(e,t){e.exports=flarum.core.compat["models/User"]},function(e,t){e.exports=flarum.core.compat["models/Group"]},function(e,t){e.exports=flarum.core.compat.Model},function(e,t){e.exports=flarum.core.compat["components/DiscussionPage"]},function(e,t){},function(e,t){e.exports=flarum.core.compat["helpers/highlight"]},function(e,t){e.exports=flarum.core.compat["helpers/username"]},function(e,t){e.exports=flarum.core.compat["utils/extract"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionList"]},function(e,t){e.exports=flarum.core.compat["helpers/listItems"]},function(e,t){e.exports=flarum.core.compat["utils/classList"]},,function(e,t,n){"use strict";var s=n(7),o=n.n(s),r=n(4),i=n.n(r),a=n(0),c=n(2),p=n.n(c);function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l=n(19),d=n.n(l),f=n(8),h=n.n(f),v=n(3),g=n.n(v),b=n(1),y=n.n(b),x=n(20),w=n.n(x),R=n(10),N=n.n(R),_=n(21),D=n.n(_),I=n(11),k=n.n(I),L=function(){function e(){}var t=e.prototype;return t.search=function(e){return app.store.find("users",{filter:{q:e},page:{limit:5}})},t.view=function(e){e=e.toLowerCase();var t=app.store.all("users").filter(function(t){return t.username().toLowerCase().substr(0,e.length)===e});return t.length?[m("li",{className:"Dropdown-header"},app.translator.trans("core.forum.search.users_heading")),t.map(function(t){var n=k()(t);return n.children[0]=N()(n.children[0],e),m("li",{className:"SearchResult","data-index":"users:"+t.id()},m("a",{"data-index":"users:"+t.id()},D()(t),n))})]:""},e}(),P=function(){function e(){}var t=e.prototype;return t.search=function(e){return app.store.find("groups",{filter:{q:e},page:{limit:5}})},t.view=function(e){e=e.toLowerCase();var t=app.store.all("groups").filter(function(t){return t.namePlural().toLowerCase().substr(0,e.length)===e});return t.length?[m("li",{className:"Dropdown-header"},app.translator.trans("flagrow-byobu.forum.search.headings.groups")),t.map(function(t){var n=t.namePlural(),s=N()(n,e);return m("li",{className:"SearchResult","data-index":"groups:"+t.id()},m("a",{"data-index":"groups:"+t.id()},m("span",{class:"groupName"},s)))})]:""},e}(),A=n(15),S=n.n(A),O=n(22),j=n.n(O),C=n(23),U=n.n(C),M=n(12),G=n.n(M),B=n(5),E=n.n(B),T=n(6),q=n.n(T);function H(e,t){void 0===t&&(t={}),t.style=t.style||{},t.className="RecipientLabel "+(t.className||"");var n,s=G()(t,"link");return e instanceof E.a?(n=k()(e),s&&(t.title=e.username()||"",t.href=app.route.user(e),t.config=m.route)):e instanceof q.a?n=e.namePlural():(t.className+=" none",n=app.translator.trans("flagrow-byobu.forum.labels.user_deleted")),m(s?"a":"span",t,m("span",{className:"RecipientLabel-text"},n))}var F=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.config=function(t){var n=this;if(!t){var s=this;this.$(".Search-results").on("click",function(e){var t=n.$(".SearchResult.active");s.addRecipient(t.data("index")),s.$(".RecipientsInput").focus()}),this.$(".Search-results").on("touchstart",function(e){var t=n.$(e.target.parentNode);s.addRecipient(t.data("index")),s.$(".RecipientsInput").focus()}),e.prototype.config.call(this,t)}},n.view=function(){var e=this;void 0===this.value()&&this.value("");var t=this.value()&&this.value().length>=3,n=this.sourceItems().toArray();return m("div",{className:"AddRecipientModal-form-input"},[m("div",{className:"RecipientsInput-selected RecipientsLabel"},this.props.selected().toArray().map(function(t){return H(t,{onclick:function(){e.removeRecipient(t)}})})),m("input",{className:"RecipientsInput FormControl "+S()({open:!!this.value(),focused:!!this.value(),active:!!this.value(),loading:!!this.loadingSources}),config:function(e){e.focus()},type:"search",placeholder:j()(app.translator.trans("flagrow-byobu.forum.input.search_recipients")),value:this.value(),oninput:m.withAttr("value",this.value),onfocus:function(){return e.hasFocus=!0},onblur:function(){return e.hasFocus=!1}}),m("ul",{className:"Dropdown-menu Search-results fade "+S()({in:!!t})},t?n.map(function(t){return t.view(e.value())}):U.a.component({size:"tiny",className:"Button Button--icon Button--link"}))])},n.sourceItems=function(){var e=new y.a;return(!this.props.discussion&&app.forum.attribute("canStartPrivateDiscussionWithUsers")||this.props.discussion&&this.props.discussion.canEditUserRecipients())&&e.add("users",new L),(!this.props.discussion&&app.forum.attribute("canStartPrivateDiscussionWithGroups")||this.props.discussion&&this.props.discussion.canEditGroupRecipients())&&e.add("groups",new P),e},n.clear=function(){this.value(""),m.redraw()},n.addRecipient=function(e){var t=e.split(":"),n=t[0],s=t[1],o=this.findRecipient(n,s);this.props.selected().add(e,o),this.clear()},n.removeRecipient=function(e){var t;e instanceof E.a&&(t="users"),e instanceof q.a&&(t="groups"),this.props.selected().remove(t+":"+e.id()),m.redraw()},n.findRecipient=function(e,t){return app.store.getById(e,t)},t}(w.a),K=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),this.selected=m.prop(new y.a),this.props.discussion?this.assignInitialRecipients(this.props.discussion):this.props.selectedRecipients.toArray().length>0?this.selected().merge(this.props.selectedRecipients):this.selected().add("users:"+app.session.user.id(),app.session.user),this.recipientSearch=F.component({selected:this.selected,discussion:this.props.discussion})},n.assignInitialRecipients=function(e){var t=this;e.recipientUsers().map(function(e){t.selected().add("users:"+e.id(),e)}),e.recipientGroups().map(function(e){t.selected().add("groups:"+e.id(),e)})},n.className=function(){return"AddRecipientModal"},n.title=function(){return this.props.discussion?app.translator.trans("flagrow-byobu.forum.modal.titles.update_recipients",{title:m("em",null,this.props.discussion.title())}):app.translator.trans("flagrow-byobu.forum.modal.titles.add_recipients")},n.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"AddRecipientModal-form"},this.recipientSearch,m("div",{className:"AddRecipientModal-form-submit App-primaryControl"},g.a.component({type:"submit",className:"Button Button--primary",disabled:!1,icon:"fas fa-check",children:app.translator.trans("flagrow-byobu.forum.buttons.submit")}))))]},n.select=function(e){(e.metaKey||e.ctrlKey||-1!==this.selected.indexOf(this.index))&&this.selected().length&&this.$("form").submit()},n.onsubmit=function(e){e.preventDefault();var t=this.props.discussion,n=this.selected(),s=[],o=[];n.toArray().forEach(function(e){e instanceof E.a&&o.push(e),e instanceof q.a&&s.push(e)}),t&&t.save({relationships:{recipientUsers:o,recipientGroups:s}}).then(function(){app.current instanceof h.a&&app.current.stream.update(),m.redraw()}),this.props.onsubmit&&this.props.onsubmit(n),app.modal.close(),m.redraw.strategy("none")},t}(d.a);function W(e,t){void 0===t&&(t={}),t.style=t.style||{},t.className="RecipientLabel "+(t.className||"");var n=app.translator.transChoice("flagrow-byobu.forum.labels.recipients",e,{count:e});return m("span",t,m("span",{className:"RecipientLabel-text"},n))}var z=n(24),J=n.n(z),Q=n(25),V=n.n(Q),X=n(13),Y=n.n(X);function Z(e,t){void 0===t&&(t={});var n=[],s=G()(t,"link");return t.className="RecipientsLabel "+(t.className||""),e?e.forEach(function(e){n.push(H(e,{link:s}))}):n.push(H()),m("span",t,n)}var ee=n(26),te=n.n(ee),ne=function(){Object(a.extend)(te.a,"moderationControls",function(e,t){t.canEditRecipients()&&e.add("recipients",g.a.component({children:app.translator.trans("flagrow-byobu.forum.buttons.edit_recipients"),icon:"far fa-map",onclick:function(){return app.modal.show(new K({discussion:t}))}}))})},se=n(27),oe=n.n(se);function re(){Object(a.extend)(i.a.prototype,"badges",function(e){(this.recipientUsers().length||this.recipientGroups().length)&&e.add("private",oe.a.component({type:"private",label:app.translator.trans("flagrow-byobu.forum.badges.is_private.tooltip"),icon:"fas fa-map"}),10)})}var ie=n(28),ae=n.n(ie),ce=function(){Object(a.extend)(ae.a,"userControls",function(e,t){return app.session.user&&app.session.user.id()!=t.id()&&app.forum.attribute("canStartPrivateDiscussion")&&e.add("private-discussion",g.a.component({children:app.translator.trans("flagrow-byobu.forum.buttons.send_pd",{username:t.username()}),icon:"far fa-map",onclick:function(){var e=m.deferred(),n=new y.a;n.add("users:"+t.id(),t),n.add("users:"+app.session.user.id(),app.session.user),p.a.prototype.recipients=n;var s=new p.a({user:app.session.user,recipients:n,recipientUsers:n});return app.composer.load(s),app.composer.show(),e.resolve(s),e.promise}})),e})},pe=n(29),ue=n.n(pe),le=n(14),de=n.n(le),me=n(30),fe=n.n(me),he=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.loadResults=function(e){var t=app.preloadedDocument();if(t)return m.deferred().resolve(t).promise;var n=this.requestParams();return n.q="q=is:private",n.page={offset:e},n.include=n.include.join(","),app.store.find("discussions",n)},t}(Y.a),ve=n(31),ge=n.n(ve),be=n(32),ye=n.n(be),xe=n(33),we=n.n(xe),Re=n(34),Ne=n.n(Re),_e=n(35),De=n.n(_e),Ie=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.init=function(){e.prototype.init.call(this),app.previous instanceof h.a&&(this.lastDiscussion=app.previous.discussion),app.previous instanceof t&&(app.cache.privateDiscussionList=null);var n=this.params();app.cache.privateDiscussionList&&Object.keys(n).some(function(e){if(app.cache.privateDiscussionList.props.params[e]!==n[e])return app.cache.privateDiscussionList=null,!0}),app.cache.privateDiscussionList||(app.cache.privateDiscussionList=new he({params:n})),app.history.push("private-index",fe()("far fa-map")),this.bodyClass="App--index"},n.onunload=function(){app.cache.scrollTop=$(window).scrollTop()},n.view=function(){return m("div",{className:"IndexPage"},this.hero(),m("div",{className:"container"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,de()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},de()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},de()(this.actionItems().toArray()))),app.cache.discussionList.render())))},n.config=function(t,n){if(e.prototype.config.apply(this,arguments),!t){Object(a.extend)(n,"onunload",function(){return $("#app").css("min-height","")}),app.setTitle(""),app.setTitleCount(0);var s=app.cache.heroHeight,o=app.cache.heroHeight=this.$(".Hero").outerHeight(),r=app.cache.scrollTop;$("#app").css("min-height",$(window).height()+o);var i=function(){return $(window).scrollTop(r-s+o)};if(i(),setTimeout(i,1),this.lastDiscussion){var c=this.$('.DiscussionListItem[data-id="'+this.lastDiscussion.id()+'"]');if(c.length){var p=$("#header").outerHeight(),u=$(window).height(),l=c.offset().top,d=l+c.outerHeight();(l<r+p||d>r+u)&&$(window).scrollTop(l-p)}}}},n.hero=function(){return ge.a.component()},n.sidebarItems=function(){var e=new y.a,t=app.forum.attribute("canStartDiscussion")||!app.session.user;return e.add("newDiscussion",g.a.component({children:app.translator.trans(t?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button"),icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:this.newDiscussion.bind(this),disabled:!t})),e.add("nav",De.a.component({children:this.navItems(this).toArray(),buttonClassName:"Button",className:"App-titleControl"})),e},n.navItems=function(){var e=new y.a,t=this.stickyParams();return e.add("allDiscussions",Ne.a.component({href:app.route("index",t),children:app.translator.trans("core.forum.index.all_discussions_link"),icon:"far fa-comments"}),100),e},n.viewItems=function(){var e=new y.a,t=app.cache.discussionList.sortMap(),n={};for(var s in t)n[s]=app.translator.trans("core.forum.index_sort."+s+"_button");return e.add("sort",we.a.component({options:n,value:this.params().sort||Object.keys(t)[0],onchange:this.changeSort.bind(this)})),e},n.actionItems=function(){var e=new y.a;return e.add("refresh",g.a.component({title:app.translator.trans("core.forum.index.refresh_tooltip"),icon:"fas fa-refresh",className:"Button Button--icon",onclick:function(){return app.cache.discussionList.refresh()}})),app.session.user&&e.add("markAllAsRead",g.a.component({title:app.translator.trans("core.forum.index.mark_all_as_read_tooltip"),icon:"fas fa-check",className:"Button Button--icon",onclick:this.markAllAsRead.bind(this)})),e},n.searching=function(){return this.params().q},n.clearSearch=function(){var e=this.params();delete e.q,m.route(app.route(this.props.routeName,e))},n.changeSort=function(e){var t=this.params();e===Object.keys(app.cache.discussionList.sortMap())[0]?delete t.sort:t.sort=e,m.route(app.route(this.props.routeName,t))},n.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},n.params=function(){var e=this.stickyParams();return e.filter=m.route.param("filter"),e},n.newDiscussion=function(){var e=m.deferred();return app.session.user?this.composeNewDiscussion(e):app.modal.show(new ye.a({onlogin:this.composeNewDiscussion.bind(this,e)})),e.promise},n.composeNewDiscussion=function(e){var t=new p.a({user:app.session.user});return app.composer.load(t),app.composer.show(),e.resolve(t),e.promise},n.markAllAsRead=function(){confirm(app.translator.trans("core.forum.index.mark_all_as_read_confirmation"))&&app.session.user.save({readTime:new Date})},t}(ue.a),ke=n(36),Le=function(e){function t(){return e.apply(this,arguments)||this}u(t,e),t.initProps=function(t){function n(e,t,n){return e.filter(function(e){return-1===t.indexOf(e)}).map(function(e){return app.store.getById(n,e)})}e.initProps.call(this,t);var s=t.post.content();if(s.new||2!=s.length){var o=n(s.new.users,s.old.users,"users"),r=n(s.old.users,s.new.users,"users"),i=n(s.new.groups,s.old.groups,"groups"),a=n(s.old.groups,s.new.groups,"groups");t.added=o.concat(i),t.removed=r.concat(a)}else{var c=t.post.content()[0],p=t.post.content()[1];t.added=n(p,c,"users"),t.removed=n(c,p,"users")}};var n=t.prototype;return n.icon=function(){return"far fa-map"},n.descriptionKey=function(){var e="flagrow-byobu.forum.post.recipients_modified.";return this.props.added.length?this.props.removed.length?e+"added_and_removed":e+"added":e+"removed"},n.descriptionData=function(){var e={};return this.props.added.length&&(e.added=Z(this.props.added,{link:!0})),this.props.removed.length&&(e.removed=Z(this.props.removed,{link:!0})),e},t}(n.n(ke).a);app.initializers.add("flagrow-byobu",function(e){e.routes.private_discussions={path:"/private-discussions",component:Ie.component()},i.a.prototype.recipientUsers=o.a.hasMany("recipientUsers"),i.a.prototype.oldRecipientUsers=o.a.hasMany("oldRecipientUsers"),i.a.prototype.recipientGroups=o.a.hasMany("recipientGroups"),i.a.prototype.oldRecipientGroups=o.a.hasMany("oldRecipientGroups"),i.a.prototype.canEditRecipients=o.a.attribute("canEditRecipients"),i.a.prototype.canEditUserRecipients=o.a.attribute("canEditUserRecipients"),i.a.prototype.canEditGroupRecipients=o.a.attribute("canEditGroupRecipients"),e.postComponents.recipientsModified=Le,function(e){p.a.prototype.recipients=new y.a,p.a.prototype.recipientUsers=[],p.a.prototype.recipientGroups=[],p.a.prototype.chooseRecipients=function(){var t=this;e.modal.show(new K({selectedRecipients:this.recipients,onsubmit:function(e){t.recipients=e,t.$(".RecipientsInput").focus()}}))},Object(a.extend)(p.a.prototype,"headerItems",function(t){if(e.session.user&&e.forum.attribute("canStartPrivateDiscussion")){var n=this.recipients.toArray();t.add("recipients",m("a",{className:"DiscussionComposer-changeRecipients",onclick:this.chooseRecipients.bind(this)},n.length?W(n.length):m("span",{className:"RecipientLabel none"},e.translator.trans("flagrow-byobu.forum.buttons.add_recipients"))),5)}}),Object(a.extend)(p.a.prototype,"data",function(e){var t=[],n=[];this.recipients.toArray().forEach(function(e){e instanceof E.a&&t.push(e),e instanceof q.a&&n.push(e)}),e.relationships=e.relationships||{},t.length&&(e.relationships.recipientUsers=t),n.length&&(e.relationships.recipientGroups=n)})}(e),function(){var e=function(e,t,n){var s=[];e.recipientUsers().length&&(s=s.concat(e.recipientUsers())),e.recipientGroups().length&&(s=s.concat(e.recipientGroups())),s&&s.length&&(n?t.add("recipients",Z(s),10):t.add("recipients",Z(s,{link:!0}),4))};Object(a.extend)(J.a.prototype,"infoItems",function(t){var n=this.props.discussion;e(n,t,!0)}),Object(a.extend)(h.a.prototype,"params",function(e){e.include.push("recipientUsers"),e.include.push("recipientGroups")}),Object(a.extend)(Y.a.prototype,"requestParams",function(e){e.include.push("recipientUsers"),e.include.push("recipientGroups")}),Object(a.extend)(V.a.prototype,"items",function(t){var n=this.props.discussion;e(n,t,!1)})}(),ne(),re(),ce()})},,function(e,t){e.exports=flarum.core.compat["components/Modal"]},function(e,t){e.exports=flarum.core.compat["components/Search"]},function(e,t){e.exports=flarum.core.compat["helpers/avatar"]},function(e,t){e.exports=flarum.core.compat["utils/extractText"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionListItem"]},function(e,t){e.exports=flarum.core.compat["components/DiscussionHero"]},function(e,t){e.exports=flarum.core.compat["utils/DiscussionControls"]},function(e,t){e.exports=flarum.core.compat["components/Badge"]},function(e,t){e.exports=flarum.core.compat["utils/UserControls"]},function(e,t){e.exports=flarum.core.compat["components/Page"]},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){e.exports=flarum.core.compat["components/WelcomeHero"]},function(e,t){e.exports=flarum.core.compat["components/LogInModal"]},function(e,t){e.exports=flarum.core.compat["components/Select"]},function(e,t){e.exports=flarum.core.compat["components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["components/SelectDropdown"]},function(e,t){e.exports=flarum.core.compat["components/EventPost"]},,function(e,t,n){"use strict";n.r(t);var s=n(9);for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);n(17)}]);
//# sourceMappingURL=forum.js.map