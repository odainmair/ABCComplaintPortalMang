webpackHotUpdate_N_E("pages/auth/signin",{

/***/ "./pages/auth/ImageUpload.js":
/*!***********************************!*\
  !*** ./pages/auth/ImageUpload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_images_uploading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-images-uploading */ \"./node_modules/react-images-uploading/dist/index.js\");\n/* harmony import */ var react_images_uploading__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_images_uploading__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/inspire/NodeJS Microserices/ticketing/client/pages/auth/ImageUpload.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      images = _React$useState2[0],\n      setImages = _React$useState2[1];\n\n  var maxNumber = 1;\n\n  var onChange = function onChange(imageList, addUpdateIndex) {\n    // data for submit\n    console.log(imageList, addUpdateIndex);\n    setImages(imageList);\n  };\n\n  return __jsx(\"div\", {\n    className: \"App\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 16\n    }\n  }, __jsx(react_images_uploading__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    multiple: true,\n    value: images,\n    onChange: onChange,\n    maxNumber: maxNumber,\n    dataURLKey: \"data_url\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, function (_ref) {\n    var imageList = _ref.imageList,\n        onImageUpload = _ref.onImageUpload,\n        onImageRemoveAll = _ref.onImageRemoveAll,\n        onImageUpdate = _ref.onImageUpdate,\n        onImageRemove = _ref.onImageRemove,\n        isDragging = _ref.isDragging,\n        dragProps = _ref.dragProps;\n    return (// write your building UI\n      __jsx(\"div\", {\n        className: \"upload__image-wrapper\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, __jsx(\"button\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        style: isDragging ? {\n          color: \"red\"\n        } : undefined,\n        onClick: onImageUpload\n      }, dragProps, {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }\n      }), \"Add Image or Drop here\"), \"\\xA0\", imageList.map(function (image, index) {\n        return __jsx(\"div\", {\n          key: index,\n          className: \"image-item\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 15\n          }\n        }, __jsx(\"img\", {\n          src: image[\"data_url\"],\n          alt: \"\",\n          width: \"100\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 17\n          }\n        }), __jsx(\"div\", {\n          className: \"image-item__btn-wrapper\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }\n        }, __jsx(\"button\", {\n          onClick: function onClick() {\n            return onImageUpdate(index);\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 19\n          }\n        }, \"Update\"), __jsx(\"button\", {\n          onClick: function onClick() {\n            return onImageRemove(index);\n          },\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 19\n          }\n        }, \"Remove\")));\n      }))\n    );\n  }));\n}, \"mOoWwfdsCKBG2MIVzAXM/MEStpE=\"));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXV0aC9JbWFnZVVwbG9hZC5qcz9hOGUyIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJtYXhOdW1iZXIiLCJvbkNoYW5nZSIsImltYWdlTGlzdCIsImFkZFVwZGF0ZUluZGV4IiwiY29uc29sZSIsImxvZyIsIm9uSW1hZ2VVcGxvYWQiLCJvbkltYWdlUmVtb3ZlQWxsIiwib25JbWFnZVVwZGF0ZSIsIm9uSW1hZ2VSZW1vdmUiLCJpc0RyYWdnaW5nIiwiZHJhZ1Byb3BzIiwiY29sb3IiLCJ1bmRlZmluZWQiLCJtYXAiLCJpbWFnZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLDhFQUFNO0FBQUE7O0FBQUEsd0JBQ1dBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRFg7QUFBQTtBQUFBLE1BQ1ZDLE1BRFU7QUFBQSxNQUNGQyxTQURFOztBQUVqQixNQUFNQyxTQUFTLEdBQUcsQ0FBbEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxjQUFaLEVBQStCO0FBQzVDO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxTQUFaLEVBQXVCQyxjQUF2QjtBQUNBSixhQUFTLENBQUNHLFNBQUQsQ0FBVDtBQUNELEdBSkg7O0FBTUUsU0FBUztBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDVCxNQUFDLDZEQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsU0FBSyxFQUFFSixNQUZUO0FBR0UsWUFBUSxFQUFFRyxRQUhaO0FBSUUsYUFBUyxFQUFFRCxTQUpiO0FBS0UsY0FBVSxFQUFDLFVBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HO0FBQUEsUUFDQ0UsU0FERCxRQUNDQSxTQUREO0FBQUEsUUFFQ0ksYUFGRCxRQUVDQSxhQUZEO0FBQUEsUUFHQ0MsZ0JBSEQsUUFHQ0EsZ0JBSEQ7QUFBQSxRQUlDQyxhQUpELFFBSUNBLGFBSkQ7QUFBQSxRQUtDQyxhQUxELFFBS0NBLGFBTEQ7QUFBQSxRQU1DQyxVQU5ELFFBTUNBLFVBTkQ7QUFBQSxRQU9DQyxTQVBELFFBT0NBLFNBUEQ7QUFBQSxXQVNDO0FBQ0E7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGFBQUssRUFBRUQsVUFBVSxHQUFHO0FBQUVFLGVBQUssRUFBRTtBQUFULFNBQUgsR0FBc0JDLFNBRHpDO0FBRUUsZUFBTyxFQUFFUDtBQUZYLFNBR01LLFNBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERixVQVdHVCxTQUFTLENBQUNZLEdBQVYsQ0FBYyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUNiO0FBQUssYUFBRyxFQUFFQSxLQUFWO0FBQWlCLG1CQUFTLEVBQUMsWUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssYUFBRyxFQUFFRCxLQUFLLENBQUMsVUFBRCxDQUFmO0FBQTZCLGFBQUcsRUFBQyxFQUFqQztBQUFvQyxlQUFLLEVBQUMsS0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLEVBRUU7QUFBSyxtQkFBUyxFQUFDLHlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVAsYUFBYSxDQUFDUSxLQUFELENBQW5CO0FBQUEsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNUCxhQUFhLENBQUNPLEtBQUQsQ0FBbkI7QUFBQSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLENBRkYsQ0FEYTtBQUFBLE9BQWQsQ0FYSDtBQVZEO0FBQUEsR0FQSCxDQURTLENBQVQ7QUEwQ0wsQ0FuREQiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL0ltYWdlVXBsb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlVXBsb2FkaW5nIGZyb20gXCJyZWFjdC1pbWFnZXMtdXBsb2FkaW5nXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgbWF4TnVtYmVyID0gMTtcbiAgICBjb25zdCBvbkNoYW5nZSA9IChpbWFnZUxpc3QsIGFkZFVwZGF0ZUluZGV4KSA9PiB7XG4gICAgICAgIC8vIGRhdGEgZm9yIHN1Ym1pdFxuICAgICAgICBjb25zb2xlLmxvZyhpbWFnZUxpc3QsIGFkZFVwZGF0ZUluZGV4KTtcbiAgICAgICAgc2V0SW1hZ2VzKGltYWdlTGlzdCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKCA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPEltYWdlVXBsb2FkaW5nXG4gICAgICAgIG11bHRpcGxlXG4gICAgICAgIHZhbHVlPXtpbWFnZXN9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgbWF4TnVtYmVyPXttYXhOdW1iZXJ9XG4gICAgICAgIGRhdGFVUkxLZXk9XCJkYXRhX3VybFwiXG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGltYWdlTGlzdCxcbiAgICAgICAgICBvbkltYWdlVXBsb2FkLFxuICAgICAgICAgIG9uSW1hZ2VSZW1vdmVBbGwsXG4gICAgICAgICAgb25JbWFnZVVwZGF0ZSxcbiAgICAgICAgICBvbkltYWdlUmVtb3ZlLFxuICAgICAgICAgIGlzRHJhZ2dpbmcsXG4gICAgICAgICAgZHJhZ1Byb3BzXG4gICAgICAgIH0pID0+IChcbiAgICAgICAgICAvLyB3cml0ZSB5b3VyIGJ1aWxkaW5nIFVJXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfX2ltYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgc3R5bGU9e2lzRHJhZ2dpbmcgPyB7IGNvbG9yOiBcInJlZFwiIH0gOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uSW1hZ2VVcGxvYWR9XG4gICAgICAgICAgICAgIHsuLi5kcmFnUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBJbWFnZSBvciBEcm9wIGhlcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgJm5ic3A7XG5cbiAgICAgXG4gICAgICAgICAgICB7aW1hZ2VMaXN0Lm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiaW1hZ2UtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVtcImRhdGFfdXJsXCJdfSBhbHQ9XCJcIiB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1pdGVtX19idG4td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkltYWdlVXBkYXRlKGluZGV4KX0+VXBkYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uSW1hZ2VSZW1vdmUoaW5kZXgpfT5SZW1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvSW1hZ2VVcGxvYWRpbmc+XG4gICAgPC9kaXY+KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/ImageUpload.js\n");

/***/ })

})