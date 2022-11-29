"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/PrimaryFeatures.jsx":
/*!********************************************!*\
  !*** ./src/components/PrimaryFeatures.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrimaryFeatures\": function() { return /* binding */ PrimaryFeatures; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n/* harmony import */ var _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/background-features.jpg */ \"./src/images/background-features.jpg\");\n/* harmony import */ var _images_screenshots_view_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/images/screenshots/view.png */ \"./src/images/screenshots/view.png\");\n/* harmony import */ var _images_screenshots_apply_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/screenshots/apply.png */ \"./src/images/screenshots/apply.png\");\n/* harmony import */ var _images_screenshots_verify_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/screenshots/verify.png */ \"./src/images/screenshots/verify.png\");\n/* harmony import */ var _images_screenshots_pay_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/images/screenshots/pay.png */ \"./src/images/screenshots/pay.png\");\n/* harmony import */ var _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/images/screenshots/expenses.png */ \"./src/images/screenshots/expenses.png\");\n/* harmony import */ var _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/images/screenshots/payroll.png */ \"./src/images/screenshots/payroll.png\");\n/* harmony import */ var _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/images/screenshots/reporting.png */ \"./src/images/screenshots/reporting.png\");\n/* harmony import */ var _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/images/screenshots/vat-returns.png */ \"./src/images/screenshots/vat-returns.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst features = [\n    {\n        title: \"View\",\n        description: \"Explore a 3D render or book an in-person viewing through the Hamlet app.\",\n        image: _images_screenshots_view_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        title: \"Apply\",\n        description: \"Get pre-approved as a Hamlet resident in less than 5 minutes and submit home applications in 3 clicks.\",\n        image: _images_screenshots_apply_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        title: \"Verify\",\n        description: \"Breeze through Hamlet's best-in-class, in-app identity and income verification.\",\n        image: _images_screenshots_verify_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        title: \"Sign & Pay\",\n        description: \"e-Sign your tenancy agreement, pay your deposit and set up your rent payments from your device.\",\n        image: _images_screenshots_pay_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    }\n];\nfunction PrimaryFeatures() {\n    _s();\n    let [tabOrientation, setTabOrientation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let lgMediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n        function onMediaQueryChange(param) {\n            let { matches  } = param;\n            setTabOrientation(matches ? \"vertical\" : \"horizontal\");\n        }\n        onMediaQueryChange(lgMediaQuery);\n        lgMediaQuery.addEventListener(\"change\", onMediaQueryChange);\n        return ()=>{\n            lgMediaQuery.removeEventListener(\"change\", onMediaQueryChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"residents\",\n        \"aria-label\": \"Features for running your books\",\n        className: \"relative overflow-hidden bg-indigo-600 pt-20 pb-28 sm:py-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]\",\n                src: _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"\",\n                width: 2245,\n                height: 1636,\n                unoptimized: true\n            }, void 0, false, {\n                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-2xl md:mx-auto md:text-center xl:max-w-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl\",\n                                children: \"For residents\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-6 text-lg tracking-tight text-blue-100\",\n                                children: \"View, apply, sign and pay. On your phone. In under 48 hours.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Tab.Group, {\n                        as: \"div\",\n                        className: \"mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0\",\n                        vertical: tabOrientation === \"vertical\",\n                        children: (param)=>/*#__PURE__*/ {\n                            let { selectedIndex  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Tab.List, {\n                                            className: \"relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal\",\n                                            children: features.map((feature, featureIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6\", selectedIndex === featureIndex ? \"bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10\" : \"hover:bg-white/10 lg:hover:bg-white/5\"),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Tab, {\n                                                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"font-display text-lg [&:not(:focus-visible)]:focus:outline-none\", selectedIndex === featureIndex ? \"text-blue-600 lg:text-white\" : \"text-blue-100 hover:text-white lg:text-white\"),\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                        lineNumber: 115,\n                                                                        columnNumber: 27\n                                                                    }, this),\n                                                                    feature.title\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                lineNumber: 107,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 106,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mt-2 hidden text-sm lg:block\", selectedIndex === featureIndex ? \"text-white\" : \"text-blue-100 group-hover:text-white\"),\n                                                            children: feature.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 119,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, feature.title, true, {\n                                                    fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Tab.Panels, {\n                                        className: \"lg:col-span-7\",\n                                        children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_14__.Tab.Panel, {\n                                                unmount: false,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative sm:px-6 lg:hidden\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                lineNumber: 137,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"relative mx-auto max-w-2xl text-base text-white sm:text-center\",\n                                                                children: feature.description\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                lineNumber: 138,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 136,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            className: \"w-full\",\n                                                            src: feature.image,\n                                                            alt: \"\",\n                                                            priority: true,\n                                                            sizes: \"(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 143,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 142,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, feature.title, true, {\n                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                lineNumber: 135,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                        lineNumber: 133,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimaryFeatures, \"PA0UdhBatJoZrK3UQwLJY5ZxHuI=\");\n_c = PrimaryFeatures;\nvar _c;\n$RefreshReg$(_c, \"PrimaryFeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVIsV0FBVTswRUFDVmUsUUFBUTlCLFdBQVc7Ozs7Ozs7Ozs7OztrRUFHeEIsOERBQUNxQjt3REFBSU4sV0FBVTtrRUFDYiw0RUFBQzlCLG1EQUFLQTs0REFDSjhCLFdBQVU7NERBQ1ZDLEtBQUtjLFFBQVE3QixLQUFLOzREQUNsQmdCLEtBQUk7NERBQ0pvQixRQUFROzREQUNSQyxPQUFNOzs7Ozs7Ozs7Ozs7K0NBYklSLFFBQVEvQixLQUFLOzs7Ozs7Ozs7Ozs7d0JBbUJqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWQsQ0FBQztHQW5IZUc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpbWFyeUZlYXR1cmVzLmpzeD85YzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICdAL2ltYWdlcy9iYWNrZ3JvdW5kLWZlYXR1cmVzLmpwZydcbmltcG9ydCBzY3JlZW5zaG90VmlldyBmcm9tICdAL2ltYWdlcy9zY3JlZW5zaG90cy92aWV3LnBuZydcbmltcG9ydCBzY3JlZW5zaG90QXBwbHkgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvYXBwbHkucG5nJ1xuaW1wb3J0IHNjcmVlbnNob3RWZXJpZnkgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvdmVyaWZ5LnBuZydcbmltcG9ydCBzY3JlZW5zaG90UGF5IGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL3BheS5wbmcnXG5cbmltcG9ydCBzY3JlZW5zaG90RXhwZW5zZXMgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvZXhwZW5zZXMucG5nJ1xuaW1wb3J0IHNjcmVlbnNob3RQYXlyb2xsIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL3BheXJvbGwucG5nJ1xuaW1wb3J0IHNjcmVlbnNob3RSZXBvcnRpbmcgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvcmVwb3J0aW5nLnBuZydcbmltcG9ydCBzY3JlZW5zaG90VmF0UmV0dXJucyBmcm9tICdAL2ltYWdlcy9zY3JlZW5zaG90cy92YXQtcmV0dXJucy5wbmcnXG5cbmNvbnN0IGZlYXR1cmVzID0gW1xuICB7XG4gICAgdGl0bGU6ICdWaWV3JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiRXhwbG9yZSBhIDNEIHJlbmRlciBvciBib29rIGFuIGluLXBlcnNvbiB2aWV3aW5nIHRocm91Z2ggdGhlIEhhbWxldCBhcHAuXCIsXG4gICAgaW1hZ2U6IHNjcmVlbnNob3RWaWV3LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBcHBseScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdldCBwcmUtYXBwcm92ZWQgYXMgYSBIYW1sZXQgcmVzaWRlbnQgaW4gbGVzcyB0aGFuIDUgbWludXRlcyBhbmQgc3VibWl0IGhvbWUgYXBwbGljYXRpb25zIGluIDMgY2xpY2tzLlwiLFxuICAgIGltYWdlOiBzY3JlZW5zaG90QXBwbHksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1ZlcmlmeScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJyZWV6ZSB0aHJvdWdoIEhhbWxldCdzIGJlc3QtaW4tY2xhc3MsIGluLWFwcCBpZGVudGl0eSBhbmQgaW5jb21lIHZlcmlmaWNhdGlvbi5cIixcbiAgICBpbWFnZTogc2NyZWVuc2hvdFZlcmlmeSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2lnbiAmIFBheScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnZS1TaWduIHlvdXIgdGVuYW5jeSBhZ3JlZW1lbnQsIHBheSB5b3VyIGRlcG9zaXQgYW5kIHNldCB1cCB5b3VyIHJlbnQgcGF5bWVudHMgZnJvbSB5b3VyIGRldmljZS4nLFxuICAgIGltYWdlOiBzY3JlZW5zaG90UGF5LFxuICB9LFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gUHJpbWFyeUZlYXR1cmVzKCkge1xuICBsZXQgW3RhYk9yaWVudGF0aW9uLCBzZXRUYWJPcmllbnRhdGlvbl0gPSB1c2VTdGF0ZSgnaG9yaXpvbnRhbCcpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgbGdNZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDEwMjRweCknKVxuXG4gICAgZnVuY3Rpb24gb25NZWRpYVF1ZXJ5Q2hhbmdlKHsgbWF0Y2hlcyB9KSB7XG4gICAgICBzZXRUYWJPcmllbnRhdGlvbihtYXRjaGVzID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJylcbiAgICB9XG5cbiAgICBvbk1lZGlhUXVlcnlDaGFuZ2UobGdNZWRpYVF1ZXJ5KVxuICAgIGxnTWVkaWFRdWVyeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbk1lZGlhUXVlcnlDaGFuZ2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbGdNZWRpYVF1ZXJ5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIG9uTWVkaWFRdWVyeUNoYW5nZSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb25cbiAgICAgIGlkPVwicmVzaWRlbnRzXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJGZWF0dXJlcyBmb3IgcnVubmluZyB5b3VyIGJvb2tzXCJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1pbmRpZ28tNjAwIHB0LTIwIHBiLTI4IHNtOnB5LTMyXCJcbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiBtYXgtdy1ub25lIHRyYW5zbGF0ZS14LVstNDQlXSB0cmFuc2xhdGUteS1bLTQyJV1cIlxuICAgICAgICBzcmM9e2JhY2tncm91bmRJbWFnZX1cbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgd2lkdGg9ezIyNDV9XG4gICAgICAgIGhlaWdodD17MTYzNn1cbiAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgIC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG1kOm14LWF1dG8gbWQ6dGV4dC1jZW50ZXIgeGw6bWF4LXctbm9uZVwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC0zeGwgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBzbTp0ZXh0LTR4bCBtZDp0ZXh0LTV4bFwiPlxuICAgICAgICAgICAgRm9yIHJlc2lkZW50c1xuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LWxnIHRyYWNraW5nLXRpZ2h0IHRleHQtYmx1ZS0xMDBcIj5cbiAgICAgICAgICAgIFZpZXcsIGFwcGx5LCBzaWduIGFuZCBwYXkuIE9uIHlvdXIgcGhvbmUuIEluIHVuZGVyIDQ4IGhvdXJzLlxuICAgICAgICAgICAgIFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWIuR3JvdXBcbiAgICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTYgZ3JpZCBncmlkLWNvbHMtMSBpdGVtcy1jZW50ZXIgZ2FwLXktMiBwdC0xMCBzbTpnYXAteS02IG1kOm10LTIwIGxnOmdyaWQtY29scy0xMiBsZzpwdC0wXCJcbiAgICAgICAgICB2ZXJ0aWNhbD17dGFiT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCd9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgc2VsZWN0ZWRJbmRleCB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC00IGZsZXggb3ZlcmZsb3cteC1hdXRvIHBiLTQgc206bXgtMCBzbTpvdmVyZmxvdy12aXNpYmxlIHNtOnBiLTAgbGc6Y29sLXNwYW4tNVwiPlxuICAgICAgICAgICAgICAgIDxUYWIuTGlzdCBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZ2FwLXgtNCB3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHNtOm14LWF1dG8gc206cHgtMCBsZzpteC0wIGxnOmJsb2NrIGxnOmdhcC14LTAgbGc6Z2FwLXktMSBsZzp3aGl0ZXNwYWNlLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgZmVhdHVyZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCBweS0xIHB4LTQgbGc6cm91bmRlZC1yLW5vbmUgbGc6cm91bmRlZC1sLXhsIGxnOnAtNicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID09PSBmZWF0dXJlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgbGc6Ymctd2hpdGUvMTAgbGc6cmluZy0xIGxnOnJpbmctaW5zZXQgbGc6cmluZy13aGl0ZS8xMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6Ymctd2hpdGUvMTAgbGc6aG92ZXI6Ymctd2hpdGUvNSdcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZGlzcGxheSB0ZXh0LWxnIFsmOm5vdCg6Zm9jdXMtdmlzaWJsZSldOmZvY3VzOm91dGxpbmUtbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWJsdWUtNjAwIGxnOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWJsdWUtMTAwIGhvdmVyOnRleHQtd2hpdGUgbGc6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgbGc6cm91bmRlZC1yLW5vbmUgbGc6cm91bmRlZC1sLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdtdC0yIGhpZGRlbiB0ZXh0LXNtIGxnOmJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWJsdWUtMTAwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RhYi5MaXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRhYi5QYW5lbHMgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tN1wiPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZWwga2V5PXtmZWF0dXJlLnRpdGxlfSB1bm1vdW50PXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206cHgtNiBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1pbnNldC14LTQgdG9wLVstNi41cmVtXSBib3R0b20tWy00LjI1cmVtXSBiZy13aGl0ZS8xMCByaW5nLTEgcmluZy1pbnNldCByaW5nLXdoaXRlLzEwIHNtOmluc2V0LXgtMCBzbTpyb3VuZGVkLXQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctMnhsIHRleHQtYmFzZSB0ZXh0LXdoaXRlIHNtOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHctWzQ1cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBiZy1zbGF0ZS01MCBzaGFkb3cteGwgc2hhZG93LWJsdWUtOTAwLzIwIHNtOnctYXV0byBsZzptdC0wIGxnOnctWzY3LjgxMjVyZW1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDEwMjRweCkgNjcuODEyNXJlbSwgKG1pbi13aWR0aDogNjQwcHgpIDEwMHZ3LCA0NXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWIuUGFuZWxzPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWIuR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVGFiIiwiY2xzeCIsIkNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsInNjcmVlbnNob3RWaWV3Iiwic2NyZWVuc2hvdEFwcGx5Iiwic2NyZWVuc2hvdFZlcmlmeSIsInNjcmVlbnNob3RQYXkiLCJzY3JlZW5zaG90RXhwZW5zZXMiLCJzY3JlZW5zaG90UGF5cm9sbCIsInNjcmVlbnNob3RSZXBvcnRpbmciLCJzY3JlZW5zaG90VmF0UmV0dXJucyIsImZlYXR1cmVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiUHJpbWFyeUZlYXR1cmVzIiwidGFiT3JpZW50YXRpb24iLCJzZXRUYWJPcmllbnRhdGlvbiIsImxnTWVkaWFRdWVyeSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJvbk1lZGlhUXVlcnlDaGFuZ2UiLCJtYXRjaGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZWN0aW9uIiwiaWQiLCJhcmlhLWxhYmVsIiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bm9wdGltaXplZCIsImRpdiIsImgyIiwicCIsIkdyb3VwIiwiYXMiLCJ2ZXJ0aWNhbCIsInNlbGVjdGVkSW5kZXgiLCJMaXN0IiwibWFwIiwiZmVhdHVyZSIsImZlYXR1cmVJbmRleCIsImgzIiwic3BhbiIsIlBhbmVscyIsIlBhbmVsIiwidW5tb3VudCIsInByaW9yaXR5Iiwic2l6ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PrimaryFeatures.jsx\n"));

/***/ })

});