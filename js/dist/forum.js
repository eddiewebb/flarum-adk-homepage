module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/forum/components/BlogCategories.js":
/*!************************************************!*\
  !*** ./src/forum/components/BlogCategories.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogCategories; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2__);




var BlogCategories = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BlogCategories, _Component);

  function BlogCategories() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogCategories.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.blogCategories = app.forum.attribute("blogTags");
  };

  _proto.view = function view() {
    var _this = this;

    return m("div", {
      className: "BlogCategories BlogSideWidget"
    }, m("h3", null, app.translator.trans("v17development-flarum-blog.forum.categories")), this.blogCategories && this.blogCategories.map(function (tagId) {
      var tag = app.store.getById("tags", tagId);
      if (!tag) return null;
      var tags = []; // Add tag

      tags.push(_this.categoryItem(tag)); // Add tags

      app.store.all("tags").forEach(function (_tag) {
        if (_tag.isChild() && _tag.parent().id() === tag.id()) {
          tags.push(_this.categoryItem(_tag));
        }
      });
      return tags;
    }));
  } // Category item
  ;

  _proto.categoryItem = function categoryItem(tag) {
    return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: app.route("blogCategory", {
        slug: tag.slug()
      }),
      className: "BlogSideWidget-item BlogSideWidget-item-" + tag.id() + " " + (tag.isChild() && app.forum.attribute("blogCategoryHierarchy") == true ? "BlogSideWidget-item-child" : "")
    }, m("span", {
      className: tag.icon() === "" ? "BlogSideWidget-item-colored" : "",
      style: {
        backgroundColor: tag.icon() === "" ? tag.color() : null
      }
    }, m("i", {
      className: tag.icon()
    })), tag.name());
  };

  return BlogCategories;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ForumNav.js":
/*!******************************************!*\
  !*** ./src/forum/components/ForumNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForumNav; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SelectDropdown */ "flarum/components/SelectDropdown");
/* harmony import */ var flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__);





var ForumNav = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ForumNav, _Component);

  function ForumNav() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ForumNav.prototype;

  _proto.view = function view() {
    return m("div", {
      className: "BlogForumNav BlogSideWidget"
    }, m("h3", null, app.translator.trans("v17development-flarum-blog.forum.forum_nav")), m("nav", {
      className: "IndexPage-nav sideNav"
    }, m(flarum_components_SelectDropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      buttonClassName: "Button",
      className: "App-titleControl"
    }, this.navItems().toArray())));
  };

  _proto.navItems = function navItems() {
    var items = flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.navItems(); // We want the active screen to show up in the top dropdown when on mobile.

    if (app.screen() !== "phone") {
      items.remove("blog");
    }

    return items;
  };

  return ForumNav;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LanguageDropdown/Language.js":
/*!***********************************************************!*\
  !*** ./src/forum/components/LanguageDropdown/Language.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Language; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var Language = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Language, _Component);

  function Language() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Language.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.languages = app.store.all("discussion-languages");
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m("span", null, m("i", {
        className: "fas fa-globe"
      }), " ", lang.name());
      return o;
    }, this.attrs.extra || {});
  };

  _proto.view = function view() {
    var _this$attrs = this.attrs,
        language = _this$attrs.language,
        uppercase = _this$attrs.uppercase;
    var name = language.name() || "";
    return m("span", null, m("i", {
      className: "fas fa-globe"
    }), "\xA0", uppercase ? name.toUpperCase() : name);
  };

  return Language;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LanguageDropdown/LanguageDropdown.js":
/*!*******************************************************************!*\
  !*** ./src/forum/components/LanguageDropdown/LanguageDropdown.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LanguageDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Language */ "./src/forum/components/LanguageDropdown/Language.js");






var LanguageDropdown = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LanguageDropdown, _Component);

  function LanguageDropdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LanguageDropdown.prototype;

  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);

    this.languages = app.store.all("discussion-languages");
    this.options = this.languages.reduce(function (o, lang) {
      o[lang.code()] = m(_Language__WEBPACK_IMPORTED_MODULE_4__["default"], {
        language: lang
      });
      return o;
    }, this.attrs.extra || {});
  };

  _proto.view = function view() {
    var _this = this;

    var selected = this.attrs.selected;
    var items = Object.keys(this.options).map(function (key) {
      var isSelected = selected || "any";
      var active = key === isSelected;
      return flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
        active: active,
        icon: active ? "fas fa-check" : true,
        onclick: function onclick() {
          return _this.attrs.onclick(key);
        }
      }, _this.options[key]);
    });
    return flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      buttonClassName: "Button",
      label: this.options[selected] || this.options[this.attrs["default"]],
      menuClassName: "Dropdown-menu--right"
    }, items);
  };

  return LanguageDropdown;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_AdkHomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/AdkHomepage */ "./src/forum/pages/AdkHomepage.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/SignUpModal */ "flarum/forum/components/SignUpModal");
/* harmony import */ var flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2__);


 // Register Flarum Blog

app.initializers.add("adkhomepage", function (app) {
  app.routes.blog = {
    path: "/adkhome",
    component: _pages_AdkHomepage__WEBPACK_IMPORTED_MODULE_0__["default"]
  };
  /* send conversion to goole when somoennsignus up */

  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_SignUpModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'onready', function (vnode) {
    console.log("New signup!");
    gtag_report_conversion();
  });
});

/***/ }),

/***/ "./src/forum/pages/AdkHomepage.js":
/*!****************************************!*\
  !*** ./src/forum/pages/AdkHomepage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdkHomepage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BlogCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogCategories */ "./src/forum/components/BlogCategories.js");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/tooltip */ "./src/forum/utils/tooltip.js");
/* harmony import */ var _components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LanguageDropdown/LanguageDropdown */ "./src/forum/components/LanguageDropdown/LanguageDropdown.js");
/* harmony import */ var _components_ForumNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ForumNav */ "./src/forum/components/ForumNav.js");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_9__);











var AdkHomepage = /*#__PURE__*/function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AdkHomepage, _Page);

  function AdkHomepage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = AdkHomepage.prototype;

  _proto.oninit = function oninit(vnode) {
    _Page.prototype.oninit.call(this, vnode);

    app.setTitle(app.translator.trans("v17development-flarum-blog.forum.blog"));
    this.bodyClass = "BlogOverviewPage";
    this.isLoading = true;
    this.featuredPosts = [];
    this.posts = [];
    this.discussions = [];
    this.hasMore = null;
    this.isLoadingMore = false;
    this.languages = app.store.all("discussion-languages");
    this.currentSelectedLanguage = m.route.param("lang") ? m.route.param("lang") : app.translator.locale; // Send history push

    app.history.push("adkhome");
    this.loadBlogOverview();
  } // Load blog overview
  ;

  _proto.loadBlogOverview = function loadBlogOverview() {
    var preloadBlogOverview = app.preloadedApiDocument();

    if (preloadBlogOverview) {
      // We must wrap this in a setTimeout because if we are mounting this
      // component for the first time on page load, then any calls to m.redraw
      // will be ineffective and thus any configs (scroll code) will be run
      // before stuff is drawn to the page.
      setTimeout(this.reloadData.bind(this, preloadBlogOverview), 0);
    } else {
      this.reloadData();
    }

    m.redraw();
  };

  _proto.reloadData = function reloadData() {
    var _this = this;

    var q = "is:blog" + (m.route.param("slug") ? " tag:" + m.route.param("slug") : "");

    if (this.languages !== null && this.languages.length >= 1) {
      q += " language:" + this.currentSelectedLanguage;
    }

    app.store.find("discussions", {
      filter: {
        q: q
      },
      sort: "-createdAt",
      limit: 3
    }).then(function (blogs) {
      //save the blogs off, then grab discussions
      _this.featuredPosts = blogs.slice(0, 3);
      app.store.find("discussions", {
        sort: "-lastPostedAt",
        include: "lastPost"
      }).then(_this.show.bind(_this))["catch"](function () {
        m.redraw();
      });
    })["catch"](function () {
      m.redraw();
    });
  } // Show blog posts
  ;

  _proto.show = function show(articles) {
    if (articles.length === 0) {
      this.isLoading = false;
      m.redraw();
      return;
    } // Set pagination


    this.hasMore = articles.payload.links && articles.payload.links.next ? articles.payload.links.next : null;
    this.posts = articles;
    this.isLoading = false;
    m.redraw();
  } // Load more blog posts
  ;

  _proto.loadMore = function loadMore() {
    var _this2 = this;

    this.isLoadingMore = true;
    app.store.find(this.hasMore.replace(app.forum.attribute("apiUrl"), "")).then(function (data) {
      data.map(function (article) {
        return _this2.posts.push(article);
      }); // Update hasmore button

      _this2.hasMore = data.payload.links && data.payload.links.next ? data.payload.links.next : null;
    })["catch"](function () {}).then(function () {
      _this2.isLoadingMore = false;
      m.redraw();
    });
  };

  _proto.title = function title() {
    if (!m.route.param("slug")) {
      return m("h2", null, app.translator.trans("v17development-flarum-blog.forum.recent_posts"));
    }

    var tag = app.store.all("tags").filter(function (tag) {
      return tag.slug() === m.route.param("slug");
    });
    return m("h2", null, tag && tag[0] && tag[0].name(), m("small", null, " ", "-", " ", m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: app.route("blog")
    }, app.translator.trans("v17development-flarum-blog.forum.return_to_overview"))));
  };

  _proto.view = function view() {
    var _this3 = this;

    var defaultImage = app.forum.attribute("blogDefaultImage") ? "url(" + (app.forum.attribute("baseUrl") + "/assets/" + app.forum.attribute("blogDefaultImage")) + ")" : null;
    return m("div", {
      className: "FlarumBlogOverview"
    }, m("div", {
      className: "container"
    }, m("div", {
      className: "BlogFeatured"
    }, m("div", {
      className: "BlogOverviewButtons"
    }, this.languages !== null && this.languages.length >= 1 && m(_components_LanguageDropdown_LanguageDropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
      selected: this.currentSelectedLanguage,
      onclick: function onclick(language) {
        _this3.currentSelectedLanguage = language;
        m.route.set(document.location.pathname, {
          lang: language
        });

        _this3.reloadData();
      }
    })), this.title(), m("div", {
      style: {
        clear: "both"
      }
    }), m("div", {
      className: "BlogFeatured-list"
    }, this.isLoading && [0, 1, 2].map(function () {
      return m("div", {
        className: "BlogFeatured-list-item BlogFeatured-list-item-ghost"
      }, m("div", {
        className: "BlogFeatured-list-item-details"
      }, m("h4", null, "\xA0"), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-wave"
      })))));
    }), !this.isLoading && this.featuredPosts.length >= 0 && this.featuredPosts.map(function (article) {
      var blogImage = article.blogMeta() && article.blogMeta().featuredImage() ? "url(" + article.blogMeta().featuredImage() + ")" : defaultImage;
      var blogTag = article.tags() ? article.tags().filter(function (tag) {
        return tag.isChild();
      }) : [];
      return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: app.route("blogArticle", {
          id: "" + article.slug()
        }),
        className: "BlogFeatured-list-item FlarumBlog-default-image",
        style: {
          backgroundImage: blogImage
        }
      }, m("div", {
        className: "BlogFeatured-list-item-top"
      }, blogTag[0] && m("span", null, blogTag[0].name()), article.isSticky() && m("span", null, m("i", {
        className: "fas fa-thumbtack"
      })), (article.blogMeta() && article.blogMeta().isPendingReview() == true || article.isHidden()) && m("span", null, m("i", {
        className: "fas fa-eye-slash"
      })), article.blogMeta() && article.blogMeta().isPendingReview() == true && m("span", {
        title: app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),
        config: _utils_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this3),
        "data-placement": "bottom"
      }, m("i", {
        className: "far fa-clock"
      }), " ", app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review_title"))), m("div", {
        className: "BlogFeatured-list-item-details"
      }, m("h4", null, article.title()), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(article.createdAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.user() ? article.user().displayName() : "[Deleted]"), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount() - 1))));
    }))), m("div", {
      className: "BlogScrubber"
    }, m("div", {
      className: "BlogList"
    }, m("h2", null, app.translator.trans("adkhomepage.forum.recent_posts")), this.isLoading && [false, false, true, false].map(function (state) {
      return m("div", {
        className: "BlogList-item BlogList-item-" + (state === true ? "sized" : "default") + " BlogList-item-ghost"
      }, m("div", {
        className: "BlogList-item-photo FlarumBlog-default-image"
      }), m("div", {
        className: "BlogList-item-content"
      }, m("h4", null, "\xA0"), m("p", null, "\xA0"), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-wave"
      })))));
    }), !this.isLoading && this.posts.length >= 1 && this.posts.map(function (article) {
      var blogImage = article.lastPostedUser().avatarUrl() ? "url(" + article.lastPostedUser().avatarUrl() + ")" : defaultImage;
      var isSized = article.blogMeta() && article.blogMeta().isSized();
      var summary = article.lastPost() && article.lastPost().contentPlain() ? Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_9__["truncate"])(article.lastPost().contentPlain(), 140) : "";
      return m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/d/" + article.slug() + "/" + article.lastPostNumber(),
        className: "BlogList-item BlogList-item-" + (isSized ? "sized" : "default")
      }, m("div", {
        className: "BlogList-item-photo-user FlarumBlog-default-image",
        style: {
          backgroundImage: blogImage,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }
      }), m("div", {
        className: "BlogList-item-content"
      }, m("h4", null, article.title(), (article.blogMeta() && article.blogMeta().isPendingReview() == true || article.isHidden()) && m("i", {
        className: "fas fa-eye-slash"
      }), article.blogMeta() && article.blogMeta().isPendingReview() == true && m("i", {
        className: "far fa-clock",
        title: app.translator.trans("v17development-flarum-blog.forum.review_article.pending_review"),
        config: _utils_tooltip__WEBPACK_IMPORTED_MODULE_6__["default"].bind(_this3)
      })), m("p", null, summary), m("div", {
        className: "data"
      }, m("span", null, m("i", {
        className: "far fa-clock"
      }), " ", flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_3___default()(article.lastPostedAt())), m("span", null, m("i", {
        className: "far fa-user"
      }), " ", article.lastPostedUser() ? article.lastPostedUser().displayName() : "[Deleted]"), m("span", null, m("i", {
        className: "far fa-comment"
      }), " ", article.commentCount() - 1))));
    }), !this.isLoading && this.featuredPosts.length > 0 && this.hasMore === null && m("p", {
      className: "FlarumBlog-reached-end"
    }, app.translator.trans("adkhomepage.forum.no_more_discussions")), !this.isLoading && this.featuredPosts.length === 0 && this.posts.length === 0 && m("p", {
      className: "FlarumBlog-reached-end"
    }, app.translator.trans("v17development-flarum-blog.forum.category_empty")), !this.isLoading && this.hasMore !== null && m("div", {
      className: "FlarumBlog-reached-load-more"
    }, m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "Button",
      onclick: function onclick() {
        return _this3.loadMore();
      },
      icon: "fas fa-chevron-down",
      loading: this.isLoadingMore
    }, app.translator.trans("core.forum.discussion_list.load_more_button")))), m("div", {
      className: "Sidebar"
    }, m(_components_BlogCategories__WEBPACK_IMPORTED_MODULE_4__["default"], null), m(_components_ForumNav__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));
  };

  return AdkHomepage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/utils/tooltip.js":
/*!************************************!*\
  !*** ./src/forum/utils/tooltip.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tooltip; });
function tooltip(element) {
  $(element).tooltip();
}

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/SelectDropdown":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/SelectDropdown']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SelectDropdown'];

/***/ }),

/***/ "flarum/forum/components/SignUpModal":
/*!*********************************************************************!*\
  !*** external "flarum.core.compat['forum/components/SignUpModal']" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/SignUpModal'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map