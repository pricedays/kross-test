"use strict";
(() => {
var exports = {};
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ eventList)
/* harmony export */ });
function eventList(req, res) {
    res.status(200).json([
        {
            id: 1,
            title: "topic AAA",
            project_id: 1,
            start: "2022-08-06 00:00:00",
            end: "2022-08-06 00:00:00"
        },
        {
            id: 2,
            title: "topic BBB",
            project_id: 1,
            start: "2022-08-14 00:00:00",
            end: "2022-08-14 00:00:00"
        }, 
    ]);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(599));
module.exports = __webpack_exports__;

})();