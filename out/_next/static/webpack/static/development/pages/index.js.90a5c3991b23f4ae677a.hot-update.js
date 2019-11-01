webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HeaderMobile.js":
/*!************************************!*\
  !*** ./components/HeaderMobile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\HeaderMobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var HeaderMobile = function HeaderMobile(props) {
  var _jsx;

  return __jsx("div", {
    className: "navBarMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("a", (_jsx = {
    href: "#",
    className: "navbar-brand"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", "#"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 3
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx("img", {
    src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  })), __jsx("div", {
    id: "nav-icon1",
    toggle: "0",
    onClick: function onClick(e) {
      var isOn = document.getElementById('nav-icon1').getAttribute("toggle");

      if (isOn == 0) {
        document.getElementById('nav-icon1').classList.add('open');
        document.getElementById('nav-icon1').setAttribute("toggle", "1");
      } else {
        document.getElementById('nav-icon1').classList.remove('open');
        document.getElementById('nav-icon1').setAttribute("toggle", "0");
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    id: "mobileMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, props.data.map(function (item) {
    return __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("a", {
      href: item.href,
      className: "aMobile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, item.label));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderMobile);

/***/ })

})
//# sourceMappingURL=index.js.90a5c3991b23f4ae677a.hot-update.js.map