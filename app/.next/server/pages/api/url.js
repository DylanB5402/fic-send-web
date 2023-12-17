"use strict";
(() => {
var exports = {};
exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 814:
/***/ ((module) => {

module.exports = import("ws");;

/***/ }),

/***/ 413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(814);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ws__WEBPACK_IMPORTED_MODULE_0__]);
ws__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const urlSenderWs = new ws__WEBPACK_IMPORTED_MODULE_0__["default"]("ws://localhost:8765");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlSenderWs);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 552:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _common_UrlSender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_UrlSender__WEBPACK_IMPORTED_MODULE_0__]);
_common_UrlSender__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
    if (req.method == "POST") {
        const url = req.body.url;
        try {
            _common_UrlSender__WEBPACK_IMPORTED_MODULE_0__/* ["default"].send */ .Z.send(url);
            res.status(200).json({
                urlAccepted: true,
                url: url
            });
        } catch  {
            res.status(200).json({
                urlAccepted: false,
                url: undefined
            });
        }
    } else {
        res.status(200).json({
            urlAccepted: false,
            url: undefined
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(552));
module.exports = __webpack_exports__;

})();