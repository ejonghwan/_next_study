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
/* harmony import */ var _component_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/GlobalStyles */ "./component/GlobalStyles.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\jjong\\Desktop\\test-code\\front\\pages\\signup.js",
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Signup = function Signup() {
  _s2();

  var _s = $RefreshSig$();

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    !chek ? setChekErr(true) : setChekErr(false);
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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordCheck = _useState4[0],
      setPasswordCheck = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      chek = _useState5[0],
      setChek = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      passwordCheckErr = _useState6[0],
      setPasswordCheckErr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      chekErr = _useState7[0],
      setChekErr = _useState7[1];

  var useInput = function useInput() {
    _s();

    var initalState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initalState),
        state = _useState8[0],
        setter = _useState8[1];

    var handler = function handler(e) {
      setter(e.target.value);
    };

    return [state, handler];
  }; // const handleId = (e) => {
  //     setId(e.target.value);
  // }


  _s(useInput, "tCAtD5n1qKpIWce0bXEhmmhGxjI=");

  var handleName = function handleName(e) {
    setName(e.target.value);
  };

  var handlePassword = function handlePassword(e) {
    setPassword(e.target.value);
  };

  var handlePasswordCheck = function handlePasswordCheck(e) {
    // setPasswordCheckErr(password !== e.target.value)
    password !== e.target.value ? setPasswordCheckErr(true) : setPasswordCheckErr(false);
    console.log(password !== e.target.value);
    setPasswordCheck(e.target.value);
  };

  var handleCheckbox = function handleCheckbox(e) {
    setChek(e.target.checked); // chek ? setChekErr(false) : null

    setChekErr(false);
    console.log(chek);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx(_component_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["GlobalStyles"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "id"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 51
    }
  }), __jsx("input", {
    id: "id",
    onChange: setId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "name"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 55
    }
  }), __jsx("input", {
    id: "name",
    onChange: handleName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, "password"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 63
    }
  }), __jsx("input", {
    id: "password",
    onChange: handlePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("label", {
    htmlFor: "password-check",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "password-check"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 75
    }
  }), __jsx("input", {
    id: "password-check",
    onChange: handlePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }), passwordCheckErr && __jsx("div", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 43
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("input", {
    id: "checkbox",
    type: "checkbox",
    checked: chek,
    onChange: handleCheckbox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx("label", {
    htmlFor: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "\uC885\uD658\uC758 \uB9D0\uC744 \uB4E4\uC744\uAC83\uC744 \uB9F9\uC138\uD569\uB2C8\uB2E4"), chekErr && __jsx("div", {
    style: {
      color: "red"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 34
    }
  }, "\uB0B4 \uB9D0\uC744 \uC548\uB4E3\uACA0\uB2E4\uACE0 ?")), __jsx(_component_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["ActiveBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "signup")));
};

_s2(Signup, "JPn3C7InvPoGxaL1Vy8jC00yCZk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlayIsInNldENoZWtFcnIiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInNldENoZWsiLCJwYXNzd29yZENoZWNrRXJyIiwic2V0UGFzc3dvcmRDaGVja0VyciIsImNoZWtFcnIiLCJ1c2VJbnB1dCIsImluaXRhbFN0YXRlIiwic3RhdGUiLCJzZXR0ZXIiLCJoYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVOYW1lIiwiaGFuZGxlUGFzc3dvcmQiLCJoYW5kbGVQYXNzd29yZENoZWNrIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoZWNrYm94IiwiY2hlY2tlZCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUE7O0FBRWpCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsS0FBQ0MsSUFBRCxHQUFRQyxVQUFVLENBQUMsSUFBRCxDQUFsQixHQUEyQkEsVUFBVSxDQUFDLEtBQUQsQ0FBckM7QUFHSCxHQUxEOztBQUZpQixrQkFTR0Msc0RBQVEsRUFUWDtBQUFBLE1BU1ZDLEVBVFU7QUFBQSxNQVNOQyxLQVRNOztBQUFBLG1CQVVPRixzREFBUSxFQVZmO0FBQUEsTUFVVkcsSUFWVTtBQUFBLE1BVUpDLE9BVkk7O0FBQUEsbUJBV2VKLHNEQUFRLEVBWHZCO0FBQUEsTUFXVkssUUFYVTtBQUFBLE1BV0FDLFdBWEE7O0FBQUEsbUJBWXlCTixzREFBUSxD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Y0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTyxXQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtGQUhKLEVBSU1iLE9BQU8sSUFBSTtBQUFLLFNBQUssRUFBRTtBQUFDZSxXQUFLLEVBQUU7QUFBUixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBSmpCLENBbkJKLEVBeUJJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSixDQUZKLENBREo7QUFnQ0gsQ0F2RkQ7O0lBQU1qQyxNOztLQUFBQSxNO0FBeUZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbnVwLmpzLjhjYzVjMjZlYWQ0ZmQ3NmM5OTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzLCBCdXR0b24sIEFjdGl2ZUJ0biB9IGZyb20gJy4uL2NvbXBvbmVudC9HbG9iYWxTdHlsZXMnXHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIWNoZWsgPyBzZXRDaGVrRXJyKHRydWUpIDogc2V0Q2hla0VycihmYWxzZSkgXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjaGVrLCBzZXRDaGVrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrRXJyLCBzZXRQYXNzd29yZENoZWNrRXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjaGVrRXJyLCBzZXRDaGVrRXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgdXNlSW5wdXQgPSAoaW5pdGFsU3RhdGUgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3N0YXRlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdGFsU3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXR0ZXIoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbc3RhdGUsIGhhbmRsZXJdXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG4gICAgLy8gY29uc3QgaGFuZGxlSWQgPSAoZSkgPT4ge1xyXG4gICAgLy8gICAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVOYW1lID0gKGUpID0+IHtcclxuICAgICAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgICAgICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZENoZWNrID0gKGUpID0+IHtcclxuICAgICAgICAvLyBzZXRQYXNzd29yZENoZWNrRXJyKHBhc3N3b3JkICE9PSBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICBwYXNzd29yZCAhPT0gZS50YXJnZXQudmFsdWUgPyBzZXRQYXNzd29yZENoZWNrRXJyKHRydWUpIDogc2V0UGFzc3dvcmRDaGVja0VycihmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZCAhPT0gZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSlcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoZWNrYm94ID0gKGUpID0+IHtcclxuICAgICAgICBzZXRDaGVrKGUudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICAgICAgLy8gY2hlayA/IHNldENoZWtFcnIoZmFsc2UpIDogbnVsbFxyXG4gICAgICAgIHNldENoZWtFcnIoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2coY2hlaylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWRcIj5pZDwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiaWRcIiBvbkNoYW5nZT17c2V0SWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+bmFtZTwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVOYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPnBhc3N3b3JkPC9sYWJlbD48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmQtY2hlY2tcIj5wYXNzd29yZC1jaGVjazwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmQtY2hlY2tcIiBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmRDaGVja30vPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcGFzc3dvcmRDaGVja0VyciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwicmVkXCIsIH19Puu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukPC9kaXY+IH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGNoZWNrZWQg7IaN7ISx7JeQIHN0YXRl6rCS7J2EIOuEo+yWtOyVvO2VqC4g6re466as6rOgIO2VqOyImOyXkOuKlCBlLnRhcmdldC5jaGVja2VkICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrYm94XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17Y2hla30gb25DaGFuZ2U9e2hhbmRsZUNoZWNrYm94fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja2JveFwiPuyihe2ZmOydmCDrp5DsnYQg65Ok7J2E6rKD7J2EIOunueyEuO2VqeuLiOuLpDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgeyBjaGVrRXJyICYmIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIiwgfX0+64K0IOunkOydhCDslYjrk6PqsqDri6Tqs6AgPzwvZGl2PiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxBY3RpdmVCdG4+c2lnbnVwPC9BY3RpdmVCdG4+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7Il0sInNvdXJjZVJvb3QiOiIifQ==