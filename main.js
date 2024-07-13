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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n/* harmony import */ var _js_TicketService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/TicketService */ \"./src/js/TicketService.js\");\n\n\n\n\n//# sourceURL=webpack://ahj/./src/index.js?");

/***/ }),

/***/ "./src/js/HelpDesk.js":
/*!****************************!*\
  !*** ./src/js/HelpDesk.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HelpDesk)\n/* harmony export */ });\n/* harmony import */ var _TicketService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TicketService */ \"./src/js/TicketService.js\");\n/* harmony import */ var _api_createRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/createRequest */ \"./src/js/api/createRequest.js\");\n/* harmony import */ var _TicketView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TicketView */ \"./src/js/TicketView.js\");\n/* harmony import */ var _TicketForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TicketForm */ \"./src/js/TicketForm.js\");\n\n\n\n\n/**\n *  Основной класс приложения\n * */\nclass HelpDesk {\n  constructor(container) {\n    if (!(container instanceof HTMLElement)) {\n      throw new Error(\"This is not HTML element!\");\n    }\n    this.container = container;\n    this.ticketService = new _TicketService__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ticketForm = new _TicketForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  }\n  init() {\n    this.container.innerHTML = `<input  class=\"add_ticket\" type=\"button\" value=\"Добавить Тикет\">`;\n    this.renderTickets();\n    this.addDecriptionListener();\n    this.showModalFormListener();\n    this.createTicketListener();\n    this.showModalDeleteFormListener();\n    this.showModalEditeFormListener();\n    this.deleteTicketListener();\n    this.editeTicketListener();\n    this.closeModalDeleteFormListener();\n    this.closeModalFormListener();\n    this.closeModalEditFormListener();\n  }\n  addDecriptionListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('ticket_cont')) {\n        if (event.target.classList.contains('ticket_cont_active')) {\n          event.target.classList.remove('ticket_cont_active');\n          this.container.querySelector('.description').remove();\n          return;\n        }\n        this.ticketService.get(event.target.dataset.id, _api_createRequest__WEBPACK_IMPORTED_MODULE_1__.createGetRequest).then(data => {\n          event.target.classList.add('ticket_cont_active');\n          event.target.insertAdjacentHTML(\"afterend\", new _TicketView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data).createHTMLDescription());\n        });\n      }\n    });\n  }\n  showModalFormListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('add_ticket')) {\n        this.container.innerHTML += this.ticketForm.createHTML();\n      }\n    });\n  }\n  createTicketListener() {\n    this.container.addEventListener(\"click\", event => {\n      event.preventDefault();\n      if (event.target.classList.contains('modal_ok_btn')) {\n        const formName = this.container.querySelector('.modal_name').value;\n        const formDescription = this.container.querySelector('.modal_description').value;\n        const formObj = {\n          name: formName,\n          description: formDescription\n        };\n        this.ticketService.create(JSON.stringify(formObj), _api_createRequest__WEBPACK_IMPORTED_MODULE_1__.createPostRequest).then(data => {\n          this.container.innerHTML += new _TicketView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](data).createHTML();\n          this.container.querySelector('.modal_window').remove();\n        });\n      }\n    });\n  }\n  showModalDeleteFormListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('ticket_delete')) {\n        this.container.innerHTML += this.ticketForm.createHTMLDeleteForm();\n        this.ticketId = event.target.closest('.ticket_cont').dataset.id;\n        this.deleteTicetApi();\n      }\n    });\n  }\n  closeModalDeleteFormListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('modal_delete_cancel')) {\n        this.container.querySelector('.modal_delete_window').remove();\n      }\n    });\n  }\n  closeModalFormListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('modal_cancel')) {\n        this.container.querySelector('.modal_window').remove();\n      }\n    });\n  }\n  closeModalEditFormListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('edit_modal_cancel')) {\n        this.container.querySelector('.edit_modal_window').remove();\n      }\n    });\n  }\n  showModalEditeFormListener() {\n    this.container.addEventListener(\"click\", event => {\n      if (event.target.classList.contains('ticket_pen')) {\n        this.container.innerHTML += this.ticketForm.createEditHTML();\n        this.ticketId = event.target.closest('.ticket_cont').dataset.id;\n      }\n    });\n  }\n  editeTicketListener() {\n    this.container.addEventListener(\"click\", event => {\n      event.preventDefault();\n      if (event.target.classList.contains('edit_modal_ok_btn')) {\n        const formName = this.container.querySelector('.edit_modal_name').value;\n        const formDescription = this.container.querySelector('.edit_modal_description').value;\n        const formObj = {\n          name: formName,\n          description: formDescription\n        };\n        this.ticketService.update(this.ticketId, JSON.stringify(formObj), _api_createRequest__WEBPACK_IMPORTED_MODULE_1__.createPostRequest).then(data => {\n          this.container.innerHTML = `<input  class=\"add_ticket\" type=\"button\" value=\"Добавить Тикет\">`;\n          data.forEach(ticket => {\n            this.container.innerHTML += new _TicketView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ticket).createHTML();\n          });\n        });\n      }\n    });\n  }\n  deleteTicetApi() {\n    this.ticketService.delete(this.ticketId, _api_createRequest__WEBPACK_IMPORTED_MODULE_1__.createGetRequest).then(() => {\n      this.deleted = true;\n    });\n  }\n  deleteTicketListener() {\n    this.container.addEventListener(\"click\", event => {\n      event.preventDefault();\n      if (event.target.classList.contains('modal_delete_ok_btn')) {\n        this.container.innerHTML = `<input  class=\"add_ticket\" type=\"button\" value=\"Добавить Тикет\">`;\n        this.renderTickets();\n        this.deleted = false;\n      }\n    });\n  }\n  renderTickets() {\n    this.ticketService.list(_api_createRequest__WEBPACK_IMPORTED_MODULE_1__.createGetRequest).then(data => {\n      data.forEach(ticket => {\n        this.container.innerHTML += new _TicketView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ticket).createHTML();\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack://ahj/./src/js/HelpDesk.js?");

/***/ }),

/***/ "./src/js/TicketForm.js":
/*!******************************!*\
  !*** ./src/js/TicketForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TicketForm)\n/* harmony export */ });\n/**\n *  Класс для создания формы создания нового тикета\n * */\nclass TicketForm {\n  constructor() {}\n  createHTML() {\n    return `\n    <form class=\"modal_window\" >\n      <div class=\"short_description\">Краткое описание</div>\n      <input class=\"modal_name\" type=\"text\"></input>\n      <div class=\"full_description\">Подробное описание</div>\n      <input class=\"modal_description\" type=\"text\"></input>\n      <input type=\"button\"  value=\"ok\" class=\"modal_ok_btn\"></input>\n      <input type=\"button\" value=\"cancel\" class=\"modal_cancel\"></input>\n    </form>\n    `;\n  }\n  createEditHTML() {\n    return `\n    <form class=\"edit_modal_window\" >\n      <div class=\"edit_short_description\">Краткое описание</div>\n      <input class=\"edit_modal_name\" type=\"text\"></input>\n      <div class=\"edit_full_description\">Подробное описание</div>\n      <input class=\"edit_modal_description\" type=\"text\"></input>\n      <input type=\"submit\"  value=\"ok\" class=\"edit_modal_ok_btn\"></input>\n      <input type=\"button\" value=\"cancel\" class=\"edit_modal_cancel\"></input>\n    </form>\n    `;\n  }\n  createHTMLDeleteForm() {\n    return `\n    <div class=\"modal_delete_window\" >\n      <div class=\"modal_delete_description\">Вы действительлно хотите удалить тикет?</div>\n      <input type=\"submit\"  value=\"ok\" class=\"modal_delete_ok_btn\"></input>\n      <input type=\"button\" value=\"cancel\" class=\"modal_delete_cancel\"></input>\n    </div>\n    `;\n  }\n}\n\n//# sourceURL=webpack://ahj/./src/js/TicketForm.js?");

/***/ }),

/***/ "./src/js/TicketService.js":
/*!*********************************!*\
  !*** ./src/js/TicketService.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TicketService)\n/* harmony export */ });\n/**\n *  Класс для связи с сервером.\n *  Содержит методы для отправки запросов на сервер и получения ответов\n * */\nclass TicketService {\n  static URL = \"http://localhost:7070/\";\n  constructor() {}\n  list(callback) {\n    return callback({\n      url: TicketService.URL,\n      method: \"?method=allTickets\"\n    });\n  }\n  get(id, callback) {\n    return callback({\n      url: TicketService.URL,\n      method: `?method=ticketById&id=${id}`\n    });\n  }\n  create(data, callback) {\n    return callback({\n      url: TicketService.URL,\n      method: `?method=createTicket`,\n      body: data\n    });\n  }\n  update(id, data, callback) {\n    return callback({\n      url: TicketService.URL,\n      method: `?method=updateById&id=${id}`,\n      body: data\n    });\n  }\n  delete(id, callback) {\n    return callback({\n      url: TicketService.URL,\n      method: `?method=deleteById&id=${id}`\n    });\n  }\n}\n\n//# sourceURL=webpack://ahj/./src/js/TicketService.js?");

/***/ }),

/***/ "./src/js/TicketView.js":
/*!******************************!*\
  !*** ./src/js/TicketView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TicketView)\n/* harmony export */ });\n/**\n *  Класс для отображения тикетов на странице.\n *  Он содержит методы для генерации разметки тикета.\n * */\n\nclass TicketView {\n  constructor(ticket) {\n    this.ticket = ticket;\n  }\n  createHTML() {\n    return `\n    <div class=\"ticket_cont\"  data-id=\"${this.ticket.id}\">\n      <input type=\"checkbox\"  />\n      <div class=\"ticket_name\">${this.ticket.name}</div>\n      <div class=\"ticket_created\">${new Date().toLocaleString(this.ticket.created)}</div>\n      <button class=\"ticket_pen\">edit</button>\n      <button class=\"ticket_delete\">delete</button>\n    </div>\n    `;\n  }\n  createHTMLDescription() {\n    return `\n    <div class=\"description\">\n      ${this.ticket.description}\n    </div>\n    `;\n  }\n}\n\n//# sourceURL=webpack://ahj/./src/js/TicketView.js?");

/***/ }),

/***/ "./src/js/api/createRequest.js":
/*!*************************************!*\
  !*** ./src/js/api/createRequest.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGetRequest\": () => (/* binding */ createGetRequest),\n/* harmony export */   \"createPostRequest\": () => (/* binding */ createPostRequest)\n/* harmony export */ });\nconst createGetRequest = async (options = {}) => {\n  const data = await fetch(options.url + options.method, {\n    method: 'GET',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8'\n    }\n  });\n  const response = await data.json();\n  return response;\n};\nconst createPostRequest = async (options = {}) => {\n  const data = await fetch(options.url + options.method, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json;charset=utf-8'\n    },\n    body: options.body\n  });\n  const response = await data.json();\n  return response;\n};\n\n//# sourceURL=webpack://ahj/./src/js/api/createRequest.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HelpDesk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpDesk */ \"./src/js/HelpDesk.js\");\n/* harmony import */ var _TicketService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TicketService */ \"./src/js/TicketService.js\");\n\n\nconst root = document.getElementById('root');\nconst app = new _HelpDesk__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\napp.init();\n\n//# sourceURL=webpack://ahj/./src/js/app.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ahj/./src/css/main.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;