module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Banner.js":
/*!******************************!*\
  !*** ./components/Banner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = props => __jsx("div", {
  className: "banner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "heroImg he1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}), __jsx("div", {
  className: "heroImg he2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("img", {
  alt: "banner",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
})), __jsx("div", {
  className: "heroImg he3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/BoxKTC.js":
/*!******************************!*\
  !*** ./components/BoxKTC.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\BoxKTC.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BoxKTC = props => __jsx("div", {
  className: "BoxKTC",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "box-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "imgList",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.mof.go.th/th/home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  alt: "MOF",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
})), __jsx("a", {
  href: "http://www.fpo.go.th",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  alt: "FPO",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("a", {
  href: "https://www.cgd.go.th",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("img", {
  alt: "CGD",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})), __jsx("a", {
  href: "https://www.newcb.ktb.co.th",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  alt: "Krungthai",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/Krungthai.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), __jsx("a", {
  href: "https://www.mots.go.th",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("img", {
  alt: "MOTS",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx("a", {
  href: "https://thai.tourismthailand.org",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("img", {
  alt: "TAT",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})))));

/* harmony default export */ __webpack_exports__["default"] = (BoxKTC);

/***/ }),

/***/ "./components/BoxTAT.js":
/*!******************************!*\
  !*** ./components/BoxTAT.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\BoxTAT.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const BoxTAT = props => __jsx("div", {
  className: "BoxTAT",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "box-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  href: "tel:021111144",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("img", {
  alt: "SQ",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("a", {
  href: "tel:022706400",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("img", {
  alt: "CGD",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "tel:1672",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("img", {
  alt: "HOTLINE",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})))));

/* harmony default export */ __webpack_exports__["default"] = (BoxTAT);

/***/ }),

/***/ "./components/ContainerDetail.js":
/*!***************************************!*\
  !*** ./components/ContainerDetail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\ContainerDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ContainerDetail = props => __jsx("div", {
  className: "ContainerDetail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "box-contain",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E42\u0E20\u0E04", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}), "\u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u201C\u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49\u201D"), __jsx("div", {
  className: "detail",
  dangerouslySetInnerHTML: {
    __html: props.data.detail
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23"), __jsx("div", {
  className: "detail ul mt-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "1. \u0E40\u0E1B\u0E47\u0E19\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E34\u0E44\u0E17\u0E22 \u0E21\u0E35\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), "2. \u0E21\u0E35\u0E2D\u0E32\u0E22\u0E38\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48 18 \u0E1B\u0E35\u0E1A\u0E23\u0E34\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E13 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), "3. \u0E21\u0E35\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E2A\u0E21\u0E32\u0E23\u0E4C\u0E17\u0E42\u0E1F\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15\u0E41\u0E25\u0E30\u0E21\u0E35\u0E2D\u0E35\u0E40\u0E21\u0E25")));

/* harmony default export */ __webpack_exports__["default"] = (ContainerDetail);

/***/ }),

/***/ "./components/ContainerRegister.js":
/*!*****************************************!*\
  !*** ./components/ContainerRegister.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\ContainerRegister.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ContainerRegister = props => __jsx("div", {
  className: "containerRegister",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"), __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, props.data.duration), __jsx("a", {
  href: "https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("button", {
  className: "btnRegister",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 \u0E40\u0E1F\u0E2A 2", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), "\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 24 \u0E15.\u0E04.62 \u0E27\u0E31\u0E19\u0E25\u0E30 2 \u0E23\u0E2D\u0E1A \u0E40\u0E27\u0E25\u0E32 6.00 \u0E41\u0E25\u0E30 18.00 \u0E19.", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), "(\u0E08\u0E33\u0E01\u0E31\u0E14\u0E02\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E23\u0E2D\u0E1A\u0E25\u0E30 5 \u0E41\u0E2A\u0E19\u0E04\u0E19 \u0E23\u0E27\u0E21 1 \u0E25\u0E49\u0E32\u0E19\u0E04\u0E19\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19)"), __jsx("hr", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (ContainerRegister);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = props => __jsx("div", {
  className: "Footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "ft1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "box-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "flexContent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "col",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  className: "logo",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("div", {
  className: "col",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19"), __jsx("div", {
  className: "detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E2D\u0E1B\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19 ", __jsx("span", {
  className: "nowrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "\u201C\u0E40\u0E1B\u0E4B\u0E32\u0E15\u0E31\u0E07\u201D"), " \u0E41\u0E25\u0E30 ", __jsx("span", {
  className: "nowrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "\u201C\u0E16\u0E38\u0E07\u0E40\u0E07\u0E34\u0E19\u201D")), __jsx("div", {
  className: "detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49 Call Center by Krungthai \u0E42\u0E17\u0E23.", __jsx("a", {
  className: "ml-1",
  href: "tel:021111144",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("span", {
  className: "nowrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "0 2111 1144")))), __jsx("div", {
  className: "col",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1C\u0E39\u0E49\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23"), __jsx("div", {
  className: "detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2F"), __jsx("div", {
  className: "detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E42\u0E17\u0E23.", __jsx("a", {
  className: "ml-1",
  href: "tel:022706400",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("span", {
  className: "nowrap",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "0 2270 6400 \u0E01\u0E14 7")))), __jsx("div", {
  className: "col",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  className: "head",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49"), __jsx("div", {
  className: "detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E17\u0E17\u0E17."), __jsx("div", {
  className: "detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "\u0E42\u0E17\u0E23", __jsx("a", {
  className: "ml-1",
  href: "tel:1672",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "1672"))))))), __jsx("div", {
  className: "ft2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("div", {
  className: "box-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: "flexContent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("p", {
  className: "copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Copyright \xA9 2003-2019"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  href: "https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/",
  className: "aFooter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register",
  className: "aFooter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province",
  className: "aFooter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Header = props => __jsx("div", {
  className: "navBar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, props.data.map((item, key) => __jsx("li", {
  key: key,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  href: item.href,
  className: "aNavbar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, item.label)))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderMobile.js":
/*!************************************!*\
  !*** ./components/HeaderMobile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\components\\HeaderMobile.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const HeaderMobile = props => __jsx("div", {
  className: "navBarMobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  className: "navbar-brand",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("img", {
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
})), __jsx("div", {
  id: "nav-icon1",
  toggle: "0",
  onClick: e => {
    let isOn = document.getElementById('nav-icon1').getAttribute("toggle");

    if (isOn == 0) {
      document.getElementById('nav-icon1').classList.add('open');
      document.getElementById('mobileMenu').classList.add('open');
      document.getElementById('nav-icon1').setAttribute("toggle", "1");
    } else {
      document.getElementById('nav-icon1').classList.remove('open');
      document.getElementById('mobileMenu').classList.remove('open');
      document.getElementById('nav-icon1').setAttribute("toggle", "0");
    }
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), __jsx("div", {
  id: "mobileMenu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, props.data.map((item, key) => __jsx("li", {
  key: key,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("a", {
  href: item.href,
  className: "aNavMobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, item.label))))));

/* harmony default export */ __webpack_exports__["default"] = (HeaderMobile);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HeaderMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeaderMobile */ "./components/HeaderMobile.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Banner */ "./components/Banner.js");
/* harmony import */ var _components_ContainerRegister__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContainerRegister */ "./components/ContainerRegister.js");
/* harmony import */ var _components_ContainerDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ContainerDetail */ "./components/ContainerDetail.js");
/* harmony import */ var _components_BoxTAT__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BoxTAT */ "./components/BoxTAT.js");
/* harmony import */ var _components_BoxKTC__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BoxKTC */ "./components/BoxKTC.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "E:\\Programing\\Git\\ywc-homework\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23 \u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49"), __jsx("link", {
  href: "./static/css/styles.css",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("meta", {
  name: "description",
  content: "This page is create for YWC's homework.",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx(_components_HeaderMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
  data: props.navItem,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
  data: props.navItem,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx(_components_ContainerRegister__WEBPACK_IMPORTED_MODULE_6__["default"], {
  data: props.jsonData,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx(_components_ContainerDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
  data: props.jsonData,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx(_components_BoxTAT__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx(_components_BoxKTC__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
  data: props.navItem,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}));

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()('https://panjs.com/ywc.json');
  const data = await res.json();
  return {
    navItem: data.navbarItems,
    jsonData: data,
    test: "asd"
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Programing\Git\ywc-homework\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map