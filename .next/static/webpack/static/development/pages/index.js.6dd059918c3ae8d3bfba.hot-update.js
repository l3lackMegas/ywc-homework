webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_ContainerRegister__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ContainerRegister */ "./components/ContainerRegister.js");


var _jsxFileName = "e:\\Programing\\Git\\ywc-homework\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Index = function Index(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23 \u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49"), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: props.navItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_ContainerRegister__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: props.jsonData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E42\u0E20\u0E04", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), "\u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u201C\u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49\u201D"));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://panjs.com/ywc.json');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            navItem: data.navbarItems,
            jsonData: data,
            test: "asd"
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6dd059918c3ae8d3bfba.hot-update.js.map