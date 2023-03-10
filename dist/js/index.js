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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_taskApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/taskApi */ \"./src/js/taskApi.js\");\n\r\n\r\n$(document).ready(function () {\r\n    $(function () {\r\n        prepareData()\r\n    });\r\n\r\n    async function prepareData() {\r\n        const res = await (0,_js_taskApi__WEBPACK_IMPORTED_MODULE_0__.getTasks)();\r\n        renderTask(res.data);\r\n    }\r\n\r\n    function process(items, level, element) {\r\n\r\n        $(element).append('<ul></ul>');\r\n        for (var i = 0; i < items.length; i++) {\r\n\r\n            $(element + '> ul').append('<li class=\"' + level + '-' + i + '\"> <img height=\"10\" width=\"10\" style=\"background:' + items[i].color + '\">' + (items[i].label ? items[i].label : items[i].title) + '(' + (items[i].devicename ? items[i].devicename : \"\") + ')' + '<span style=\"float:right\">' + (items[i].objects ? items[i].objects : \"\") + '</span></li>');\r\n            if (items[i].children) {\r\n                process(items[i].children, level + 1, '.' + level + '-' + i);\r\n            }\r\n        }\r\n    }\r\n\r\n    function renderTask(tasks) {\r\n        let htmlContent = \"\"\r\n\r\n        $.map(tasks, function (task) {\r\n            htmlContent += \"<tr id=\" + task.id + \">\" +\r\n                \"<td>\" + task.id + \"</td>\" +\r\n                \"<td>\" + task.name + \"</td>\" +\r\n                \"<td>\" + (task.description || \"No description added\") + \"</td>\" +\r\n                \"<td>\" + (task.status === 1 ? \"New\" : '<i class=\"fa fa-check text-success\"></i>') + \"</td>\" +\r\n                '<td class=\"d-flex justify-content-end\">' +\r\n                '<div style=\"width: 90%\" class=\"d-flex justify-content-between\" >' +\r\n                (task.status === 1 ?\r\n                    '<a href=\"javascript:void(0)\" class=\"text-info btn-done\"><i class=\"fa fa-check\"></i> Done</a>' +\r\n                    '<a href=\"/edit.html?id=' +\r\n                    task.id +\r\n                    '\" class=\"text-info\"><i class=\"fa fa-edit\"></i> Edit</a> ' : '<div></div><div></div>') +\r\n                '<a href=\"javascript:void(0)\" class=\"text-danger btn-delete\"><i class=\"fa fa-trash-alt\"></i>Delete</a>' +\r\n                '</div>' +\r\n                \"</td>\";\r\n        });\r\n\r\n\r\n        $(\"table tbody\").html(htmlContent);\r\n\r\n        $(\"table tbody tr .btn-done\").click(function () {\r\n            const id = $(this).closest('tr').attr('id')\r\n            onCompleteTask(id)\r\n        })\r\n\r\n        $(\"table tbody tr .btn-delete\").click(function () {\r\n            const id = $(this).closest('tr').attr('id')\r\n            onDeleteTask(id)\r\n        })\r\n\r\n\r\n    }\r\n\r\n    async function onDeleteTask(id) {\r\n        await (0,_js_taskApi__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(id)\r\n        prepareData()\r\n    }\r\n\r\n    async function onCompleteTask(id) {\r\n        const TASK_COMPLETE = 2\r\n        await (0,_js_taskApi__WEBPACK_IMPORTED_MODULE_0__.updateTaskStatus)(id, TASK_COMPLETE)\r\n        prepareData()\r\n    }\r\n})\n\n//# sourceURL=webpack://jquery-ajax-example-app/./src/pages/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;