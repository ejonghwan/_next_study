webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\jjong\\Desktop\\test-code\\front\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Home = function Home() {
  var dummy = {
    isLogged: true,
    user: 'ejonghwan',
    mainPosts: [{
      user: {
        id: 1,
        nickName: 'haha'
      },
      img: 'https://placeimg.com/320/100/any',
      content: '첫번째 게시글'
    }],
    imagesPath: ['asdasd', 'asdasd', '123123']
  };
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, dummy.isLogged ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 32
    }
  }, dummy.user, "\uB2D8\uC774 \uB85C\uADF8\uC778 \uD558\uC168\uC2B5\uB2C8\uB2E4") : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 70
    }
  }, dummy.user, " \uB85C\uADF8\uC544\uC6C3 \uD558\uC168\uC2B5\uB2C8\uB2E4"), dummy.imagesPath.map(function (v) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: 'https://localhost3030' + v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 22
      }
    }), v);
  }), __jsx("div", {
    className: "posts-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 22
    }
  }, "retweet")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 22
    }
  }, "heart")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, "message")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  }, "ellipsis"))));
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiZHVtbXkiLCJpc0xvZ2dlZCIsInVzZXIiLCJtYWluUG9zdHMiLCJpZCIsIm5pY2tOYW1lIiwiaW1nIiwiY29udGVudCIsImltYWdlc1BhdGgiLCJtYXAiLCJ2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZixNQUFNQyxLQUFLLEdBQUc7QUFDZEMsWUFBUSxFQUFFLElBREk7QUFFZEMsUUFBSSxFQUFFLFdBRlE7QUFHZEMsYUFBUyxFQUFFLENBQ1A7QUFDSUQsVUFBSSxFQUFFO0FBQ0ZFLFVBQUUsRUFBQyxDQUREO0FBRUZDLGdCQUFRLEVBQUU7QUFGUixPQURWO0FBS0lDLFNBQUcsRUFBRSxrQ0FMVDtBQU1JQyxhQUFPLEVBQUU7QUFOYixLQURPLENBSEc7QUFhZEMsY0FBVSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBb0IsUUFBcEI7QUFiRSxHQUFkO0FBaUJBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNUixLQUFLLENBQUNDLFFBQU4sR0FBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRCxLQUFLLENBQUNFLElBQVosbUVBQWpCLEdBQXVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTUYsS0FBSyxDQUFDRSxJQUFaLDZEQUQ3RCxFQUVNRixLQUFLLENBQUNRLFVBQU4sQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUFDLENBQUMsRUFBSTtBQUN4QixXQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSztBQUFLLFNBQUcsRUFBRSwwQkFBMEJBLENBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBTCxFQUErQ0EsQ0FBL0MsQ0FEQTtBQUdILEdBSkMsQ0FGTixFQVNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFHLFFBQUksRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBTCxDQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQUcsUUFBSSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFMLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBRyxRQUFJLEVBQUMsT0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUwsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFHLFFBQUksRUFBQyxPQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUwsQ0FKSixDQVRKLENBREo7QUFrQkgsQ0FyQ0Q7O0tBQU1YLEk7QUF1Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42MjY1ZGI5MDIxZTU3NWM0OTM2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZHVtbXkgPSB7XHJcbiAgICBpc0xvZ2dlZDogdHJ1ZSxcclxuICAgIHVzZXI6ICdlam9uZ2h3YW4nLFxyXG4gICAgbWFpblBvc3RzOiBbXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiAnaGFoYScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGltZzogJ2h0dHBzOi8vcGxhY2VpbWcuY29tLzMyMC8xMDAvYW55JyxcclxuICAgICAgICAgICAgY29udGVudDogJ+yyq+uyiOynuCDqsozsi5zquIAnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgaW1hZ2VzUGF0aDogWydhc2Rhc2QnLCAnYXNkYXNkJywnMTIzMTIzJ10sXHJcbiAgICBcclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgeyBkdW1teS5pc0xvZ2dlZCA/IDxkaXY+e2R1bW15LnVzZXJ964uY7J20IOuhnOq3uOyduCDtlZjshajsirXri4jri6Q8L2Rpdj4gOiA8ZGl2PntkdW1teS51c2VyfSDroZzqt7jslYTsm4Mg7ZWY7IWo7Iq164uI64ukPC9kaXY+IH1cclxuICAgICAgICAgICAgeyBkdW1teS5pbWFnZXNQYXRoLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPXsnaHR0cHM6Ly9sb2NhbGhvc3QzMDMwJyArIHZ9IC8+e3Z9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHMtY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cIiNub25lXCI+cmV0d2VldDwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cIiNub25lXCI+aGVhcnQ8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCIjbm9uZVwiPm1lc3NhZ2U8L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCIjbm9uZVwiPmVsbGlwc2lzPC9hPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9