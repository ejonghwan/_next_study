webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

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
      handler(e.target.value);
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
    onChange: handleId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiU2lnbnVwIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2hlayIsInNldENoZWtFcnIiLCJ1c2VTdGF0ZSIsImlkIiwic2V0SWQiLCJuYW1lIiwic2V0TmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInNldENoZWsiLCJwYXNzd29yZENoZWNrRXJyIiwic2V0UGFzc3dvcmRDaGVja0VyciIsImNoZWtFcnIiLCJ1c2VJbnB1dCIsImluaXRhbFN0YXRlIiwic3RhdGUiLCJzZXR0ZXIiLCJoYW5kbGVyIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVOYW1lIiwiaGFuZGxlUGFzc3dvcmQiLCJoYW5kbGVQYXNzd29yZENoZWNrIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoZWNrYm94IiwiY2hlY2tlZCIsImhhbmRsZUlkIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQTs7QUFFakIsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxLQUFDQyxJQUFELEdBQVFDLFVBQVUsQ0FBQyxJQUFELENBQWxCLEdBQTJCQSxVQUFVLENBQUMsS0FBRCxDQUFyQztBQUdILEdBTEQ7O0FBRmlCLGtCQVNHQyxzREFBUSxFQVRYO0FBQUEsTUFTVkMsRUFUVTtBQUFBLE1BU05DLEtBVE07O0FBQUEsbUJBVU9GLHNEQUFRLEVBVmY7QUFBQSxNQVVWRyxJQVZVO0FBQUEsTUFVSkMsT0FWSTs7QUFBQSxtQkFXZUosc0RBQVEsRUFYdkI7QUFBQSxNQVdWSyxRQVhVO0FBQUEsTUFXQUMsV0FYQTs7QUFBQSxt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RCxZQUFRLEVBQUUyQixjQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBSEosRUFJTWIsT0FBTyxJQUFJO0FBQUssU0FBSyxFQUFFO0FBQUNnQixXQUFLLEVBQUU7QUFBUixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNERBSmpCLENBbkJKLEVBeUJJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSixDQUZKLENBREo7QUFnQ0gsQ0F2RkQ7O0lBQU1sQyxNOztLQUFBQSxNO0FBeUZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2lnbnVwLmpzLjU2MDQ0MzcyMThkYTVhM2Q5MWY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzLCBCdXR0b24sIEFjdGl2ZUJ0biB9IGZyb20gJy4uL2NvbXBvbmVudC9HbG9iYWxTdHlsZXMnXHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgIWNoZWsgPyBzZXRDaGVrRXJyKHRydWUpIDogc2V0Q2hla0VycihmYWxzZSkgXHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjaGVrLCBzZXRDaGVrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZENoZWNrRXJyLCBzZXRQYXNzd29yZENoZWNrRXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjaGVrRXJyLCBzZXRDaGVrRXJyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgdXNlSW5wdXQgPSAoaW5pdGFsU3RhdGUgPSBudWxsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgW3N0YXRlLCBzZXR0ZXJdID0gdXNlU3RhdGUoaW5pdGFsU3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVyKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3N0YXRlLCBoYW5kbGVyXVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGhhbmRsZUlkID0gKGUpID0+IHtcclxuICAgIC8vICAgICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTmFtZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYXNzd29yZCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFzc3dvcmRDaGVjayA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gc2V0UGFzc3dvcmRDaGVja0VycihwYXNzd29yZCAhPT0gZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgcGFzc3dvcmQgIT09IGUudGFyZ2V0LnZhbHVlID8gc2V0UGFzc3dvcmRDaGVja0Vycih0cnVlKSA6IHNldFBhc3N3b3JkQ2hlY2tFcnIoZmFsc2UpXHJcbiAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQgIT09IGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVja2JveCA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlayhlLnRhcmdldC5jaGVja2VkKVxyXG4gICAgICAgIC8vIGNoZWsgPyBzZXRDaGVrRXJyKGZhbHNlKSA6IG51bGxcclxuICAgICAgICBzZXRDaGVrRXJyKGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoZWspXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlkXCI+aWQ8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImlkXCIgb25DaGFuZ2U9e2hhbmRsZUlkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPm5hbWU8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBvbkNoYW5nZT17aGFuZGxlTmFtZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5wYXNzd29yZDwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBvbkNoYW5nZT17aGFuZGxlUGFzc3dvcmR9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWNoZWNrXCI+cGFzc3dvcmQtY2hlY2s8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkLWNoZWNrXCIgb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hlY2t9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7IHBhc3N3b3JkQ2hlY2tFcnIgJiYgPGRpdiBzdHlsZT17e2NvbG9yOiBcInJlZFwiLCB9fT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpDwvZGl2PiB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBjaGVja2VkIOyGjeyEseyXkCBzdGF0ZeqwkuydhCDrhKPslrTslbztlaguIOq3uOumrOqzoCDtlajsiJjsl5DripQgZS50YXJnZXQuY2hlY2tlZCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e2NoZWt9IG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2hlY2tib3hcIj7sooXtmZjsnZgg66eQ7J2EIOuTpOydhOqyg+ydhCDrp7nshLjtlanri4jri6Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHsgY2hla0VyciAmJiA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwicmVkXCIsIH19PuuCtCDrp5DsnYQg7JWI65Oj6rKg64uk6rOgID88L2Rpdj4gfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QWN0aXZlQnRuPnNpZ251cDwvQWN0aXZlQnRuPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwOyJdLCJzb3VyY2VSb290IjoiIn0=