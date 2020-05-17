webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/GlobalStyle */ "./component/GlobalStyle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jjong\\Desktop\\test-code\\front\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Signup = function Signup() {
  _s();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var handleId = function handleId(e) {
    setId(e.target.value);
  };

  var handleName = function handleName(e) {
    setId(e.target.value);
  };

  var handlePassword = function handlePassword(e) {
    setId(e.target.value);
  };

  var handlePasswordCheck = function handlePasswordCheck(e) {
    setId(e.target.value);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_component_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 47
    }
  }), __jsx("input", {
    id: "id",
    onChange: handleId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "name"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 51
    }
  }), __jsx("input", {
    id: "name",
    onChange: handleName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 59
    }
  }), __jsx("input", {
    id: "password",
    onChange: handlePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "password-check"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 71
    }
  }), __jsx("input", {
    id: "password-check",
    onChange: handlePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx(_component_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["ActiveBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "signup")));
};

_s(Signup, "GXbu0xRebGs0M6khiEm5uF6t0lo=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJoYW5kbGVJZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTmFtZSIsImhhbmRsZVBhc3N3b3JkIiwiaGFuZGxlUGFzc3dvcmRDaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUVqQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNILEdBRkQ7O0FBRmlCLGtCQU1HQyxzREFBUSxFQU5YO0FBQUEsTUFNVkMsRUFOVTtBQUFBLE1BTU5DLEtBTk07O0FBQUEsbUJBT09GLHNEQUFRLEVBUGY7QUFBQSxNQU9WRyxJQVBVO0FBQUEsTUFPSkMsT0FQSTs7QUFBQSxtQkFRZUosc0RBQVEsRUFSdkI7QUFBQSxNQVFWSyxRQVJVO0FBQUEsTUFRQUMsV0FSQTs7QUFBQSxtQkFTeUJOLHNEQUFRLEVBVGpDO0FBQUEsTUFTVk8sYUFUVTtBQUFBLE1BU0tDLGdCQVRMOztBQVdqQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDWCxDQUFELEVBQU87QUFDcEJJLFNBQUssQ0FBQ0osQ0FBQyxDQUFDWSxNQUFGLENBQVNDLEtBQVYsQ0FBTDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2QsQ0FBRCxFQUFPO0FBQ3RCSSxTQUFLLENBQUNKLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDSCxHQUZEOztBQUlBLE1BQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2YsQ0FBRCxFQUFPO0FBQzFCSSxTQUFLLENBQUNKLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDSCxHQUZEOztBQUlBLE1BQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ2hCLENBQUQsRUFBTztBQUMvQkksU0FBSyxDQUFDSixDQUFDLENBQUNZLE1BQUYsQ0FBU0MsS0FBVixDQUFMO0FBQ0gsR0FGRDs7QUFJQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQU0sWUFBUSxFQUFFZCxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU8sV0FBTyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBLEVBQzhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEOUIsRUFFQTtBQUFPLE1BQUUsRUFBQyxJQUFWO0FBQWUsWUFBUSxFQUFFWSxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsQ0FESixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFPLFdBQU8sRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxFQUNrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGxDLEVBRUE7QUFBTyxNQUFFLEVBQUMsTUFBVjtBQUFpQixZQUFRLEVBQUVHLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQUxKLEVBU0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxFQUMwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRDFDLEVBRUE7QUFBTyxNQUFFLEVBQUMsVUFBVjtBQUFxQixZQUFRLEVBQUVDLGNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQVRKLEVBYUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU8sV0FBTyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsRUFDc0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUR0RCxFQUVBO0FBQU8sTUFBRSxFQUFDLGdCQUFWO0FBQTJCLFlBQVEsRUFBRUMsbUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQWJKLEVBaUJJLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpCSixDQUZKLENBREo7QUF3QkgsQ0FuREQ7O0dBQU1sQixNOztLQUFBQSxNO0FBcURTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbnVwLmpzLjJkMWU0ZjJkNjZmYTE1OTBmYWNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGUsIEJ1dHRvbiwgQWN0aXZlQnRuIH0gZnJvbSAnLi4vY29tcG9uZW50L0dsb2JhbFN0eWxlJ1xyXG5cclxuY29uc3QgU2lnbnVwID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmRDaGVjaywgc2V0UGFzc3dvcmRDaGVja10gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUlkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGVjayA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0SWQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpZFwiPmlkPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImlkXCIgb25DaGFuZ2U9e2hhbmRsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+bmFtZTwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZU5hbWV9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5wYXNzd29yZDwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZC1jaGVja1wiPnBhc3N3b3JkLWNoZWNrPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkLWNoZWNrXCIgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hlY2t9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEFjdGl2ZUJ0bj5zaWdudXA8L0FjdGl2ZUJ0bj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDsiXSwic291cmNlUm9vdCI6IiJ9