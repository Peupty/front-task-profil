/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: sans-serif;\\n  background: linear-gradient(#380679, #de6449);\\n  color: #3b5249;\\n  overflow-y: auto;\\n  padding: 3rem 0 0;\\n}\\n\\nh1 {\\n  font-size: 1.3rem;\\n}\\n\\nh2 {\\n  font-size: 1rem;\\n  font-weight: 600;\\n}\\n\\na:hover {\\n  color: #3b5249;\\n}\\n\\n.content {\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.user {\\n  width: 260px;\\n  border-radius: 1.5rem;\\n  background-color: #cccec6;\\n  border: 5px solid #519872;\\n  position: relative;\\n}\\n.user label {\\n  color: #de6449;\\n  margin-bottom: 0.25rem;\\n  font-weight: 700;\\n  font-size: 0.7rem;\\n  font-style: italic;\\n}\\n.user__name {\\n  text-align: center;\\n  color: #3b5249;\\n  padding-top: 4.5rem;\\n}\\n.user__info {\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 3rem;\\n  padding: 1rem 1rem;\\n}\\n.user__info:not(:first-of-type) {\\n  border-top: 1px solid rgba(81, 152, 114, 0.4);\\n}\\n.user__picture {\\n  display: flex;\\n  background-color: #3b5249;\\n  height: 7rem;\\n  width: 7rem;\\n  border-radius: 50%;\\n  overflow: hidden;\\n  border: 5px solid #519872;\\n  position: absolute;\\n  top: 0;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n.user__picture img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n\\n.button {\\n  border: none;\\n  border-radius: 0.75rem;\\n  padding: 1rem;\\n  cursor: pointer;\\n  color: #cccec6;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  min-width: 120px;\\n  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;\\n}\\n.button--light {\\n  background-color: #cccec6;\\n  border: 3px solid #519872;\\n  color: #3b5249;\\n}\\n.button--light:hover {\\n  background-color: #3b5249;\\n  color: #cccec6;\\n  border-color: #3b5249;\\n}\\n\\n.mt-1 {\\n  margin-top: 0.25rem;\\n}\\n\\n.mb-1 {\\n  margin-bottom: 0.25rem;\\n}\\n\\n.ml-1 {\\n  margin-left: 0.25rem;\\n}\\n\\n.mr-1 {\\n  margin-right: 0.25rem;\\n}\\n\\n.mx-1 {\\n  margin-right: 0.25rem;\\n  margin-left: 0.25rem;\\n}\\n\\n.my-1 {\\n  margin-top: 0.25rem;\\n  margin-bottom: 0.25rem;\\n}\\n\\n.mt-2 {\\n  margin-top: 0.5rem;\\n}\\n\\n.mb-2 {\\n  margin-bottom: 0.5rem;\\n}\\n\\n.ml-2 {\\n  margin-left: 0.5rem;\\n}\\n\\n.mr-2 {\\n  margin-right: 0.5rem;\\n}\\n\\n.mx-2 {\\n  margin-right: 0.5rem;\\n  margin-left: 0.5rem;\\n}\\n\\n.my-2 {\\n  margin-top: 0.5rem;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.mt-3 {\\n  margin-top: 0.75rem;\\n}\\n\\n.mb-3 {\\n  margin-bottom: 0.75rem;\\n}\\n\\n.ml-3 {\\n  margin-left: 0.75rem;\\n}\\n\\n.mr-3 {\\n  margin-right: 0.75rem;\\n}\\n\\n.mx-3 {\\n  margin-right: 0.75rem;\\n  margin-left: 0.75rem;\\n}\\n\\n.my-3 {\\n  margin-top: 0.75rem;\\n  margin-bottom: 0.75rem;\\n}\\n\\n.mt-4 {\\n  margin-top: 1rem;\\n}\\n\\n.mb-4 {\\n  margin-bottom: 1rem;\\n}\\n\\n.ml-4 {\\n  margin-left: 1rem;\\n}\\n\\n.mr-4 {\\n  margin-right: 1rem;\\n}\\n\\n.mx-4 {\\n  margin-right: 1rem;\\n  margin-left: 1rem;\\n}\\n\\n.my-4 {\\n  margin-top: 1rem;\\n  margin-bottom: 1rem;\\n}\\n\\n.mt-5 {\\n  margin-top: 1.25rem;\\n}\\n\\n.mb-5 {\\n  margin-bottom: 1.25rem;\\n}\\n\\n.ml-5 {\\n  margin-left: 1.25rem;\\n}\\n\\n.mr-5 {\\n  margin-right: 1.25rem;\\n}\\n\\n.mx-5 {\\n  margin-right: 1.25rem;\\n  margin-left: 1.25rem;\\n}\\n\\n.my-5 {\\n  margin-top: 1.25rem;\\n  margin-bottom: 1.25rem;\\n}\\n\\n.mt-6 {\\n  margin-top: 1.5rem;\\n}\\n\\n.mb-6 {\\n  margin-bottom: 1.5rem;\\n}\\n\\n.ml-6 {\\n  margin-left: 1.5rem;\\n}\\n\\n.mr-6 {\\n  margin-right: 1.5rem;\\n}\\n\\n.mx-6 {\\n  margin-right: 1.5rem;\\n  margin-left: 1.5rem;\\n}\\n\\n.my-6 {\\n  margin-top: 1.5rem;\\n  margin-bottom: 1.5rem;\\n}\\n\\n.mt-7 {\\n  margin-top: 1.75rem;\\n}\\n\\n.mb-7 {\\n  margin-bottom: 1.75rem;\\n}\\n\\n.ml-7 {\\n  margin-left: 1.75rem;\\n}\\n\\n.mr-7 {\\n  margin-right: 1.75rem;\\n}\\n\\n.mx-7 {\\n  margin-right: 1.75rem;\\n  margin-left: 1.75rem;\\n}\\n\\n.my-7 {\\n  margin-top: 1.75rem;\\n  margin-bottom: 1.75rem;\\n}\\n\\n.mt-8 {\\n  margin-top: 2rem;\\n}\\n\\n.mb-8 {\\n  margin-bottom: 2rem;\\n}\\n\\n.ml-8 {\\n  margin-left: 2rem;\\n}\\n\\n.mr-8 {\\n  margin-right: 2rem;\\n}\\n\\n.mx-8 {\\n  margin-right: 2rem;\\n  margin-left: 2rem;\\n}\\n\\n.my-8 {\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.mt-9 {\\n  margin-top: 2.25rem;\\n}\\n\\n.mb-9 {\\n  margin-bottom: 2.25rem;\\n}\\n\\n.ml-9 {\\n  margin-left: 2.25rem;\\n}\\n\\n.mr-9 {\\n  margin-right: 2.25rem;\\n}\\n\\n.mx-9 {\\n  margin-right: 2.25rem;\\n  margin-left: 2.25rem;\\n}\\n\\n.my-9 {\\n  margin-top: 2.25rem;\\n  margin-bottom: 2.25rem;\\n}\\n\\n.mt-10 {\\n  margin-top: 2.5rem;\\n}\\n\\n.mb-10 {\\n  margin-bottom: 2.5rem;\\n}\\n\\n.ml-10 {\\n  margin-left: 2.5rem;\\n}\\n\\n.mr-10 {\\n  margin-right: 2.5rem;\\n}\\n\\n.mx-10 {\\n  margin-right: 2.5rem;\\n  margin-left: 2.5rem;\\n}\\n\\n.my-10 {\\n  margin-top: 2.5rem;\\n  margin-bottom: 2.5rem;\\n}\\n\\n.mt-11 {\\n  margin-top: 2.75rem;\\n}\\n\\n.mb-11 {\\n  margin-bottom: 2.75rem;\\n}\\n\\n.ml-11 {\\n  margin-left: 2.75rem;\\n}\\n\\n.mr-11 {\\n  margin-right: 2.75rem;\\n}\\n\\n.mx-11 {\\n  margin-right: 2.75rem;\\n  margin-left: 2.75rem;\\n}\\n\\n.my-11 {\\n  margin-top: 2.75rem;\\n  margin-bottom: 2.75rem;\\n}\\n\\n.mt-12 {\\n  margin-top: 3rem;\\n}\\n\\n.mb-12 {\\n  margin-bottom: 3rem;\\n}\\n\\n.ml-12 {\\n  margin-left: 3rem;\\n}\\n\\n.mr-12 {\\n  margin-right: 3rem;\\n}\\n\\n.mx-12 {\\n  margin-right: 3rem;\\n  margin-left: 3rem;\\n}\\n\\n.my-12 {\\n  margin-top: 3rem;\\n  margin-bottom: 3rem;\\n}\\n\\n.text--green {\\n  color: #519872;\\n}\\n\\n.text--orange {\\n  color: #de6449;\\n}\\n\\n.text--light {\\n  color: #cccec6;\\n}\\n\\n.text--violet {\\n  color: #380679;\\n}\\n\\n.text--dark {\\n  color: #3b5249;\\n}\\n\\n.hidden {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/styles/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/scss/main.scss":
/*!***********************************!*\
  !*** ./src/styles/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/styles/scss/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_renderUserCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/renderUserCard */ \"./src/js/renderUserCard.js\");\n/* harmony import */ var _styles_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scss/main.scss */ \"./src/styles/scss/main.scss\");\n/* harmony import */ var _js_UserManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/UserManager */ \"./src/js/UserManager.js\");\n/* harmony import */ var _js_UserFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/UserFormatter */ \"./src/js/UserFormatter.js\");\n/* harmony import */ var _js_fetchUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/fetchUser */ \"./src/js/fetchUser.js\");\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n\n\n\n\n\n\n\n(() => {\n  const userManager = new _js_UserManager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  const loadUserButton = document.querySelector(\"#generate-user\");\n  const hideAddressCheckbox = document.querySelector(\"#hide-address\");\n\n  const defaultOptions = {\n    name: true,\n    picture: true,\n    registered: true,\n    nat: true,\n    location: !hideAddressCheckbox.checked || false,\n  };\n\n  const onButtonClick = async (e) => {\n    const optionsUrl = (0,_js_fetchUser__WEBPACK_IMPORTED_MODULE_4__.createOptionsUrl)(defaultOptions);\n    const user = await (0,_js_fetchUser__WEBPACK_IMPORTED_MODULE_4__.fetchUser)((0,_js_fetchUser__WEBPACK_IMPORTED_MODULE_4__.createRequestUrl)(optionsUrl), () =>\n      alert(\"Error has occured\")\n    );\n\n    (0,_js_utils__WEBPACK_IMPORTED_MODULE_5__.toggleElement)(\n      document.querySelector(\"#user-address\").closest(\".user__info\"),\n      !defaultOptions.location\n    );\n\n    (0,_js_renderUserCard__WEBPACK_IMPORTED_MODULE_0__.renderUserCard)(\n      _js_UserFormatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].cardFormat(user),\n      document.querySelector(\"#user\")\n    );\n    userManager.addUser(_js_UserFormatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tableFormat(user));\n  };\n\n  loadUserButton.addEventListener(\"click\", onButtonClick);\n  hideAddressCheckbox.addEventListener(\"change\", (e) => {\n    defaultOptions.location = !e.target.checked;\n  });\n})();\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/index.js?");

/***/ }),

/***/ "./src/js/UserFormatter.js":
/*!*********************************!*\
  !*** ./src/js/UserFormatter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserFormatter),\n/* harmony export */   \"formatDate\": () => (/* binding */ formatDate)\n/* harmony export */ });\nclass UserFormatter {\n  static cardFormat(user) {\n    return {\n      name: formatName(user.name),\n      registered: formatDate(new Date(user.registered.date)),\n      picture: user.picture.large,\n      nat: user.nat,\n      address: formatAddress(user),\n    };\n  }\n\n  static tableFormat({ name, registered, nat }) {\n    return {\n      name,\n      registered: registered.date,\n      nat,\n    };\n  }\n}\n\nconst formatDate = (date) => {\n  const day = date.getDate();\n  const month = date.getMonth() + 1;\n  const year = date.getFullYear();\n\n  return [day, month, year].map(addZero).join(\"-\");\n};\n\nconst formatName = ({ first, last }) => `${first} ${last}`;\n\nconst formatAddress = ({ location }) => {\n  if (!location) return \"\";\n  const { street, city, country } = location;\n  return `${street.number} ${street.name}, ${city}, ${country}`;\n};\n\nconst addZero = (x) => {\n  return String(x).length < 2 ? `0${x}` : x;\n};\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/js/UserFormatter.js?");

/***/ }),

/***/ "./src/js/UserManager.js":
/*!*******************************!*\
  !*** ./src/js/UserManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UserManager)\n/* harmony export */ });\nclass UserManager {\n  constructor() {\n    this.users = this.getUsers();\n  }\n\n  getUsers() {\n    const usersJson = localStorage.getItem(\"users\");\n    return usersJson ? JSON.parse(usersJson): [];\n  }\n\n  _saveUsers() {\n    localStorage.setItem(\"users\", JSON.stringify(this.users));\n  }\n\n  addUser(user) {\n    this.getUsers();\n\n    if (this.users.length < 10) {\n      this.users.push(user);\n    } else {\n      this.users.pop();\n      this.users.unshift(user);\n    }\n\n    this._saveUsers();\n  }\n}\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/js/UserManager.js?");

/***/ }),

/***/ "./src/js/fetchUser.js":
/*!*****************************!*\
  !*** ./src/js/fetchUser.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createOptionsUrl\": () => (/* binding */ createOptionsUrl),\n/* harmony export */   \"createRequestUrl\": () => (/* binding */ createRequestUrl),\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser)\n/* harmony export */ });\nconst fetchUser = async (url, onError) => {\n  try {\n    const response = await fetch(url);\n    const { results } = await response.json();\n    const [user] = results;\n    return user;\n  } catch (error) {\n    onError();\n  }\n};\n\nconst createOptionsUrl = (options) =>\n  Object.entries(options)\n    .filter(([field, value]) => value)\n    .map(([field]) => field)\n    .join(\",\");\n\nconst createRequestUrl = (options) =>\n  `https://randomuser.me/api/?inc=${options}`;\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/js/fetchUser.js?");

/***/ }),

/***/ "./src/js/renderUserCard.js":
/*!**********************************!*\
  !*** ./src/js/renderUserCard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderUserCard\": () => (/* binding */ renderUserCard)\n/* harmony export */ });\nconst renderUserCard = (user, srcEl) => {\n  const nameTextNode = document.createTextNode(user.name);\n  const imgEl = document.createElement(\"img\");\n  imgEl.src = user.picture;\n  const nationalityTextNode = document.createTextNode(user.nat);\n  const addressTextNode = document.createTextNode(user.address);\n  const registeredDateTextNode = document.createTextNode(user.registered);\n  srcEl.querySelector(\"#user-name\").replaceChildren(nameTextNode);\n  srcEl.querySelector(\"#user-picture\").replaceChildren(imgEl);\n  srcEl\n    .querySelector(\"#user-registered\")\n    .replaceChildren(registeredDateTextNode);\n  srcEl.querySelector(\"#user-nationality\").replaceChildren(nationalityTextNode);\n  srcEl.querySelector(\"#user-address\").replaceChildren(addressTextNode);\n};\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/js/renderUserCard.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleElement\": () => (/* binding */ toggleElement)\n/* harmony export */ });\nconst toggleElement = (element, value) => {\n  element.classList.toggle(\"hidden\", value);\n};\n\n\n//# sourceURL=webpack://recruitment-task-frontend-intership-main/./src/js/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;