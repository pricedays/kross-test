"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(911);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(470);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);












const Drawer = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(null, {
    loadableGenerated: {
        modules: [
            "calendar\\calendar.js -> " + "react-modern-drawer"
        ]
    },
    ssr: false
});
const localizer = (0,react_big_calendar__WEBPACK_IMPORTED_MODULE_3__.momentLocalizer)((moment__WEBPACK_IMPORTED_MODULE_8___default()));
function App(props) {
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: monthSelect , 1: setMonthSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: yearSelect , 1: setYearSelect  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const { 0: myEventsList , 1: setMyEventsList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: projectSelectData , 1: setProjectSelectData  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const eventListURL = "./api/eventlist";
        axios__WEBPACK_IMPORTED_MODULE_1___default().get(eventListURL).then((response)=>{
            response.data.map((item)=>{
                item.title = "#" + item.id + " " + item.title;
            });
            setMyEventsList(response.data);
        }).catch((error)=>{
            console.log(error);
        });
    }, []);
    const toggleDrawer = ()=>{
        setIsOpen((prevState)=>!prevState);
    };
    const handleSelectSlot = (event)=>{
        setIsOpen(true);
        let data = {
            start: event.start,
            end: event.end
        };
        setProjectSelectData(data);
    };
    const eventStyleGetter = ()=>{
        var style = {
            backgroundColor: "#ed3592",
            boxShadow: "0px 0px 10px #999999",
            borderRadius: "5px",
            margin: "3px 0px",
            color: "#ffffff",
            border: "0px",
            display: "block",
            fontSize: "12px",
            padding: "0px",
            overflow: "hidden"
        };
        return {
            style: style
        };
    };
    const calendarStyle = ()=>{
        var styles = {
            backgroundColor: "#ffffff",
            cursor: "pointer"
        };
        return {
            style: styles
        };
    };
    const HeaderCellContent = (event)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                fontSize: "13px",
                padding: "12px",
                color: "#686874"
            },
            children: event.label
        });
    };
    const CustomToolbar = (toolbar)=>{
        const date = moment__WEBPACK_IMPORTED_MODULE_8___default()(toolbar.date);
        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
            setMonthSelect(date.format("M"));
            setYearSelect(date.format("YYYY"));
        }, [
            date
        ]);
        const label = ()=>{
            const date = moment__WEBPACK_IMPORTED_MODULE_8___default()(toolbar.date);
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "#0a99f0"
                        },
                        children: date.format("MMMM")
                    }),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "#666671"
                        },
                        children: date.format("YYYY")
                    })
                ]
            });
        };
        const goToBack = ()=>{
            toolbar.date.setMonth(toolbar.date.getMonth() - 1);
            toolbar.onNavigate("prev");
        };
        const goToNext = ()=>{
            toolbar.date.setMonth(toolbar.date.getMonth() + 1);
            toolbar.onNavigate("next");
        };
        const goToCurrent = ()=>{
            const now = new Date();
            toolbar.date.setMonth(now.getMonth());
            toolbar.date.setYear(now.getFullYear());
            toolbar.onNavigate("current");
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container w-100 ",
            style: {
                width: "100%",
                backgroundColor: "#f5f9fd"
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row px-1 py-2 w-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto align-middle py-1",
                        children: label()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row gx-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn text-secondary px-2 bg-white",
                                        style: {
                                            lineHeight: "0em",
                                            border: "1px solid #dedede"
                                        },
                                        onClick: ()=>{
                                            goToBack();
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoChevronLeft, {
                                                size: 20
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn text-secondary px-2 bg-white",
                                        style: {
                                            lineHeight: "0em",
                                            border: "1px solid #dedede"
                                        },
                                        onClick: ()=>{
                                            goToNext();
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_4__.GoChevronRight, {
                                                size: 20
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                        className: "btn text-secondary px-2 py-1 bg-white font-weight-bold ",
                                        style: {
                                            textAlign: "left",
                                            minWidth: "150px",
                                            lineHeight: "0em",
                                            border: "1px solid #dedede"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                            children: "Month"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-auto",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "btn text-secondary px-2 py-1 bg-white",
                                        style: {
                                            border: "1px solid #dedede"
                                        },
                                        onClick: ()=>{
                                            goToCurrent();
                                        },
                                        children: "Today"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    const EventComponent = ({ event  })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-auto h-100",
                        style: {
                            padding: "3px 10px",
                            textAlign: "center",
                            backgroundColor: "#8d4469"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "P"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col ",
                        style: {
                            padding: "3px 10px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        },
                        children: event.title
                    })
                ]
            })
        });
    };
    const formats = {
        dateFormat: (date, culture, localizer)=>localizer.format(date, "D", culture),
        weekdayFormat: (date, culture, localizer)=>{
            return localizer.format(date, "ddd", culture).toUpperCase();
        }
    };
    const dateCellWrapper = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(({ range , value , children  })=>{
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: value.getMonth() + 1 == monthSelect ? {
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                cursor: "pointer"
            } : {
                width: "100%",
                backgroundColor: "#f5f9fd",
                cursor: "pointer"
            },
            children: children
        });
    }, [
        monthSelect
    ]);
    const DateHeaderComponent = ({ date , label  })=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDate() == new Date(date).getFullYear() + "-" + new Date(date).getMonth() + "-" + new Date(date).getDate() ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    fontSize: "14px",
                    padding: "4px 0px",
                    borderRadius: "50%",
                    width: "29px",
                    height: "29px",
                    margin: "6px 6px",
                    textAlign: "center",
                    color: "#ffffff",
                    backgroundColor: "#0093ee"
                },
                children: label
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    fontSize: "14px",
                    padding: "4px 0px",
                    borderRadius: "50%",
                    width: "29px",
                    height: "29px",
                    margin: "6px 6px",
                    textAlign: "center",
                    color: "#454552"
                },
                children: label
            })
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container border-bottom p-0 m-0 position-relative w-100 h-100",
                style: {
                    overflowY: "auto"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row py-1 px-0 mt-1 mx-0 overflow-hidden w-100",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto px-3 py-0 text-center border-right ",
                                style: {
                                    borderRight: "1px solid #e1e1e1",
                                    color: "#212529",
                                    justifyContent: "center",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                    children: "Content"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col d-inline p-0 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container ",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row w-100 gx-1 position-relative",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-auto d-inline p-1",
                                                children: [
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        className: "btn border-primary text-primary px-3 py-1",
                                                        style: {
                                                            height: "35px",
                                                            borderRadius: "10px",
                                                            fontSize: "15px"
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsCalendar4Range, {
                                                                    size: 18,
                                                                    style: {
                                                                        marginTop: "-4px",
                                                                        marginRight: "5px"
                                                                    }
                                                                }),
                                                                " ",
                                                                "Calendar"
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto d-inline p-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "btn text-secondary px-3 py-1",
                                                    style: {
                                                        height: "35px",
                                                        borderRadius: "10px",
                                                        fontSize: "15px",
                                                        border: "1px solid #dedede"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                        style: {
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineViewBoards, {
                                                                size: 24,
                                                                style: {
                                                                    marginTop: "-2px",
                                                                    marginRight: "5px"
                                                                }
                                                            }),
                                                            " ",
                                                            "Board"
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-auto gx-1 px-3 py-0 m-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "container m-0 p-0 ",
                                    style: {
                                        justifyContent: "center",
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "row m-0 p-0 ",
                                        style: {
                                            justifyContent: "center",
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto d-inline m-0 px-1 py-0",
                                                style: {
                                                    justifyContent: "center",
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: " btn text-primary ",
                                                    style: {
                                                        height: "40px",
                                                        borderRadius: "10px",
                                                        fontSize: "12px",
                                                        alignItem: "center"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineClipboardCheck, {
                                                                    size: 23,
                                                                    style: {
                                                                        marginTop: "-4px",
                                                                        marginRight: "10px"
                                                                    }
                                                                }),
                                                                "Submit for review"
                                                            ]
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "col-auto m-0 px-1 py-0",
                                                style: {
                                                    justifyContent: "center",
                                                    display: "flex",
                                                    alignItems: "center"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: " btn btn-primary px-4 py-2",
                                                    style: {
                                                        height: "40px",
                                                        borderRadius: "10px",
                                                        fontSize: "12px"
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsPlusLg, {
                                                                size: 15,
                                                                style: {
                                                                    marginTop: "-2px",
                                                                    marginRight: "10px"
                                                                }
                                                            }),
                                                            " ",
                                                            "Create content"
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row w-100 h-100 m-0 p-0 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-100 p-0 m-0",
                            style: {
                                position: "relative",
                                overflow: "hidden"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_big_calendar__WEBPACK_IMPORTED_MODULE_3__.Calendar, {
                                formats: formats,
                                localizer: localizer,
                                events: myEventsList,
                                startAccessor: "start",
                                endAccessor: "end",
                                style: {
                                    height: "100%"
                                },
                                onSelectSlot: handleSelectSlot,
                                selectable: true,
                                eventPropGetter: eventStyleGetter,
                                dayPropGetter: calendarStyle,
                                components: {
                                    dateCellWrapper: dateCellWrapper,
                                    event: EventComponent,
                                    toolbar: CustomToolbar,
                                    month: {
                                        header: HeaderCellContent,
                                        dateHeader: DateHeaderComponent
                                    }
                                }
                            })
                        })
                    })
                ]
            }),
            " ",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Drawer, {
                open: isOpen,
                onClose: toggleDrawer,
                direction: "right",
                style: {
                    position: "absolute",
                    width: "70%"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    projectSelectData: projectSelectData,
                    data: props.data
                })
            }),
            " "
        ]
    });
};


/***/ })

};
;