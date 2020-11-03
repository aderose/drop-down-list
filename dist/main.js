/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dropDownMenu.js":
/*!*****************************!*\
  !*** ./src/dropDownMenu.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItem */ \"./src/menuItem.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function dropDownMenu() {\n  function create({ parent, options }) {\n    const container = document.createElement('ul');\n    container.setAttribute('class', 'menu-container');\n    options.forEach((option) => {\n      container.appendChild(_menuItem__WEBPACK_IMPORTED_MODULE_0__.default.create(option).container);\n    });\n    parent.appendChild(container);\n\n    function show() {\n      if (container.classList.contains('active')) return;\n      container.classList.add('visible');\n      setTimeout(() => {\n        container.classList.remove('visible');\n        container.classList.add('active');\n      }, 300);\n    }\n\n    function hide() {\n      if (!container.classList.contains('active')) return;\n      container.classList.add('hide');\n      setTimeout(() => {\n        container.classList.remove('hide');\n        container.classList.remove('active');\n      }, 300);\n    }\n\n    return { container, show, hide };\n  }\n\n  return { create };\n})());\n\n\n//# sourceURL=webpack://dropdown-list/./src/dropDownMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menuManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuManager */ \"./src/menuManager.js\");\n\n\n_menuManager__WEBPACK_IMPORTED_MODULE_0__.default.createMenu({\n  parentSelector: '#categories',\n  initialiserSelector: '#categories button',\n  options: [\n    { text: 'Computers', href: '#' },\n    { text: 'Laptops', href: '#' },\n    { text: 'Tablets', href: '#' },\n    { text: 'Mobile Phones', href: '#' },\n    { text: 'Software', href: '#' },\n  ],\n});\n\n_menuManager__WEBPACK_IMPORTED_MODULE_0__.default.createMenu({\n  parentSelector: '#products',\n  initialiserSelector: '#products button',\n  options: [\n    { text: 'SuperComputer', href: '#' },\n    { text: 'PaperThin Laptop', href: '#' },\n    { text: 'The Tab', href: '#' },\n    { text: 'Magic Phone', href: '#' },\n    { text: 'Auto-Programmer', href: '#' },\n  ],\n});\n\n_menuManager__WEBPACK_IMPORTED_MODULE_0__.default.createMenu({\n  parentSelector: 'header nav',\n  initialiserSelector: '#hamburger',\n  options: [\n    { text: 'Home', href: '#' },\n    { text: 'Categories', href: '#' },\n    { text: 'Products', href: '#' },\n    { text: 'About Us', href: '#' },\n    { text: 'Contact', href: '#' },\n  ],\n});\n\n\n//# sourceURL=webpack://dropdown-list/./src/index.js?");

/***/ }),

/***/ "./src/menuItem.js":
/*!*************************!*\
  !*** ./src/menuItem.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function menuItem() {\n  function create({ text, href }) {\n    // create the link tag\n    const link = document.createElement('a');\n    link.setAttribute('href', href);\n    link.setAttribute('class', 'menu-link');\n    link.textContent = text;\n\n    // create the item container and append the link\n    const container = document.createElement('li');\n    container.setAttribute('class', 'link-container');\n    container.appendChild(link);\n\n    return {\n      container,\n      link,\n    };\n  }\n\n  return { create };\n})());\n\n\n//# sourceURL=webpack://dropdown-list/./src/menuItem.js?");

/***/ }),

/***/ "./src/menuManager.js":
/*!****************************!*\
  !*** ./src/menuManager.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropDownMenu */ \"./src/dropDownMenu.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function menuManager() {\n  function createMenu({ parentSelector, initialiserSelector, options }) {\n    const parent = document.querySelector(parentSelector);\n    const button = document.querySelector(initialiserSelector);\n    const menu = _dropDownMenu__WEBPACK_IMPORTED_MODULE_0__.default.create({ parent, options });\n\n    // show the menu when the initialiser button is selected\n    button.addEventListener('click', () => menu.show());\n\n    // hide the menu if anything else is selected\n    window.addEventListener('click', (e) => {\n      if (!e.target.matches(initialiserSelector)) menu.hide();\n    });\n\n    return menu;\n  }\n\n  return { createMenu };\n})());\n\n\n//# sourceURL=webpack://dropdown-list/./src/menuManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;