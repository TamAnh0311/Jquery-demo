/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/authMiddlewares.js":
/*!***********************************!*\
  !*** ./src/js/authMiddlewares.js ***!
  \***********************************/
/***/ (() => {

eval("document.onreadystatechange = function (e) {\r\n    localStorage.setItem('currentURL', window.location.href)\r\n    if (!localStorage.getItem('accessToken')) {\r\n        try {\r\n            window.stop();\r\n        }\r\n        catch (e) {\r\n            document.execCommand('Stop');\r\n        }\r\n        document.location.replace(\"/login.html\");\r\n    }\r\n};\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/authMiddlewares.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/authMiddlewares.js"]();
/******/ 	
/******/ })()
;