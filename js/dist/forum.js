module.exports=function(t){var e={};function a(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=15)}([function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["components/LogInModal"]},function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["components/Dropdown"]},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e){t.exports=flarum.core.compat["components/SelectDropdown"]},function(t,e){t.exports=flarum.core.compat["utils/string"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e){t.exports=flarum.core.compat["forum/components/SignUpModal"]},,,function(t,e,a){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}a.r(e);var s=a(6),r=a.n(s),i=a(2),l=a.n(i),u=a(3),c=a.n(u),p=a(4),d=a.n(p),g=a(5),f=a.n(g),h=a(0),v=a.n(h),b=a(1),y=a.n(b),N=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.blogCategories=app.forum.attribute("blogTags")},a.view=function(){var t=this;return m("div",{className:"BlogCategories BlogSideWidget"},m("h3",null,app.translator.trans("v17development-flarum-blog.forum.categories")),this.blogCategories&&this.blogCategories.map((function(e){var a=app.store.getById("tags",e);if(!a)return null;var o=[];return o.push(t.categoryItem(a)),app.store.all("tags").forEach((function(e){e.isChild()&&e.parent().id()===a.id()&&o.push(t.categoryItem(e))})),o})))},a.categoryItem=function(t){return m(y.a,{href:app.route("blogCategory",{slug:t.slug()}),className:"BlogSideWidget-item BlogSideWidget-item-"+t.id()+" "+(t.isChild()&&1==app.forum.attribute("blogCategoryHierarchy")?"BlogSideWidget-item-child":"")},m("span",{className:""===t.icon()?"BlogSideWidget-item-colored":"",style:{backgroundColor:""===t.icon()?t.color():null}},m("i",{className:t.icon()})),t.name())},e}(v.a);function B(t){$(t).tooltip()}var w=a(7),_=a.n(w),k=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,e){return t[e.code()]=m("span",null,m("i",{className:"fas fa-globe"})," ",e.name()),t}),this.attrs.extra||{})},a.view=function(){var t=this.attrs,e=t.language,a=t.uppercase,o=e.name()||"";return m("span",null,m("i",{className:"fas fa-globe"})," ",a?o.toUpperCase():o)},e}(v.a),x=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.languages=app.store.all("discussion-languages"),this.options=this.languages.reduce((function(t,e){return t[e.code()]=m(k,{language:e}),t}),this.attrs.extra||{})},a.view=function(){var t=this,e=this.attrs.selected,a=Object.keys(this.options).map((function(a){var o=a===(e||"any");return l.a.component({active:o,icon:!o||"fas fa-check",onclick:function(){return t.attrs.onclick(a)}},t.options[a])}));return _.a.component({buttonClassName:"Button",label:this.options[e]||this.options[this.attrs.default],menuClassName:"Dropdown-menu--right"},a)},e}(v.a),P=a(8),M=a.n(P),L=a(9),S=a.n(L),C=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.view=function(){return m("div",{className:"BlogForumNav BlogSideWidget"},m("h3",null,app.translator.trans("v17development-flarum-blog.forum.forum_nav")),m("nav",{className:"IndexPage-nav sideNav"},m(S.a,{buttonClassName:"Button",className:"App-titleControl"},this.navItems().toArray())))},a.navItems=function(){var t=M.a.prototype.navItems();return"phone"!==app.screen()&&t.remove("blog"),t},e}(v.a),D=a(10),O=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog")),this.bodyClass="BlogOverviewPage",this.isLoading=!0,this.featured=[],this.posts=[],this.featuretag=[],this.hasMore=null,this.isLoadingMore=!1,this.languages=app.store.all("discussion-languages"),this.currentSelectedLanguage=m.route.param("lang")?m.route.param("lang"):app.translator.locale,app.history.push("adkhome"),this.loadBlogOverview()},a.loadBlogOverview=function(){var t=app.preloadedApiDocument();t?setTimeout(this.reloadData.bind(this,t),0):this.reloadData(),m.redraw()},a.reloadData=function(){var t=this,e="is:blog"+(m.route.param("slug")?" tag:"+m.route.param("slug"):"");null!==this.languages&&this.languages.length>=1&&(e+=" language:"+this.currentSelectedLanguage),app.store.find("discussions",{filter:{tag:"featured"},sort:"-createdAt",limit:3}).then((function(a){t.featuretag=a.slice(0,3),app.store.find("discussions",{filter:{q:e},sort:"-createdAt",limit:3}).then((function(e){jQuery.merge(t.featuretag,e.slice(0,3)),t.featured=t.featuretag,app.store.find("discussions",{sort:"-lastPostedAt",include:"lastPost"}).then(t.show.bind(t)).catch((function(){m.redraw()}))})).catch((function(){m.redraw()}))}))},a.show=function(t){if(0===t.length)return this.isLoading=!1,void m.redraw();this.posts=t,this.hasMore=t.payload.links&&t.payload.links.next?t.payload.links.next:null,this.isLoading=!1,m.redraw()},a.loadMore=function(){var t=this;this.isLoadingMore=!0,app.store.find(this.hasMore.replace(app.forum.attribute("apiUrl"),"")).then((function(e){e.map((function(e){return t.posts.push(e)})),t.hasMore=e.payload.links&&e.payload.links.next?e.payload.links.next:null})).catch((function(){})).then((function(){t.isLoadingMore=!1,m.redraw()}))},a.title=function(){if(!m.route.param("slug"))return m("h2",null,app.translator.trans("adkhomepage.forum.featured"));var t=app.store.all("tags").filter((function(t){return t.slug()===m.route.param("slug")}));return m("h2",null,t&&t[0]&&t[0].name(),m("small",null," ","-"," ",m(y.a,{href:app.route("blog")},app.translator.trans("v17development-flarum-blog.forum.return_to_overview"))))},a.startDiscussion=function(){var t=app.forum.attribute("canStartDiscussion")||!app.session.user;return l.a.component({icon:"fas fa-edit",className:"Button Button--primary IndexPage-newDiscussion",itemClassName:"App-primaryControl",onclick:function(){return new Promise((function(t,e){return app.session.user?(app.composer.load(d.a,{user:app.session.user}),app.composer.show(),t(app.composer)):(app.modal.show(f.a),e())}))},disabled:!t},app.translator.trans(t?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button"))},a.newDiscussionAction=function(){return new Promise((function(t,e){return app.session.user?(app.composer.load(d.a,{user:app.session.user}),app.composer.show(),t(app.composer)):(app.modal.show(f.a),e())}))},a.view=function(){var t=this,e=app.forum.attribute("blogDefaultImage")?"url("+app.forum.attribute("baseUrl")+"/assets/"+app.forum.attribute("blogDefaultImage")+")":null;return m("div",{className:"FlarumBlogOverview"},m("div",{className:"container"},m("div",{className:"BlogFeatured"},m("div",{className:"BlogOverviewButtons"},null!==this.languages&&this.languages.length>=1&&m(x,{selected:this.currentSelectedLanguage,onclick:function(e){t.currentSelectedLanguage=e,m.route.set(document.location.pathname,{lang:e}),t.reloadData()}})),this.title(),m("div",{style:{clear:"both"}}),m("div",{className:"BlogFeatured-list"},this.isLoading&&[0,1,2].map((function(){return m("div",{className:"BlogFeatured-list-item BlogFeatured-list-item-ghost"},m("div",{className:"BlogFeatured-list-item-details"},m("h4",null," "),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-wave"})))))})),!this.isLoading&&this.featured.length>=0&&this.featured.map((function(a){var o=a.blogMeta()&&a.blogMeta().featuredImage()?"url("+a.blogMeta().featuredImage()+")":e,n=a.tags()?a.tags().filter((function(t){return t.isChild()})):[];return m(y.a,{href:app.route("blogArticle",{id:""+a.slug()}),className:"BlogFeatured-list-item FlarumBlog-default-image",style:{backgroundImage:o}},m("div",{className:"BlogFeatured-list-item-top"},n[0]&&m("span",null,n[0].name()),a.isSticky()&&m("span",null,m("i",{className:"fas fa-thumbtack"})),(a.blogMeta()&&1==a.blogMeta().isPendingReview()||a.isHidden())&&m("span",null,m("i",{className:"fas fa-eye-slash"})),a.blogMeta()&&1==a.blogMeta().isPendingReview()&&m("span",{title:app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),config:B.bind(t),"data-placement":"bottom"},m("i",{className:"far fa-clock"})," ",app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review_title"))),m("div",{className:"BlogFeatured-list-item-details"},m("h4",null,a.title()),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-clock"})," ",c()(a.createdAt())),m("span",null,m("i",{className:"far fa-user"})," ",a.user()?a.user().displayName():"[Deleted]"),m("span",null,m("i",{className:"far fa-comment"})," ",a.commentCount()-1))))})))),m("div",{className:"BlogScrubber"},m("div",{className:"BlogList"},m("h2",null,app.translator.trans("adkhomepage.forum.recent_posts")),this.isLoading&&[!1,!1,!0,!1].map((function(t){return m("div",{className:"BlogList-item BlogList-item-"+(!0===t?"sized":"default")+" BlogList-item-ghost"},m("div",{className:"BlogList-item-photo FlarumBlog-default-image"}),m("div",{className:"BlogList-item-content"},m("h4",null," "),m("p",null," "),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-wave"})))))})),!this.isLoading&&this.posts.length>=1&&this.posts.map((function(a){var o=a.lastPostedUser()&&a.lastPostedUser().avatarUrl()?"url("+a.lastPostedUser().avatarUrl()+")":e,n=a.blogMeta()&&a.blogMeta().isSized(),s=a.lastPost()&&a.lastPost().contentPlain()?Object(D.truncate)(a.lastPost().contentPlain(),140):"";return m(y.a,{href:"/d/"+a.slug()+"/"+a.lastPostNumber(),className:"BlogList-item BlogList-item-"+(n?"sized":"default")},m("div",{className:"BlogList-item-photo-user FlarumBlog-default-image",style:{backgroundImage:o,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}}),m("div",{className:"BlogList-item-content"},m("h4",null,a.title(),(a.blogMeta()&&1==a.blogMeta().isPendingReview()||a.isHidden())&&m("i",{className:"fas fa-eye-slash"}),a.blogMeta()&&1==a.blogMeta().isPendingReview()&&m("i",{className:"far fa-clock",title:app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),config:B.bind(t)})),m("p",null,s),m("div",{className:"data"},m("span",null,m("i",{className:"far fa-clock"})," ",c()(a.lastPostedAt())),m("span",null,m("i",{className:"far fa-user"})," ",a.lastPostedUser()?a.lastPostedUser().displayName():"[Deleted]"),m("span",null,m("i",{className:"far fa-comment"})," ",a.commentCount()-1))))})),!this.isLoading&&this.posts.length>0&&null===this.hasMore&&m("p",{className:"FlarumBlog-reached-end"},app.translator.trans("adkhomepage.forum.no_more_discussions")),!this.isLoading&&0===this.featured.length&&0===this.posts.length&&m("p",{className:"FlarumBlog-reached-end"},app.translator.trans("v17development-flarum-blog.forum.category_empty")),!this.isLoading&&null!==this.hasMore&&m("div",{className:"FlarumBlog-reached-load-more"},m(l.a,{className:"Button",onclick:function(){return t.loadMore()},icon:"fas fa-chevron-down",loading:this.isLoadingMore},app.translator.trans("core.forum.discussion_list.load_more_button")))),m("div",{className:"Sidebar"},this.startDiscussion(),m(N,null),m(C,null)))))},e}(r.a),I=a(11),F=a(12),j=a.n(F);app.initializers.add("adkhomepage",(function(t){t.routes.blog={path:"/adkhome",component:O},Object(I.extend)(j.a.prototype,"onready",(function(t){console.log("New signup!"),gtag_report_conversion()}))}))}]);
//# sourceMappingURL=forum.js.map