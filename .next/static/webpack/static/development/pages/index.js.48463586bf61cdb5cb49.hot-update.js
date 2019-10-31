webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "e:\\Programing\\Git\\ywc-homework\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var style = {
  navBar: {
    position: 'fixed',
    width: '100%',
    height: '60px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
    zIndex: 100
  },
  ul: {
    margin: '0 auto',
    padding: '5px 0 0 0',
    width: '100%',
    listStyle: 'none',
    textAlign: 'center'
  },
  li: {
    display: 'inline-block',
    padding: '14px 15px'
  }
};

var Header = function Header(props) {
  return __jsx("div", {
    style: style.navBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("ul", {
    style: style.ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.data.map(function (item) {
    return __jsx("li", {
      style: style.li,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      "class": "aNavbar",
      style: style.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, item.label)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.48463586bf61cdb5cb49.hot-update.js.map