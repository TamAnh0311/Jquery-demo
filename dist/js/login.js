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

/***/ "./src/js/authApi.js":
/*!***************************!*\
  !*** ./src/js/authApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseApi */ \"./src/js/baseApi.js\");\n\r\nconst url = \"/login\"\r\n\r\nasync function login(payload) {\r\n    const res = await (0,_baseApi__WEBPACK_IMPORTED_MODULE_0__.baseApiAsync)('POST', url, payload)\r\n    localStorage.setItem(\"accessToken\", res)\r\n}\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/authApi.js?");

/***/ }),

/***/ "./src/js/baseApi.js":
/*!***************************!*\
  !*** ./src/js/baseApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseApiAsync\": () => (/* binding */ baseApiAsync)\n/* harmony export */ });\nconst API_ROOT = \"http://localhost:8080\"\r\n\r\nfunction baseApiAsync(method, endpoint, payload = null) {\r\n    const data = JSON.stringify(payload)\r\n    return $.ajax({\r\n        method,\r\n        url: API_ROOT + endpoint,\r\n        data,\r\n        beforeSend: function (xhr) {\r\n            const token = localStorage.getItem('accessToken')\r\n            xhr.setRequestHeader('Authorization', token)\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/baseApi.js?");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setEvent\": () => (/* binding */ setEvent)\n/* harmony export */ });\nfunction setEvent(element, event, action) {\r\n   document.querySelector(element).addEventListener(event, action)\r\n}\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/common.js?");

/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValidData\": () => (/* binding */ isValidData)\n/* harmony export */ });\nfunction isValidData() {\r\n    let isValid = true;\r\n    \r\n    const openDiv = '<div id=\"name-error\" class=\"error text-danger font-weight-light font-italic mt-1\">';\r\n    const closeDiv = '</div>';\r\n\r\n    $('.error').remove();\r\n\r\n    const nameElement = $('#name')\r\n    if (nameElement.val() === '') {\r\n        isValid = false;\r\n        nameElement.after(openDiv + 'Task name erquired' + closeDiv)\r\n    }\r\n\r\n    return isValid;\r\n}\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/validate.js?");

/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/validate */ \"./src/js/validate.js\");\n/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/common */ \"./src/js/common.js\");\n/* harmony import */ var _js_authApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/authApi */ \"./src/js/authApi.js\");\n\r\n\r\n\r\n\r\n$(document).ready(function () {\r\n\r\n  console.log(1,localStorage)\r\n\r\n  ;(0,_js_common__WEBPACK_IMPORTED_MODULE_1__.setEvent)(\"#login-btn\", \"click\", onLogin)\r\n  \r\n  async function onLogin() {\r\n      if ((0,_js_validate__WEBPACK_IMPORTED_MODULE_0__.isValidData)()) {\r\n        const payload = {\r\n          email: $(\"#email\").val(),\r\n          password: $(\"#password\").val(),\r\n        };\r\n        await (0,_js_authApi__WEBPACK_IMPORTED_MODULE_2__.login)(payload);\r\n        window.location.href = localStorage.getItem('currentURL')\r\n      }\r\n    }\r\n})\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/pages/login.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/login.js");
/******/ 	
/******/ })()
;