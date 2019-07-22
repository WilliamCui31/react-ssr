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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/style.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/style.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: aliceblue;\\n}\\n\\n._3oYHbkAcd6WmJcBeX_qgGn {\\n  display: flex;\\n  padding: 40px;\\n}\\n\\n._3oYHbkAcd6WmJcBeX_qgGn a {\\n  display: inline-block;\\n  padding: 10px 40px;\\n  text-decoration: none;\\n}\\n\\n._3oYHbkAcd6WmJcBeX_qgGn a._1gTJMIbDPD_Pj3AUvklC2x {\\n  border-bottom: 1px solid green;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"header\": \"_3oYHbkAcd6WmJcBeX_qgGn\",\n\t\"active\": \"_1gTJMIbDPD_Pj3AUvklC2x\"\n};\n\n//# sourceURL=webpack:///./src/components/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/views/Home/style.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/views/Home/style.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"ul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\n._1P1B6jWk_ZYMJEVahdsxyZ {\\n  text-align: center;\\n}\\n\\n.jor1Dip0hYsYyc1kxq6jC {\\n  display: flex;\\n  padding: 40px;\\n}\\n\\n._2mIVtqPBdCyCtFZ25Dh6TU {\\n  flex: 0 0 200px;\\n  margin-right: 40px;\\n}\\n._2mIVtqPBdCyCtFZ25Dh6TU li {\\n  margin-bottom: 10px;\\n}\\n._2mIVtqPBdCyCtFZ25Dh6TU label {\\n  display: block;\\n  font-size: 14px;\\n  color: #999;\\n}\\n._2mIVtqPBdCyCtFZ25Dh6TU input {\\n  width: 100%;\\n  height: 32px;\\n  padding: 5px;\\n  outline: none;\\n  line-height: 32px;\\n  border-radius: 4px;\\n  border: 1px solid #ededed;\\n}\\n._2mIVtqPBdCyCtFZ25Dh6TU input:focus {\\n  border-color: green;\\n}\\n._2mIVtqPBdCyCtFZ25Dh6TU button {\\n  width: 100%;\\n  height: 34px;\\n  margin-top: 20px;\\n  outline: none;\\n  line-height: 34px;\\n  text-align: center;\\n  border-radius: 4px;\\n  border: 1px solid #ededed;\\n}\\n._2mIVtqPBdCyCtFZ25Dh6TU button:active {\\n  color: #fff;\\n  background-color: green;\\n}\\n\\n.qpyqbRD_Y082mjGqi895I {\\n  flex: 1 1 auto;\\n  border-top: 1px solid #ededed;\\n}\\n.qpyqbRD_Y082mjGqi895I li {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px;\\n  border-bottom: 1px solid #ededed;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"count\": \"_1P1B6jWk_ZYMJEVahdsxyZ\",\n\t\"products\": \"jor1Dip0hYsYyc1kxq6jC\",\n\t\"create\": \"_2mIVtqPBdCyCtFZ25Dh6TU\",\n\t\"list\": \"qpyqbRD_Y082mjGqi895I\"\n};\n\n//# sourceURL=webpack:///./src/views/Home/style.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props), Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(props.route.routes));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: '/'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../withStyles */ \"./src/withStyles.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/components/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.header\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    exact: true,\n    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,\n    to: '/'\n  }, \"\\u9996\\u9875\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,\n    to: '/login'\n  }, \"\\u767B\\u9646\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"NavLink\"], {\n    activeClassName: _style_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,\n    to: '/404'\n  }, \"\\u627E\\u4E0D\\u5230\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_withStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Header, _style_css__WEBPACK_IMPORTED_MODULE_3___default.a));\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ }),

/***/ "./src/components/style.css":
/*!**********************************!*\
  !*** ./src/components/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/components/style.css\");\n    var insertCss = __webpack_require__(/*! ../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/style.css?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/Home */ \"./src/views/Home/index.js\");\n/* harmony import */ var _views_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Login */ \"./src/views/Login.js\");\n/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/NotFound */ \"./src/views/NotFound.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  component: _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  routes: [{\n    path: '/',\n    component: _views_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    exact: true,\n    loadData: _views_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadData\n  }, {\n    path: '/login',\n    component: _views_Login__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    exact: true\n  }, {\n    path: '*',\n    component: _views_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n}]);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ \"./src/server/proxy.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_4___default()('public')); //静态文件服务\n\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default()()); // 解析 body 到 ctx.request.body\n\napp.use(Object(_proxy__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('/api', 'http://localhost:3000')); // /api 开头的请求转发到 http://localhost:3000\n\napp.use(_render__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // 首屏渲染\n\napp.listen(3001); // 启动服务并监听3001端口\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/proxy.js":
/*!*****************************!*\
  !*** ./src/server/proxy.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return proxy; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction proxy(pattern, address) {\n  var request = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({\n    baseURL: address\n  });\n  return (\n    /*#__PURE__*/\n    function () {\n      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx, next) {\n        var method, config, _ref2, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!new RegExp(\"^\".concat(pattern)).test(ctx.path)) {\n                  _context.next = 12;\n                  break;\n                }\n\n                method = ctx.method.toLowerCase();\n                config = {\n                  method: method,\n                  url: ctx.url\n                };\n\n                if (ctx.request.body) {\n                  config.data = ctx.request.body;\n                }\n\n                _context.next = 6;\n                return request(config);\n\n              case 6:\n                _ref2 = _context.sent;\n                data = _ref2.data;\n                ctx.response.type = 'application/json; charset=utf-8';\n                ctx.response.body = data;\n                _context.next = 14;\n                break;\n\n              case 12:\n                _context.next = 14;\n                return next();\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x, _x2) {\n        return _ref.apply(this, arguments);\n      };\n    }()\n  );\n}\n\n//# sourceURL=webpack:///./src/server/proxy.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ \"./src/store.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {\n    var store, matchedRoutes, promises, context, content, cssStr, helmet;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            store = Object(_store__WEBPACK_IMPORTED_MODULE_9__[\"getStore\"])(); // 根据路由的路径，来往store里面加数据\n\n            matchedRoutes = Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"matchRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"], ctx.path);\n            promises = [];\n            matchedRoutes.forEach(function (item) {\n              if (item.route.loadData) {\n                var promise = new Promise(function (resolve, reject) {\n                  item.route.loadData(store).then(resolve).catch(resolve);\n                });\n                promises.push(promise);\n              }\n            });\n            _context.next = 6;\n            return Promise.all(promises);\n\n          case 6:\n            context = {\n              css: []\n            };\n            content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n              store: store\n            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n              location: ctx.path,\n              context: context\n            }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]))));\n            cssStr = context.css.length ? context.css.join('\\n') : '';\n            helmet = react_helmet__WEBPACK_IMPORTED_MODULE_7__[\"Helmet\"].renderStatic();\n            ctx.body = \"\\n  <html>\\n    <head>\\n      \".concat(helmet.title.toString(), \"\\n      \").concat(helmet.meta.toString(), \"\\n      <style>\").concat(cssStr, \"</style>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\").concat(content, \"</div>\\n      <script>\\n        window.context = {\\n          state: \").concat(JSON.stringify(store.getState()), \"\\n        }\\n      </script>\\n      <script src=\\\"/index.js\\\"></script>\\n    </body>\\n  </html>\\n \");\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n})());\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({\n  baseURL: 'http://localhost:3000'\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: getStore, getClientStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStore\", function() { return getStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getClientStore\", function() { return getClientStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home/store */ \"./src/views/Home/store/index.js\");\n/* harmony import */ var _client_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/request */ \"./src/client/request.js\");\n/* harmony import */ var _server_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/request */ \"./src/server/request.js\");\n\n\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  home: _views_Home_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\nvar getStore = function getStore() {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_server_request__WEBPACK_IMPORTED_MODULE_4__[\"default\"])));\n};\nvar getClientStore = function getClientStore() {\n  var defaultState = window.context ? window.context.state : {};\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, defaultState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(_client_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])));\n};\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ }),

/***/ "./src/views/Home/index.js":
/*!*********************************!*\
  !*** ./src/views/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/actions */ \"./src/views/Home/store/actions.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/views/Home/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../withStyles */ \"./src/withStyles.js\");\n\n\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  var list = _ref.list,\n      getProducts = _ref.getProducts,\n      deleteProduct = _ref.deleteProduct,\n      createProduct = _ref.createProduct;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      name = _useState4[0],\n      setName = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      manufacturer = _useState6[0],\n      setManufacturer = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),\n      price = _useState8[0],\n      setPrice = _useState8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!list.length) {\n      getProducts();\n    }\n  }, []);\n\n  var handleCreate = function handleCreate() {\n    if (!name) return alert('请输入商品名称');\n    if (!manufacturer) return alert('请输入生产厂商');\n    if (!price) return alert('请输入商品价格');\n    createProduct({\n      name: name,\n      manufacturer: manufacturer,\n      price: price\n    });\n    setName('');\n    setManufacturer('');\n    setPrice('');\n  };\n\n  var handleDelete = function handleDelete(productId) {\n    return deleteProduct(productId);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.content\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4__[\"Helmet\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"meta\", {\n    charSet: \"utf-8\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"title\", null, \"React SSR - \\u8FD9\\u662F\\u9996\\u9875\\u6807\\u9898\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"meta\", {\n    name: \"description\",\n    content: \"\\u8FD9\\u662FWilliamCui\\u7684\\u9879\\u76EE\\uFF0C\\u7528\\u6765\\u5B66\\u4E60\\u6D4B\\u901Freact SSR\\u6280\\u672F\\u7684\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.count\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"You are clicked \", count, \" times.\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"Click me\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.products\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.create\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"name\"\n  }, \"Name\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"name\",\n    value: name,\n    onChange: function onChange(e) {\n      return setName(e.target.value);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"manufacturer\"\n  }, \"Manufacturer\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"manufacturer\",\n    value: manufacturer,\n    onChange: function onChange(e) {\n      return setManufacturer(e.target.value);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"label\", {\n    htmlFor: \"price\"\n  }, \"Price\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"price\",\n    value: price,\n    onChange: function onChange(e) {\n      return setPrice(e.target.value);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: handleCreate\n  }, \"Create\"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", {\n    className: _style_css__WEBPACK_IMPORTED_MODULE_5___default.a.list\n  }, list.map(function (_ref2) {\n    var id = _ref2.id,\n        name = _ref2.name,\n        price = _ref2.price;\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", {\n      key: id\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", null, name, \"-\", price), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n      onClick: function onClick() {\n        return handleDelete(id);\n      }\n    }, \"delete\"));\n  }))));\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    list: state.home.newList\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getProducts: function getProducts() {\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getProducts\"])());\n    },\n    deleteProduct: function deleteProduct(productId) {\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"deleteProduct\"])(productId));\n    },\n    createProduct: function createProduct(_ref3) {\n      var name = _ref3.name,\n          manufacturer = _ref3.manufacturer,\n          price = _ref3.price;\n      return dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"createProduct\"])({\n        name: name,\n        manufacturer: manufacturer,\n        price: price\n      }));\n    }\n  };\n};\n\nvar exportHome = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Object(_withStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Home, _style_css__WEBPACK_IMPORTED_MODULE_5___default.a));\n\nexportHome.loadData = function (store) {\n  return store.dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_3__[\"getProducts\"])());\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (exportHome);\n\n//# sourceURL=webpack:///./src/views/Home/index.js?");

/***/ }),

/***/ "./src/views/Home/store/actions.js":
/*!*****************************************!*\
  !*** ./src/views/Home/store/actions.js ***!
  \*****************************************/
/*! exports provided: getProducts, createProduct, deleteProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProducts\", function() { return getProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProduct\", function() { return createProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProduct\", function() { return deleteProduct; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/views/Home/store/constants.js\");\n\n\nvar changeList = function changeList(list) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_0__[\"CHANGE_LIST\"],\n    payload: {\n      list: list\n    }\n  };\n};\n\nvar getProducts = function getProducts() {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.get('/api/products').then(function (res) {\n      var list = res.data.products;\n      dispatch(changeList(list));\n    });\n  };\n};\nvar createProduct = function createProduct(_ref) {\n  var name = _ref.name,\n      manufacturer = _ref.manufacturer,\n      price = _ref.price;\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.post('/api/products', {\n      name: name,\n      manufacturer: manufacturer,\n      price: price\n    }).then(function (p) {\n      return p && dispatch(getProducts());\n    });\n  };\n};\nvar deleteProduct = function deleteProduct(productId) {\n  return function (dispatch, getState, axiosInstance) {\n    return axiosInstance.delete(\"/api/products/\".concat(productId)).then(function (destroyStatus) {\n      return destroyStatus && dispatch(getProducts());\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/views/Home/store/actions.js?");

/***/ }),

/***/ "./src/views/Home/store/constants.js":
/*!*******************************************!*\
  !*** ./src/views/Home/store/constants.js ***!
  \*******************************************/
/*! exports provided: CHANGE_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CHANGE_LIST\", function() { return CHANGE_LIST; });\nvar CHANGE_LIST = \"HOME/CHANGE_LIST\";\n\n//# sourceURL=webpack:///./src/views/Home/store/constants.js?");

/***/ }),

/***/ "./src/views/Home/store/index.js":
/*!***************************************!*\
  !*** ./src/views/Home/store/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/views/Home/store/constants.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar defaultState = {\n  name: 'WilliamCui',\n  newList: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_1__[\"CHANGE_LIST\"]:\n      return _objectSpread({}, state, {\n        newList: payload.list\n      });\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/views/Home/store/index.js?");

/***/ }),

/***/ "./src/views/Home/style.css":
/*!**********************************!*\
  !*** ./src/views/Home/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/views/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/views/Home/style.css?");

/***/ }),

/***/ "./src/views/Login.js":
/*!****************************!*\
  !*** ./src/views/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Login = function Login() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      name = _useState2[0],\n      setName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var handleLogin = function handleLogin() {\n    console.log(name, password);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"name\",\n    value: name,\n    onChange: function onChange(e) {\n      return setName(e.target.value);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"password\",\n    value: password,\n    onChange: function onChange(e) {\n      return setPassword(e.target.value);\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    onClick: handleLogin\n  }, \"\\u767B\\u5F55\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/views/Login.js?");

/***/ }),

/***/ "./src/views/NotFound.js":
/*!*******************************!*\
  !*** ./src/views/NotFound.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NotFound = function NotFound() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"404\\uFF0Cthis page is not found.\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);\n\n//# sourceURL=webpack:///./src/views/NotFound.js?");

/***/ }),

/***/ "./src/withStyles.js":
/*!***************************!*\
  !*** ./src/withStyles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction withStyles(DecoratedComponent, styles) {\n  return (\n    /*#__PURE__*/\n    function (_PureComponent) {\n      _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WithStyles, _PureComponent);\n\n      function WithStyles() {\n        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, WithStyles);\n\n        return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(WithStyles).apply(this, arguments));\n      }\n\n      _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(WithStyles, [{\n        key: \"componentWillMount\",\n        value: function componentWillMount() {\n          var staticContext = this.props.staticContext;\n\n          if (staticContext) {\n            staticContext.css.push(styles._getCss());\n          }\n        }\n      }, {\n        key: \"render\",\n        value: function render() {\n          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(DecoratedComponent, this.props);\n        }\n      }]);\n\n      return WithStyles;\n    }(react__WEBPACK_IMPORTED_MODULE_5__[\"PureComponent\"])\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (withStyles);\n\n//# sourceURL=webpack:///./src/withStyles.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/createClass%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/getPrototypeOf\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/getPrototypeOf%22?");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/inherits%22?");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-bodyparser\");\n\n//# sourceURL=webpack:///external_%22koa-bodyparser%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });