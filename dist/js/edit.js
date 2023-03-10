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

/***/ "./src/js/baseApi.js":
/*!***************************!*\
  !*** ./src/js/baseApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseApiAsync\": () => (/* binding */ baseApiAsync)\n/* harmony export */ });\nconst API_ROOT = \"http://localhost:8080\"\r\n\r\nfunction baseApiAsync(method, endpoint, payload = null) {\r\n    const data = JSON.stringify(payload)\r\n    return $.ajax({\r\n        method,\r\n        url: API_ROOT + endpoint,\r\n        data,\r\n        beforeSend: function (xhr) {\r\n            const token = localStorage.getItem('accessToken')\r\n            xhr.setRequestHeader('Authorization', token)\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/baseApi.js?");

/***/ }),

/***/ "./src/js/taskApi.js":
/*!***************************!*\
  !*** ./src/js/taskApi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"getTaskById\": () => (/* binding */ getTaskById),\n/* harmony export */   \"getTasks\": () => (/* binding */ getTasks),\n/* harmony export */   \"updateTask\": () => (/* binding */ updateTask),\n/* harmony export */   \"updateTaskStatus\": () => (/* binding */ updateTaskStatus)\n/* harmony export */ });\n/* harmony import */ var _baseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseApi */ \"./src/js/baseApi.js\");\n\r\n\r\nconst TASK = \"/tasks\"\r\n\r\n\r\nfunction taskApi(method,  data = null, id = \"\") {\r\n    const endpoint = id.length ? TASK + \"/\" + id : TASK\r\n    return (0,_baseApi__WEBPACK_IMPORTED_MODULE_0__.baseApiAsync)(method, endpoint, data)\r\n}\r\n\r\nfunction getTasks() {\r\n    return taskApi(\"GET\")\r\n}\r\n\r\nfunction getTaskById(id) {\r\n    return taskApi(\"GET\", null, id)\r\n} \r\n\r\nfunction createTask(task) {\r\n    return taskApi(\"POST\", task)\r\n}\r\n\r\nfunction updateTask(task) {\r\n    console.log(1);\r\n    return taskApi(\"PUT\", task, task.id)\r\n}\r\n\r\nfunction deleteTask(id) {\r\n    return taskApi(\"DELETE\", null, id)\r\n}\r\n\r\nfunction updateTaskStatus(task) {\r\n    return taskApi(\"PUT\", taskIdByQuery(task.id), {\r\n        task\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/taskApi.js?");

/***/ }),

/***/ "./src/js/validate.js":
/*!****************************!*\
  !*** ./src/js/validate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValidData\": () => (/* binding */ isValidData)\n/* harmony export */ });\nfunction isValidData() {\r\n    let isValid = true;\r\n    \r\n    const openDiv = '<div id=\"name-error\" class=\"error text-danger font-weight-light font-italic mt-1\">';\r\n    const closeDiv = '</div>';\r\n\r\n    $('.error').remove();\r\n\r\n    const nameElement = $('#name')\r\n    if (nameElement.val() === '') {\r\n        isValid = false;\r\n        nameElement.after(openDiv + 'Task name erquired' + closeDiv)\r\n    }\r\n\r\n    return isValid;\r\n}\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/js/validate.js?");

/***/ }),

/***/ "./src/pages/edit.js":
/*!***************************!*\
  !*** ./src/pages/edit.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_taskApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/taskApi */ \"./src/js/taskApi.js\");\n/* harmony import */ var _js_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/validate */ \"./src/js/validate.js\");\n\r\n\r\n\r\nconst userId = getIdQueryParam();\r\nconst taskStatus = 1\r\n\r\n$(async function () {\r\n  const res = await (0,_js_taskApi__WEBPACK_IMPORTED_MODULE_0__.getTaskById)(userId);\r\n\r\n  renderContent(res.data);\r\n\r\n  setEvent(\"#btn-save\", \"click\", onUpdateTask)\r\n\r\n});\r\n\r\nfunction getIdQueryParam() {\r\n  const urlParams = new URLSearchParams(window.location.search);\r\n  return urlParams.get(\"id\");\r\n}\r\n\r\nfunction renderContent(task) {\r\n  if (task) {\r\n    $(\"#name\").val(task.name);\r\n    $(\"#description\").val(task.description);\r\n  } else {\r\n    $(\"#form\").html(\"Task not exist!\");\r\n    $(\"#btn-save\").hide();\r\n  }\r\n}\r\n\r\nasync function onUpdateTask() {\r\n  if ((0,_js_validate__WEBPACK_IMPORTED_MODULE_1__.isValidData)()) {\r\n    const task = {\r\n      id: userId,\r\n      name: $(\"#name\").val(),\r\n      description: $(\"#description\").val(),\r\n      status: 1\r\n    };\r\n\r\n\r\n    await (0,_js_taskApi__WEBPACK_IMPORTED_MODULE_0__.updateTask)(task);\r\n    window.location.href = \"/\";\r\n  }\r\n}\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/pages/edit.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/edit.js");
/******/ 	
/******/ })()
;