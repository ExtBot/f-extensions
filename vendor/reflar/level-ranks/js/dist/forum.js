module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,r){"use strict";function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}r.d(e,"a",function(){return n})},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/PostUser"]},function(t,e){t.exports=flarum.core.compat.Component},,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),s=r(2),a=r(3),u=r.n(a),i=r(1),c=r(4),l=function(t){function e(){return t.apply(this,arguments)||this}Object(i.a)(e,t);var r=e.prototype;return r.config=function(){this.$().tooltip({container:"body"})},r.view=function(){var t=this.props.post.user(),e=o.a.forum.attribute("reflar-level-ranks.pointsText")||o.a.translator.trans("reflar-level-ranks.lib.defaults.level"),r=21*(t.commentCount()-t.discussionCount())+33*t.discussionCount(),n=Math.floor(r/135),s=100/135*(r-135*n);return m("div",{class:"PostUser-level",title:r+" "+o.a.translator.trans("reflar-level-ranks.forum.desc.expText")},m("span",{class:"PostUser-text"},m("span",{class:"PostUser-levelText"},e)," ",m("span",{class:"PostUser-levelPoints"},n)),m("div",{class:"PostUser-bar PostUser-bar--empty"}),m("div",{class:"PostUser-bar",style:"width: "+s+"%;"}))},e}(r.n(c).a);o.a.initializers.add("reflar-level-ranks",function(t){Object(s.extend)(u.a.prototype,"view",function(t){t.children.push(l.component(this.props))})})}]);
//# sourceMappingURL=forum.js.map