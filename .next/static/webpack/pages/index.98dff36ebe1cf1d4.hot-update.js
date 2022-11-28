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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrimaryFeatures\": function() { return /* binding */ PrimaryFeatures; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.jsx\");\n/* harmony import */ var _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/images/background-features.jpg */ \"./src/images/background-features.jpg\");\n/* harmony import */ var _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/images/screenshots/expenses.png */ \"./src/images/screenshots/expenses.png\");\n/* harmony import */ var _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/images/screenshots/payroll.png */ \"./src/images/screenshots/payroll.png\");\n/* harmony import */ var _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/images/screenshots/reporting.png */ \"./src/images/screenshots/reporting.png\");\n/* harmony import */ var _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/images/screenshots/vat-returns.png */ \"./src/images/screenshots/vat-returns.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst features = [\n    {\n        title: \"View\",\n        description: \"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.\",\n        image: _images_screenshots_payroll_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        title: \"Apply\",\n        description: \"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.\",\n        image: _images_screenshots_expenses_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        title: \"Verify\",\n        description: \"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.\",\n        image: _images_screenshots_vat_returns_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    },\n    {\n        title: \"Sign\",\n        description: \"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.\",\n        image: _images_screenshots_reporting_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n];\nfunction PrimaryFeatures() {\n    _s();\n    let [tabOrientation, setTabOrientation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"horizontal\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let lgMediaQuery = window.matchMedia(\"(min-width: 1024px)\");\n        function onMediaQueryChange(param) {\n            let { matches  } = param;\n            setTabOrientation(matches ? \"vertical\" : \"horizontal\");\n        }\n        onMediaQueryChange(lgMediaQuery);\n        lgMediaQuery.addEventListener(\"change\", onMediaQueryChange);\n        return ()=>{\n            lgMediaQuery.removeEventListener(\"change\", onMediaQueryChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"features\",\n        \"aria-label\": \"Features for running your books\",\n        className: \"relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                className: \"absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]\",\n                src: _images_background_features_jpg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"\",\n                width: 2245,\n                height: 1636,\n                unoptimized: true\n            }, void 0, false, {\n                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-2xl md:mx-auto md:text-center xl:max-w-none\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl\",\n                                children: \"Finally, a modern rental experience\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-6 text-lg tracking-tight text-blue-100\",\n                                children: \"Viewings, applications, background checks, contracts, payments, maintenance. All online from the comfort of your phone.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Group, {\n                        as: \"div\",\n                        className: \"mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0\",\n                        vertical: tabOrientation === \"vertical\",\n                        children: (param)=>/*#__PURE__*/ {\n                            let { selectedIndex  } = param;\n                            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.List, {\n                                            className: \"relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal\",\n                                            children: features.map((feature, featureIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6\", selectedIndex === featureIndex ? \"bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10\" : \"hover:bg-white/10 lg:hover:bg-white/5\"),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {\n                                                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"font-display text-lg [&:not(:focus-visible)]:focus:outline-none\", selectedIndex === featureIndex ? \"text-blue-600 lg:text-white\" : \"text-blue-100 hover:text-white lg:text-white\"),\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        className: \"absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                        lineNumber: 110,\n                                                                        columnNumber: 27\n                                                                    }, this),\n                                                                    feature.title\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                lineNumber: 102,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 101,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"mt-2 hidden text-sm lg:block\", selectedIndex === featureIndex ? \"text-white\" : \"text-blue-100 group-hover:text-white\"),\n                                                            children: feature.description\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 114,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, feature.title, true, {\n                                                    fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 21\n                                                }, this))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panels, {\n                                        className: \"lg:col-span-7\",\n                                        children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {\n                                                unmount: false,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"relative sm:px-6 lg:hidden\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                lineNumber: 132,\n                                                                columnNumber: 23\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"relative mx-auto max-w-2xl text-base text-white sm:text-center\",\n                                                                children: feature.description\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                                lineNumber: 133,\n                                                                columnNumber: 23\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 131,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            className: \"w-full\",\n                                                            src: feature.image,\n                                                            alt: \"\",\n                                                            priority: true,\n                                                            sizes: \"(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                            lineNumber: 138,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                        lineNumber: 137,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, feature.title, true, {\n                                                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                                lineNumber: 130,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/stewiethepro/Documents/hamlet/landing/src/components/PrimaryFeatures.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(PrimaryFeatures, \"PA0UdhBatJoZrK3UQwLJY5ZxHuI=\");\n_c = PrimaryFeatures;\nvar _c;\n$RefreshReg$(_c, \"PrimaryFeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVc7Ozs7Ozs7Ozs7OztrRUFHeEIsOERBQUNxQjt3REFBSU4sV0FBVTtrRUFDYiw0RUFBQzFCLG1EQUFLQTs0REFDSjBCLFdBQVU7NERBQ1ZDLEtBQUtjLFFBQVE3QixLQUFLOzREQUNsQmdCLEtBQUk7NERBQ0pvQixRQUFROzREQUNSQyxPQUFNOzs7Ozs7Ozs7Ozs7K0NBYklSLFFBQVEvQixLQUFLOzs7Ozs7Ozs7Ozs7d0JBbUJqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWQsQ0FBQztHQW5IZUc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJpbWFyeUZlYXR1cmVzLmpzeD85YzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGFpbmVyJ1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICdAL2ltYWdlcy9iYWNrZ3JvdW5kLWZlYXR1cmVzLmpwZydcbmltcG9ydCBzY3JlZW5zaG90RXhwZW5zZXMgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvZXhwZW5zZXMucG5nJ1xuaW1wb3J0IHNjcmVlbnNob3RQYXlyb2xsIGZyb20gJ0AvaW1hZ2VzL3NjcmVlbnNob3RzL3BheXJvbGwucG5nJ1xuaW1wb3J0IHNjcmVlbnNob3RSZXBvcnRpbmcgZnJvbSAnQC9pbWFnZXMvc2NyZWVuc2hvdHMvcmVwb3J0aW5nLnBuZydcbmltcG9ydCBzY3JlZW5zaG90VmF0UmV0dXJucyBmcm9tICdAL2ltYWdlcy9zY3JlZW5zaG90cy92YXQtcmV0dXJucy5wbmcnXG5cbmNvbnN0IGZlYXR1cmVzID0gW1xuICB7XG4gICAgdGl0bGU6ICdWaWV3JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiS2VlcCB0cmFjayBvZiBldmVyeW9uZSdzIHNhbGFyaWVzIGFuZCB3aGV0aGVyIG9yIG5vdCB0aGV5J3ZlIGJlZW4gcGFpZC4gRGlyZWN0IGRlcG9zaXQgbm90IHN1cHBvcnRlZC5cIixcbiAgICBpbWFnZTogc2NyZWVuc2hvdFBheXJvbGwsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0FwcGx5JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWxsIG9mIHlvdXIgcmVjZWlwdHMgb3JnYW5pemVkIGludG8gb25lIHBsYWNlLCBhcyBsb25nIGFzIHlvdSBkb24ndCBtaW5kIHR5cGluZyBpbiB0aGUgZGF0YSBieSBoYW5kLlwiLFxuICAgIGltYWdlOiBzY3JlZW5zaG90RXhwZW5zZXMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1ZlcmlmeScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldlIG9ubHkgc2VsbCBvdXIgc29mdHdhcmUgdG8gY29tcGFuaWVzIHdobyBkb24ndCBkZWFsIHdpdGggVkFUIGF0IGFsbCwgc28gdGVjaG5pY2FsbHkgd2UgZG8gYWxsIHRoZSBWQVQgc3R1ZmYgdGhleSBuZWVkLlwiLFxuICAgIGltYWdlOiBzY3JlZW5zaG90VmF0UmV0dXJucyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2lnbicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRWFzaWx5IGV4cG9ydCB5b3VyIGRhdGEgaW50byBhbiBFeGNlbCBzcHJlYWRzaGVldCB3aGVyZSB5b3UgY2FuIGRvIHdoYXRldmVyIHRoZSBoZWxsIHlvdSB3YW50IHdpdGggaXQuJyxcbiAgICBpbWFnZTogc2NyZWVuc2hvdFJlcG9ydGluZyxcbiAgfSxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIFByaW1hcnlGZWF0dXJlcygpIHtcbiAgbGV0IFt0YWJPcmllbnRhdGlvbiwgc2V0VGFiT3JpZW50YXRpb25dID0gdXNlU3RhdGUoJ2hvcml6b250YWwnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGxnTWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJylcblxuICAgIGZ1bmN0aW9uIG9uTWVkaWFRdWVyeUNoYW5nZSh7IG1hdGNoZXMgfSkge1xuICAgICAgc2V0VGFiT3JpZW50YXRpb24obWF0Y2hlcyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpXG4gICAgfVxuXG4gICAgb25NZWRpYVF1ZXJ5Q2hhbmdlKGxnTWVkaWFRdWVyeSlcbiAgICBsZ01lZGlhUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgb25NZWRpYVF1ZXJ5Q2hhbmdlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxnTWVkaWFRdWVyeS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbk1lZGlhUXVlcnlDaGFuZ2UpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBpZD1cImZlYXR1cmVzXCJcbiAgICAgIGFyaWEtbGFiZWw9XCJGZWF0dXJlcyBmb3IgcnVubmluZyB5b3VyIGJvb2tzXCJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTYwMCBwdC0yMCBwYi0yOCBzbTpweS0zMlwiXG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgbWF4LXctbm9uZSB0cmFuc2xhdGUteC1bLTQ0JV0gdHJhbnNsYXRlLXktWy00MiVdXCJcbiAgICAgICAgc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9XG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIHdpZHRoPXsyMjQ1fVxuICAgICAgICBoZWlnaHQ9ezE2MzZ9XG4gICAgICAgIHVub3B0aW1pemVkXG4gICAgICAvPlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTJ4bCBtZDpteC1hdXRvIG1kOnRleHQtY2VudGVyIHhsOm1heC13LW5vbmVcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIHRyYWNraW5nLXRpZ2h0IHRleHQtd2hpdGUgc206dGV4dC00eGwgbWQ6dGV4dC01eGxcIj5cbiAgICAgICAgICAgIEZpbmFsbHksIGEgbW9kZXJuIHJlbnRhbCBleHBlcmllbmNlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC02IHRleHQtbGcgdHJhY2tpbmctdGlnaHQgdGV4dC1ibHVlLTEwMFwiPlxuICAgICAgICAgICAgVmlld2luZ3MsIGFwcGxpY2F0aW9ucywgYmFja2dyb3VuZCBjaGVja3MsIGNvbnRyYWN0cywgcGF5bWVudHMsIG1haW50ZW5hbmNlLlxuICAgICAgICAgICAgQWxsIG9ubGluZSBmcm9tIHRoZSBjb21mb3J0IG9mIHlvdXIgcGhvbmUuIFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUYWIuR3JvdXBcbiAgICAgICAgICBhcz1cImRpdlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtMTYgZ3JpZCBncmlkLWNvbHMtMSBpdGVtcy1jZW50ZXIgZ2FwLXktMiBwdC0xMCBzbTpnYXAteS02IG1kOm10LTIwIGxnOmdyaWQtY29scy0xMiBsZzpwdC0wXCJcbiAgICAgICAgICB2ZXJ0aWNhbD17dGFiT3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCd9XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgc2VsZWN0ZWRJbmRleCB9KSA9PiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1teC00IGZsZXggb3ZlcmZsb3cteC1hdXRvIHBiLTQgc206bXgtMCBzbTpvdmVyZmxvdy12aXNpYmxlIHNtOnBiLTAgbGc6Y29sLXNwYW4tNVwiPlxuICAgICAgICAgICAgICAgIDxUYWIuTGlzdCBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGZsZXggZ2FwLXgtNCB3aGl0ZXNwYWNlLW5vd3JhcCBweC00IHNtOm14LWF1dG8gc206cHgtMCBsZzpteC0wIGxnOmJsb2NrIGxnOmdhcC14LTAgbGc6Z2FwLXktMSBsZzp3aGl0ZXNwYWNlLW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoZmVhdHVyZSwgZmVhdHVyZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dyb3VwIHJlbGF0aXZlIHJvdW5kZWQtZnVsbCBweS0xIHB4LTQgbGc6cm91bmRlZC1yLW5vbmUgbGc6cm91bmRlZC1sLXhsIGxnOnAtNicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4ID09PSBmZWF0dXJlSW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctd2hpdGUgbGc6Ymctd2hpdGUvMTAgbGc6cmluZy0xIGxnOnJpbmctaW5zZXQgbGc6cmluZy13aGl0ZS8xMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaG92ZXI6Ymctd2hpdGUvMTAgbGc6aG92ZXI6Ymctd2hpdGUvNSdcbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZGlzcGxheSB0ZXh0LWxnIFsmOm5vdCg6Zm9jdXMtdmlzaWJsZSldOmZvY3VzOm91dGxpbmUtbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICd0ZXh0LWJsdWUtNjAwIGxnOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWJsdWUtMTAwIGhvdmVyOnRleHQtd2hpdGUgbGc6dGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgbGc6cm91bmRlZC1yLW5vbmUgbGc6cm91bmRlZC1sLXhsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdtdC0yIGhpZGRlbiB0ZXh0LXNtIGxnOmJsb2NrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleCA9PT0gZmVhdHVyZUluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGV4dC13aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWJsdWUtMTAwIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUnXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1RhYi5MaXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFRhYi5QYW5lbHMgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tN1wiPlxuICAgICAgICAgICAgICAgIHtmZWF0dXJlcy5tYXAoKGZlYXR1cmUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxUYWIuUGFuZWwga2V5PXtmZWF0dXJlLnRpdGxlfSB1bm1vdW50PXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206cHgtNiBsZzpoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1pbnNldC14LTQgdG9wLVstNi41cmVtXSBib3R0b20tWy00LjI1cmVtXSBiZy13aGl0ZS8xMCByaW5nLTEgcmluZy1pbnNldCByaW5nLXdoaXRlLzEwIHNtOmluc2V0LXgtMCBzbTpyb3VuZGVkLXQteGxcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlbGF0aXZlIG14LWF1dG8gbWF4LXctMnhsIHRleHQtYmFzZSB0ZXh0LXdoaXRlIHNtOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZmVhdHVyZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHctWzQ1cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBiZy1zbGF0ZS01MCBzaGFkb3cteGwgc2hhZG93LWJsdWUtOTAwLzIwIHNtOnctYXV0byBsZzptdC0wIGxnOnctWzY3LjgxMjVyZW1dXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmZWF0dXJlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplcz1cIihtaW4td2lkdGg6IDEwMjRweCkgNjcuODEyNXJlbSwgKG1pbi13aWR0aDogNjQwcHgpIDEwMHZ3LCA0NXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L1RhYi5QYW5lbD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9UYWIuUGFuZWxzPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UYWIuR3JvdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiVGFiIiwiY2xzeCIsIkNvbnRhaW5lciIsImJhY2tncm91bmRJbWFnZSIsInNjcmVlbnNob3RFeHBlbnNlcyIsInNjcmVlbnNob3RQYXlyb2xsIiwic2NyZWVuc2hvdFJlcG9ydGluZyIsInNjcmVlbnNob3RWYXRSZXR1cm5zIiwiZmVhdHVyZXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJQcmltYXJ5RmVhdHVyZXMiLCJ0YWJPcmllbnRhdGlvbiIsInNldFRhYk9yaWVudGF0aW9uIiwibGdNZWRpYVF1ZXJ5Iiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm9uTWVkaWFRdWVyeUNoYW5nZSIsIm1hdGNoZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlY3Rpb24iLCJpZCIsImFyaWEtbGFiZWwiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVub3B0aW1pemVkIiwiZGl2IiwiaDIiLCJwIiwiR3JvdXAiLCJhcyIsInZlcnRpY2FsIiwic2VsZWN0ZWRJbmRleCIsIkxpc3QiLCJtYXAiLCJmZWF0dXJlIiwiZmVhdHVyZUluZGV4IiwiaDMiLCJzcGFuIiwiUGFuZWxzIiwiUGFuZWwiLCJ1bm1vdW50IiwicHJpb3JpdHkiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PrimaryFeatures.jsx\n"));

/***/ })

});