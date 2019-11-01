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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/HeaderMobile.js

var __jsx = external_react_default.a.createElement;

const HeaderMobile = props => __jsx("div", {
  className: "navBarMobile"
}, __jsx("a", {
  href: "#",
  className: "navbar-brand",
  href: "#"
}, __jsx("img", {
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"
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
  }
}, __jsx("span", null), __jsx("span", null), __jsx("span", null)), __jsx("div", {
  id: "mobileMenu"
}, __jsx("ul", null, props.data.map((item, key) => __jsx("li", {
  key: key
}, __jsx("a", {
  href: item.href,
  className: "aNavMobile"
}, item.label))))));

/* harmony default export */ var components_HeaderMobile = (HeaderMobile);
// CONCATENATED MODULE: ./components/Header.js

var Header_jsx = external_react_default.a.createElement;

const Header = props => Header_jsx("div", {
  className: "navBar"
}, Header_jsx("ul", null, props.data.map((item, key) => Header_jsx("li", {
  key: key
}, Header_jsx("a", {
  href: item.href,
  className: "aNavbar"
}, item.label)))));

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/Banner.js

var Banner_jsx = external_react_default.a.createElement;

const Banner_Header = props => Banner_jsx("div", {
  className: "banner"
}, Banner_jsx("div", {
  className: "heroImg he1"
}), Banner_jsx("div", {
  className: "heroImg he2"
}, Banner_jsx("img", {
  alt: "banner",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/banner.png"
})), Banner_jsx("div", {
  className: "heroImg he3"
}));

/* harmony default export */ var Banner = (Banner_Header);
// CONCATENATED MODULE: ./components/ContainerRegister.js

var ContainerRegister_jsx = external_react_default.a.createElement;

const ContainerRegister = props => ContainerRegister_jsx("div", {
  className: "containerRegister"
}, ContainerRegister_jsx("p", null, "\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48"), ContainerRegister_jsx("h1", null, props.data.duration), ContainerRegister_jsx("a", {
  href: "https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/"
}, ContainerRegister_jsx("button", {
  className: "btnRegister"
}, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 \u0E40\u0E1F\u0E2A 2", ContainerRegister_jsx("br", null), "\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 24 \u0E15.\u0E04.62 \u0E27\u0E31\u0E19\u0E25\u0E30 2 \u0E23\u0E2D\u0E1A \u0E40\u0E27\u0E25\u0E32 6.00 \u0E41\u0E25\u0E30 18.00 \u0E19.", ContainerRegister_jsx("br", null), "(\u0E08\u0E33\u0E01\u0E31\u0E14\u0E02\u0E33\u0E19\u0E27\u0E19\u0E1C\u0E39\u0E49\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E23\u0E2D\u0E1A\u0E25\u0E30 5 \u0E41\u0E2A\u0E19\u0E04\u0E19 \u0E23\u0E27\u0E21 1 \u0E25\u0E49\u0E32\u0E19\u0E04\u0E19\u0E15\u0E48\u0E2D\u0E27\u0E31\u0E19)"), ContainerRegister_jsx("hr", null)));

/* harmony default export */ var components_ContainerRegister = (ContainerRegister);
// CONCATENATED MODULE: ./components/ContainerDetail.js

var ContainerDetail_jsx = external_react_default.a.createElement;

const ContainerDetail = props => ContainerDetail_jsx("div", {
  className: "ContainerDetail"
}, ContainerDetail_jsx("div", {
  className: "box-contain"
}, ContainerDetail_jsx("h1", null, "\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E40\u0E2A\u0E23\u0E34\u0E21\u0E01\u0E32\u0E23\u0E1A\u0E23\u0E34\u0E42\u0E20\u0E04", ContainerDetail_jsx("br", null), "\u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u201C\u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49\u201D"), ContainerDetail_jsx("div", {
  className: "detail",
  dangerouslySetInnerHTML: {
    __html: props.data.detail
  }
}), ContainerDetail_jsx("h3", null, "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23"), ContainerDetail_jsx("div", {
  className: "detail ul mt-2"
}, "1. \u0E40\u0E1B\u0E47\u0E19\u0E1A\u0E38\u0E04\u0E04\u0E25\u0E2A\u0E31\u0E0D\u0E0A\u0E32\u0E15\u0E34\u0E44\u0E17\u0E22 \u0E21\u0E35\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E15\u0E31\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19", ContainerDetail_jsx("br", null), "2. \u0E21\u0E35\u0E2D\u0E32\u0E22\u0E38\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48 18 \u0E1B\u0E35\u0E1A\u0E23\u0E34\u0E1A\u0E39\u0E23\u0E13\u0E4C\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B \u0E13 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19", ContainerDetail_jsx("br", null), "3. \u0E21\u0E35\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D\u0E2A\u0E21\u0E32\u0E23\u0E4C\u0E17\u0E42\u0E1F\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E15\u0E48\u0E2D\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E13\u0E2D\u0E34\u0E19\u0E40\u0E17\u0E2D\u0E23\u0E4C\u0E40\u0E19\u0E47\u0E15\u0E41\u0E25\u0E30\u0E21\u0E35\u0E2D\u0E35\u0E40\u0E21\u0E25")));

/* harmony default export */ var components_ContainerDetail = (ContainerDetail);
// CONCATENATED MODULE: ./components/BoxTAT.js

var BoxTAT_jsx = external_react_default.a.createElement;

const BoxTAT = props => BoxTAT_jsx("div", {
  className: "BoxTAT"
}, BoxTAT_jsx("div", {
  className: "box-detail"
}, BoxTAT_jsx("div", {
  className: "item"
}, BoxTAT_jsx("a", {
  href: "tel:021111144"
}, BoxTAT_jsx("img", {
  alt: "SQ",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_KTB_SQ.png"
}))), BoxTAT_jsx("div", {
  className: "item"
}, BoxTAT_jsx("a", {
  href: "tel:022706400"
}, BoxTAT_jsx("img", {
  alt: "CGD",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_CGD_Sq.png"
}))), BoxTAT_jsx("div", {
  className: "item"
}, BoxTAT_jsx("a", {
  href: "tel:1672"
}, BoxTAT_jsx("img", {
  alt: "HOTLINE",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/Banner_TAT_Hotline_Sq.png"
})))));

/* harmony default export */ var components_BoxTAT = (BoxTAT);
// CONCATENATED MODULE: ./components/BoxKTC.js

var BoxKTC_jsx = external_react_default.a.createElement;

const BoxKTC = props => BoxKTC_jsx("div", {
  className: "BoxKTC"
}, BoxKTC_jsx("div", {
  className: "box-detail"
}, BoxKTC_jsx("div", {
  className: "imgList"
}, BoxKTC_jsx("a", {
  href: "https://www.mof.go.th/th/home"
}, BoxKTC_jsx("img", {
  alt: "MOF",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOF.png"
})), BoxKTC_jsx("a", {
  href: "http://www.fpo.go.th"
}, BoxKTC_jsx("img", {
  alt: "FPO",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/FPO.png"
})), BoxKTC_jsx("a", {
  href: "https://www.cgd.go.th"
}, BoxKTC_jsx("img", {
  alt: "CGD",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/CGD.png"
})), BoxKTC_jsx("a", {
  href: "https://www.newcb.ktb.co.th"
}, BoxKTC_jsx("img", {
  alt: "Krungthai",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/Krungthai.png"
})), BoxKTC_jsx("a", {
  href: "https://www.mots.go.th"
}, BoxKTC_jsx("img", {
  alt: "MOTS",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/MOTS.png"
})), BoxKTC_jsx("a", {
  href: "https://thai.tourismthailand.org"
}, BoxKTC_jsx("img", {
  alt: "TAT",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/brand-logo/TAT.png"
})))));

/* harmony default export */ var components_BoxKTC = (BoxKTC);
// CONCATENATED MODULE: ./components/Footer.js

var Footer_jsx = external_react_default.a.createElement;

const Footer = props => Footer_jsx("div", {
  className: "Footer"
}, Footer_jsx("div", {
  className: "ft1"
}, Footer_jsx("div", {
  className: "box-detail"
}, Footer_jsx("div", {
  className: "flexContent"
}, Footer_jsx("div", {
  className: "col"
}, Footer_jsx("img", {
  className: "logo",
  src: "https://www.xn--b3caa1e2a7e2b0h2be.com/img/logo/footer.png"
})), Footer_jsx("div", {
  className: "col"
}, Footer_jsx("div", {
  className: "head"
}, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19"), Footer_jsx("div", {
  className: "detail"
}, "\u0E01\u0E32\u0E23\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34 \u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E41\u0E2D\u0E1B\u0E1E\u0E25\u0E34\u0E40\u0E04\u0E0A\u0E31\u0E48\u0E19 ", Footer_jsx("span", {
  className: "nowrap"
}, "\u201C\u0E40\u0E1B\u0E4B\u0E32\u0E15\u0E31\u0E07\u201D"), " \u0E41\u0E25\u0E30 ", Footer_jsx("span", {
  className: "nowrap"
}, "\u201C\u0E16\u0E38\u0E07\u0E40\u0E07\u0E34\u0E19\u201D")), Footer_jsx("div", {
  className: "detail"
}, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49 Call Center by Krungthai \u0E42\u0E17\u0E23.", Footer_jsx("a", {
  className: "ml-1",
  href: "tel:021111144"
}, Footer_jsx("span", {
  className: "nowrap"
}, "0 2111 1144")))), Footer_jsx("div", {
  className: "col"
}, Footer_jsx("div", {
  className: "head"
}, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1C\u0E39\u0E49\u0E1B\u0E23\u0E30\u0E01\u0E2D\u0E1A\u0E01\u0E32\u0E23"), Footer_jsx("div", {
  className: "detail"
}, "\u0E40\u0E07\u0E37\u0E48\u0E2D\u0E19\u0E44\u0E02\u0E41\u0E25\u0E30\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23\u0E2F"), Footer_jsx("div", {
  className: "detail"
}, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E42\u0E17\u0E23.", Footer_jsx("a", {
  className: "ml-1",
  href: "tel:022706400"
}, Footer_jsx("span", {
  className: "nowrap"
}, "0 2270 6400 \u0E01\u0E14 7")))), Footer_jsx("div", {
  className: "col"
}, Footer_jsx("div", {
  className: "head"
}, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49"), Footer_jsx("div", {
  className: "detail"
}, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D \u0E17\u0E17\u0E17."), Footer_jsx("div", {
  className: "detail"
}, "\u0E42\u0E17\u0E23", Footer_jsx("a", {
  className: "ml-1",
  href: "tel:1672"
}, Footer_jsx("span", null, "1672"))))))), Footer_jsx("div", {
  className: "ft2"
}, Footer_jsx("div", {
  className: "box-detail"
}, Footer_jsx("div", {
  className: "flexContent"
}, Footer_jsx("p", {
  className: "copyright"
}, "Copyright \xA9 2003-2019"), Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx("a", {
  href: "https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/",
  className: "aFooter"
}, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23")), Footer_jsx("li", null, Footer_jsx("a", {
  href: "https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register",
  className: "aFooter"
}, "\u0E02\u0E31\u0E49\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E32\u0E23\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")), Footer_jsx("li", null, Footer_jsx("a", {
  href: "https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province",
  className: "aFooter"
}, "\u0E23\u0E32\u0E22\u0E0A\u0E37\u0E48\u0E2D\u0E23\u0E49\u0E32\u0E19\u0E04\u0E49\u0E32\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23")))))));

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;











const Index = props => pages_jsx("div", null, pages_jsx(head_default.a, null, pages_jsx("title", null, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E40\u0E02\u0E49\u0E32\u0E23\u0E48\u0E27\u0E21\u0E21\u0E32\u0E15\u0E23\u0E01\u0E32\u0E23 \u0E0A\u0E34\u0E21\u0E0A\u0E49\u0E2D\u0E1B\u0E43\u0E0A\u0E49"), pages_jsx("link", {
  href: "./static/css/styles.css",
  rel: "stylesheet"
}), pages_jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
}), pages_jsx("meta", {
  name: "description",
  content: "This page is create for YWC's homework."
})), pages_jsx(components_HeaderMobile, {
  data: props.navItem
}), pages_jsx(components_Header, {
  data: props.navItem
}), pages_jsx(Banner, null), pages_jsx(components_ContainerRegister, {
  data: props.jsonData
}), pages_jsx(components_ContainerDetail, {
  data: props.jsonData
}), pages_jsx(components_BoxTAT, null), pages_jsx(components_BoxKTC, null), pages_jsx(components_Footer, {
  data: props.navItem
}));

Index.getInitialProps = async function () {
  const res = await external_isomorphic_unfetch_default()('https://panjs.com/ywc.json');
  const data = await res.json();
  return {
    navItem: data.navbarItems,
    jsonData: data,
    test: "asd"
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });