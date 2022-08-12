"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

/***/ 470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(547);
/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







function Drawer(props) {
    const { 0: dateStart , 1: setDateStart  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const { 0: dateEnd , 1: setDateEnd  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setDateStart(props.projectSelectData?.start.getFullYear() + "-" + String(props.projectSelectData?.start.getMonth() + 1).padStart(2, "0") + "-" + String(props.projectSelectData?.start.getDate()).padStart(2, "0"));
        setDateEnd(props.projectSelectData?.end.getFullYear() + "-" + String(props.projectSelectData?.end.getMonth() + 1).padStart(2, "0") + "-" + String(props.projectSelectData?.end.getDate()).padStart(2, "0"));
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-4 bg-white ",
        style: {
            zIndex: "999",
            position: "absolute",
            width: "100%",
            backgroundColor: "#FFFFFF",
            right: "0px",
            top: "0px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row py-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiBorderAll, {}),
                                " Create content"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn btn-primary px-3 py-2",
                            style: {
                                height: "40px",
                                borderRadius: "10px",
                                fontSize: "12px"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegCheckSquare, {
                                        size: 20,
                                        style: {
                                            marginTop: "-2px",
                                            marginRight: "6px"
                                        }
                                    }),
                                    " ",
                                    "Create content"
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "inputName",
                        style: {
                            position: "absolute",
                            fontSize: "13px",
                            marginTop: "4px",
                            marginLeft: "16px",
                            color: "#666666"
                        },
                        children: "Select project"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                        id: "inputName",
                        className: "form-select form-select-lg",
                        "aria-label": ".form-select-lg example",
                        style: {
                            backgroundColor: "#fafafb",
                            border: "none",
                            borderBottom: "1px solid #666666",
                            borderRadius: "0px",
                            paddingTop: "25px",
                            fontSize: "14px",
                            fontWeight: "bold"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            defaultValue: props.data?.title,
                            children: props.data?.title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    className: "form-control-plaintext border-bottom p-3",
                    id: "staticEmail2",
                    placeholder: "Topic name",
                    style: {
                        backgroundColor: "#fafafb"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row form-group gx-3 p-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "date",
                            className: "form-control p-3 border-bottom",
                            style: {
                                backgroundColor: "#fafafb",
                                border: "none",
                                borderRadius: "0px"
                            },
                            defaultValue: dateStart
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "date",
                            className: "form-control p-3 border-bottom",
                            style: {
                                backgroundColor: "#fafafb",
                                border: "none",
                                borderRadius: "0px"
                            },
                            defaultValue: dateEnd
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    className: "form-control-plaintext border-bottom p-3",
                    id: "staticEmail",
                    placeholder: "Key message",
                    style: {
                        backgroundColor: "#fafafb"
                    }
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-group p-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    className: "form-control-plaintext border-bottom p-3",
                    id: "staticEmail2",
                    placeholder: "Description",
                    style: {
                        backgroundColor: "#fafafb"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-2 px-2 py-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "py-2",
                        style: {
                            fontSize: "13px",
                            color: "#666666"
                        },
                        children: "Content format"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn border-primary text-primary w-100 p-2",
                            style: {
                                borderRadius: "10px",
                                fontSize: "13px",
                                fontWeight: "bold"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsImage, {
                                    size: 20,
                                    style: {
                                        marginRight: "5px"
                                    }
                                }),
                                " Image"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn text-secondary w-100 p-2",
                            style: {
                                borderRadius: "10px",
                                border: "1px solid #dedede",
                                fontSize: "13px",
                                fontWeight: "bold"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_1__.BsPlayBtn, {
                                    size: 20,
                                    style: {
                                        marginRight: "5px"
                                    }
                                }),
                                " Video"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn text-secondary w-100 p-2",
                            style: {
                                borderRadius: "10px",
                                border: "1px solid #dedede",
                                fontSize: "13px",
                                fontWeight: "bold"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_2__.HiOutlineDocument, {
                                    size: 20,
                                    style: {
                                        marginRight: "5px"
                                    }
                                }),
                                " Writing"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row gx-2 px-2 py-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "py-2",
                        style: {
                            fontSize: "13px",
                            color: "#666666"
                        },
                        children: "Post type"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn border-primary text-primary w-100 p-2",
                            style: {
                                borderRadius: "10px",
                                fontSize: "13px",
                                fontWeight: "bold"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaArrowUp, {
                                    size: 20,
                                    style: {
                                        marginRight: "5px"
                                    }
                                }),
                                " Boost post"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "btn text-secondary w-100 text-nowrap p-2",
                            style: {
                                borderRadius: "10px",
                                border: "1px solid #dedede",
                                fontSize: "13px",
                                fontWeight: "bold"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_gr__WEBPACK_IMPORTED_MODULE_4__.GrTextAlignFull, {
                                    size: 20,
                                    style: {
                                        marginRight: "5px"
                                    }
                                }),
                                " Non-boost post"
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col"
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;