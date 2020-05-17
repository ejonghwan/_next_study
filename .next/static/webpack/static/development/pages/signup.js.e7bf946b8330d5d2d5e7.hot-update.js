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

  var PasswordCheckErr = function PasswordCheckErr(e) {
    setId(e.target.cheked);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_component_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["GlobalStyle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 51
    }
  }), __jsx("input", {
    id: "id",
    onChange: handleId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, "name"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 55
    }
  }), __jsx("input", {
    id: "name",
    onChange: handleName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 63
    }
  }), __jsx("input", {
    id: "password",
    onChange: handlePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "password-check"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 75
    }
  }), __jsx("input", {
    id: "password-check",
    onChange: handlePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: "chekbox",
    type: "checkbox",
    onChange: handlePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }), __jsx("label", {
    htmlFor: "chekbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, "\uC885\uD658\uC758 \uB9D0\uC744 \uB4E4\uC744\uAC83\uC744 \uB9F9\uC138\uD569\uB2C8\uB2E4")), __jsx(_component_GlobalStyle__WEBPACK_IMPORTED_MODULE_1__["ActiveBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlU3RhdGUiLCJpZCIsInNldElkIiwibmFtZSIsInNldE5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicGFzc3dvcmRDaGVjayIsInNldFBhc3N3b3JkQ2hlY2siLCJoYW5kbGVJZCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTmFtZSIsImhhbmRsZVBhc3N3b3JkIiwiaGFuZGxlUGFzc3dvcmRDaGVjayIsIlBhc3N3b3JkQ2hlY2tFcnIiLCJjaGVrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFFakIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFDSCxHQUZEOztBQUZpQixrQkFNR0Msc0RBQVEsRUFOWDtBQUFBLE1BTVZDLEVBTlU7QUFBQSxNQU1OQyxLQU5NOztBQUFBLG1CQU9PRixzREFBUSxFQVBmO0FBQUEsTUFPVkcsSUFQVTtBQUFBLE1BT0pDLE9BUEk7O0FBQUEsbUJBUWVKLHNEQUFRLEVBUnZCO0FBQUEsTUFRVkssUUFSVTtBQUFBLE1BUUFDLFdBUkE7O0FBQUEsbUJBU3lCTixzREFBUSxFQVRqQztBQUFBLE1BU1ZPLGFBVFU7QUFBQSxNQVNLQyxnQkFUTDs7QUFXakIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ1gsQ0FBRCxFQUFPO0FBQ3BCSSxTQUFLLENBQUNKLENBQUMsQ0FBQ1ksTUFBRixDQUFTQyxLQUFWLENBQUw7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNkLENBQUQsRUFBTztBQUN0QkksU0FBSyxDQUFDSixDQUFDLENB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LGNBdEJKLENBRkosQ0FESjtBQTZCSCxDQTVERDs7R0FBTWxCLE07O0tBQUFBLE07QUE4RFNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaWdudXAuanMuZTdiZjk0NmI4MzMwZDVkMmQ1ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZSwgQnV0dG9uLCBBY3RpdmVCdG4gfSBmcm9tICcuLi9jb21wb25lbnQvR2xvYmFsU3R5bGUnXHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlSWQgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZU5hbWUgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZENoZWNrID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBQYXNzd29yZENoZWNrRXJyID0gKGUpID0+IHtcclxuICAgICAgICBzZXRJZChlLnRhcmdldC5jaGVrZWQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWRcIj5pZDwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWRcIiBvbkNoYW5nZT17aGFuZGxlSWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+bmFtZTwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmQtY2hlY2tcIj5wYXNzd29yZC1jaGVjazwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmQtY2hlY2tcIiBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGVja30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hlY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNoZWtib3hcIj7sooXtmZjsnZgg66eQ7J2EIOuTpOydhOqyg+ydhCDrp7nshLjtlanri4jri6Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QWN0aXZlQnRuPnNpZ251cDwvQWN0aXZlQnRuPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=