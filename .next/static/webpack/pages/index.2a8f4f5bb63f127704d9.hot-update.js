webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/core/Header/U28/V1/Profile.js":
/*!******************************************************!*\
  !*** ./src/components/core/Header/U28/V1/Profile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "E:\\projectNext\\src\\components\\core\\Header\\U28\\V1\\Profile.js",
    _this = undefined,
    _s = $RefreshSig$();



var Profile = function Profile(_ref) {
  _s();

  var isProfActive = _ref.isProfActive,
      updateProfileState = _ref.updateProfileState;

  /* Declarations */
  var profileRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var location = '';

  if (true) {
    location = window.location.href;
  }
  /* States */


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      userInfo = _useState[0],
      setuserInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isRTL = _useState2[0],
      setRTLFix = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      ssoURL = _useState3[0],
      setssoURL = _useState3[1];
  /* Hooks */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var sso = "https://www.oracle.com/webapps/redirect/signon?nexturl=".concat(window.location.href);
    setssoURL(sso);
    handleResize(); // setuserInfo(getUserInfo());
    // add when mounted

    document.addEventListener('mousedown', handleProfileClickOutside);
    window.addEventListener('resize', handleResize); // return function to be called when unmounted

    return function () {
      document.removeEventListener('mousedown', handleProfileClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var handleResize = function handleResize() {
    var u28profilebtn = profileRef.current.querySelector('.u28prof');
    var u28profiledropdown = profileRef.current.querySelector('.u28-profilew1');
    var u28profiledropdownWidth = u28profiledropdown.clientWidth;

    if (u28profiledropdown.offsetParent === null) {
      u28profiledropdownWidth = parseFloat(window.getComputedStyle(u28profiledropdown).getPropertyValue('width'));
    }

    var btnwidth = u28profilebtn.clientWidth;
    var u28profilebtnOffset = u28profilebtn.getBoundingClientRect();
    var profileright = window.innerWidth - (u28profilebtnOffset.left + btnwidth); // Fix for RTL

    if (profileright + btnwidth <= u28profiledropdownWidth - 20) {
      setRTLFix(true);
    }

    if (profileright + btnwidth > u28profiledropdownWidth - 20) {
      setRTLFix(false);
    }
  }; // Hide/Show Profile links


  var toggleProfilePopup = function toggleProfilePopup(event) {
    event.preventDefault();
    var newState = !isProfActive;
    updateProfileState(newState);
  }; // Close profile popup when click outside


  var handleProfileClickOutside = function handleProfileClickOutside(event) {
    if (profileRef.current.contains(event.target)) {
      // inside click
      return;
    } // outside click


    closePopup();
  }; // Hide Profile Popup


  var closePopup = function closePopup() {
    updateProfileState(false);
  }; // Back Click Handler In Mobile View


  var onBackClick = function onBackClick(event) {
    event.preventDefault();
    closePopup();
  }; // Signout Handler


  var handleSignOut = function handleSignOut(event) {
    event.preventDefault();
    ssoSignOut();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: ['u28-profile', userInfo && userInfo.guid ? 'loggedin' : ''].join(' '),
    tabIndex: "-1",
    ref: profileRef,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      href: "#",
      className: "u28prof",
      tabIndex: "0",
      "aria-controls": "u28-profilew1",
      "aria-label": "Sign In",
      onClick: toggleProfilePopup,
      "aria-haspopup": "false",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "acttxt",
        tabIndex: "-1",
        children: "View Accounts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        tabIndex: "-1",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: ['u28-profilew1', 'u28fadeIn', 'right'].join(' '),
      tabIndex: isProfActive ? '0' : '-1',
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "u28actbck u28back",
        onClick: onBackClick,
        children: "Back"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "u28acttitle",
        children: "Oracle Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "u28l-out",
        children: [userInfo && userInfo.guid ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: ssoURL,
            "data-lbl": "profile:sign-in-account",
            className: "u28btn1",
            tabIndex: isProfActive ? '0' : '-1',
            children: "Sign-In"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://profile.oracle.com/myprofile/account/create-account.jspx",
            "data-lbl": "profile:create-account",
            className: "u28btn2",
            tabIndex: isProfActive ? '0' : '-1',
            children: "Create an Account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "u28l-in",
        children: [userInfo.firstname && userInfo.firstname !== 'NOT_FOUND' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl=".concat(location),
            "data-lbl": "profile:user-account",
            tabIndex: isProfActive ? '0' : '-1',
            children: [userInfo.firstname, userInfo.lastname && userInfo.lastname !== 'NOT_FOUND' ? " ".concat(userInfo.lastname) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/corporate/contact/help.html",
            "data-lbl": "help",
            tabIndex: isProfActive ? '0' : '-1',
            children: "Help"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "#",
            onClick: handleSignOut,
            id: "u28pfile-sout",
            "data-lbl": "signout",
            tabIndex: isProfActive ? '0' : '-1',
            children: "Sign Out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "u28-profilew2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "u28acttitle",
          children: "Cloud Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/cloud/sign-in.html",
          "data-lbl": "go-to-cloud-website",
          className: "u28cloudbg",
          tabIndex: isProfActive ? '0' : '-1',
          children: ["Sign in to ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: " Cloud"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 36
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/cloud/free/?source=:ow:o:h:nav:OHP0625ViewAccountsButton&intcmp=:ow:o:h:nav:OHP0625ViewAccountsButton",
          className: "u28btn2",
          "data-lbl": "cta-0625-nav-header-accounts-free-tier-oci",
          children: "Sign Up for Cloud Free Tier"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 9
  }, _this);
};

_s(Profile, "uOs99PqEb0MYpZ+MJjCNNEsaFSg=");

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29yZS9IZWFkZXIvVTI4L1YxL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImlzUHJvZkFjdGl2ZSIsInVwZGF0ZVByb2ZpbGVTdGF0ZSIsInByb2ZpbGVSZWYiLCJ1c2VSZWYiLCJsb2NhdGlvbiIsIndpbmRvdyIsImhyZWYiLCJ1c2VTdGF0ZSIsInVzZXJJbmZvIiwic2V0dXNlckluZm8iLCJpc1JUTCIsInNldFJUTEZpeCIsInNzb1VSTCIsInNldHNzb1VSTCIsInVzZUVmZmVjdCIsInNzbyIsImhhbmRsZVJlc2l6ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByb2ZpbGVDbGlja091dHNpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidTI4cHJvZmlsZWJ0biIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwidTI4cHJvZmlsZWRyb3Bkb3duIiwidTI4cHJvZmlsZWRyb3Bkb3duV2lkdGgiLCJjbGllbnRXaWR0aCIsIm9mZnNldFBhcmVudCIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJ0bndpZHRoIiwidTI4cHJvZmlsZWJ0bk9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByb2ZpbGVyaWdodCIsImlubmVyV2lkdGgiLCJsZWZ0IiwidG9nZ2xlUHJvZmlsZVBvcHVwIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1N0YXRlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZVBvcHVwIiwib25CYWNrQ2xpY2siLCJoYW5kbGVTaWduT3V0Iiwic3NvU2lnbk91dCIsImd1aWQiLCJqb2luIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQTBDO0FBQUE7O0FB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QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFVSTtBQUNJLGNBQUksRUFBQyx3R0FEVDtBQUVJLG1CQUFTLEVBQUMsU0FGZDtBQUdJLHNCQUFTLDRDQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRko7QUF5R0gsQ0E1TEQ7O0dBQU1ELE87O0tBQUFBLE87QUErTFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhOGY0ZjViYjYzZjEyNzcwNGQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoeyBpc1Byb2ZBY3RpdmUsIHVwZGF0ZVByb2ZpbGVTdGF0ZSB9KSA9PiB7XHJcblxyXG4gICAgLyogRGVjbGFyYXRpb25zICovXHJcbiAgICBjb25zdCBwcm9maWxlUmVmID0gdXNlUmVmKCk7XHJcbiAgICBsZXQgbG9jYXRpb24gPSAnJztcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG4gICAgLyogU3RhdGVzICovXHJcbiAgICBjb25zdCBbdXNlckluZm8sIHNldHVzZXJJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc1JUTCwgc2V0UlRMRml4XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzc29VUkwsIHNldHNzb1VSTF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLyogSG9va3MgKi9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3NvID0gYGh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vd2ViYXBwcy9yZWRpcmVjdC9zaWdub24/bmV4dHVybD0ke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XHJcbiAgICAgICAgc2V0c3NvVVJMKHNzbyk7XHJcbiAgICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgLy8gc2V0dXNlckluZm8oZ2V0VXNlckluZm8oKSk7XHJcbiAgICAgICAgLy8gYWRkIHdoZW4gbW91bnRlZFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVByb2ZpbGVDbGlja091dHNpZGUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIC8vIHJldHVybiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB1bm1vdW50ZWRcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVByb2ZpbGVDbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdTI4cHJvZmlsZWJ0biA9IHByb2ZpbGVSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcudTI4cHJvZicpO1xyXG5cclxuICAgICAgICBjb25zdCB1Mjhwcm9maWxlZHJvcGRvd24gPSBwcm9maWxlUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignLnUyOC1wcm9maWxldzEnKTtcclxuICAgICAgICBsZXQgdTI4cHJvZmlsZWRyb3Bkb3duV2lkdGggPSB1Mjhwcm9maWxlZHJvcGRvd24uY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKHUyOHByb2ZpbGVkcm9wZG93bi5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdTI4cHJvZmlsZWRyb3Bkb3duV2lkdGggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHUyOHByb2ZpbGVkcm9wZG93bikuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ0bndpZHRoID0gdTI4cHJvZmlsZWJ0bi5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCB1Mjhwcm9maWxlYnRuT2Zmc2V0ID0gdTI4cHJvZmlsZWJ0bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtICh1Mjhwcm9maWxlYnRuT2Zmc2V0LmxlZnQgKyBidG53aWR0aCk7XHJcbiAgICAgICAgLy8gRml4IGZvciBSVExcclxuICAgICAgICBpZiAocHJvZmlsZXJpZ2h0ICsgYnRud2lkdGggPD0gdTI4cHJvZmlsZWRyb3Bkb3duV2lkdGggLSAyMCkge1xyXG4gICAgICAgICAgICBzZXRSVExGaXgodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9maWxlcmlnaHQgKyBidG53aWR0aCA+IHUyOHByb2ZpbGVkcm9wZG93bldpZHRoIC0gMjApIHtcclxuICAgICAgICAgICAgc2V0UlRMRml4KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgIC8vIEhpZGUvU2hvdyBQcm9maWxlIGxpbmtzXHJcbiAgICAgY29uc3QgdG9nZ2xlUHJvZmlsZVBvcHVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9ICFpc1Byb2ZBY3RpdmU7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZVN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH07XHJcbiAgICAvLyBDbG9zZSBwcm9maWxlIHBvcHVwIHdoZW4gY2xpY2sgb3V0c2lkZVxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9maWxlUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAvLyBpbnNpZGUgY2xpY2tcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdXRzaWRlIGNsaWNrXHJcbiAgICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBIaWRlIFByb2ZpbGUgUG9wdXBcclxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZVN0YXRlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQmFjayBDbGljayBIYW5kbGVyIEluIE1vYmlsZSBWaWV3XHJcbiAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcHVwKCk7XHJcbiAgfTsgXHJcbiAgIC8vIFNpZ25vdXQgSGFuZGxlclxyXG4gICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3NvU2lnbk91dCgpO1xyXG4gIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtbJ3UyOC1wcm9maWxlJyx1c2VySW5mbyAmJiB1c2VySW5mby5ndWlkID8gJ2xvZ2dlZGluJyA6ICcnXS5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxyXG4gICAgICAgICAgICByZWY9e3Byb2ZpbGVSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidTI4cHJvZlwiXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cInUyOC1wcm9maWxldzFcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNpZ24gSW5cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUHJvZmlsZVBvcHVwfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cImZhbHNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3R0eHRcIiB0YWJJbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmlldyBBY2NvdW50c1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiB0YWJJbmRleD1cIi0xXCI+U2lnbiBJbjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1sndTI4LXByb2ZpbGV3MScsICd1MjhmYWRlSW4nLCAncmlnaHQnXS5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNQcm9mQWN0aXZlID8gJzAnIDogJy0xJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidTI4YWN0YmNrIHUyOGJhY2tcIiBvbkNsaWNrPXtvbkJhY2tDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInUyOGFjdHRpdGxlXCI+T3JhY2xlIEFjY291bnQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidTI4bC1vdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8gJiYgdXNlckluZm8uZ3VpZCA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17c3NvVVJMfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbGJsPVwicHJvZmlsZTpzaWduLWluLWFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInUyOGJ0bjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc1Byb2ZBY3RpdmUgPyAnMCcgOiAnLTEnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24tSW5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wcm9maWxlLm9yYWNsZS5jb20vbXlwcm9maWxlL2FjY291bnQvY3JlYXRlLWFjY291bnQuanNweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWxibD1cInByb2ZpbGU6Y3JlYXRlLWFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidTI4YnRuMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNQcm9mQWN0aXZlID8gJzAnIDogJy0xJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGFuIEFjY291bnRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInUyOGwtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8uZmlyc3RuYW1lICYmIHVzZXJJbmZvLmZpcnN0bmFtZSAhPT0gJ05PVF9GT1VORCcgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3Byb2ZpbGUub3JhY2xlLmNvbS9teXByb2ZpbGUvYWNjb3VudC9zZWN1cmUvdXBkYXRlLWFjY291bnQuanNweD9uZXh0dXJsPSR7bG9jYXRpb259YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWxibD1cInByb2ZpbGU6dXNlci1hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNQcm9mQWN0aXZlID8gJzAnIDogJy0xJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlckluZm8uZmlyc3RuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VySW5mby5sYXN0bmFtZSAmJiB1c2VySW5mby5sYXN0bmFtZSAhPT0gJ05PVF9GT1VORCcgPyBgICR7dXNlckluZm8ubGFzdG5hbWV9YCA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29ycG9yYXRlL2NvbnRhY3QvaGVscC5odG1sXCIgZGF0YS1sYmw9XCJoZWxwXCIgdGFiSW5kZXg9e2lzUHJvZkFjdGl2ZSA/ICcwJyA6ICctMSd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVscFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1MjhwZmlsZS1zb3V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbGJsPVwic2lnbm91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aXNQcm9mQWN0aXZlID8gJzAnIDogJy0xJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1MjgtcHJvZmlsZXcyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidTI4YWN0dGl0bGVcIj5DbG91ZCBBY2NvdW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY2xvdWQvc2lnbi1pbi5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sYmw9XCJnby10by1jbG91ZC13ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidTI4Y2xvdWRiZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpc1Byb2ZBY3RpdmUgPyAnMCcgOiAnLTEnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBpbiB0byA8c3Bhbj4gQ2xvdWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY2xvdWQvZnJlZS8/c291cmNlPTpvdzpvOmg6bmF2Ok9IUDA2MjVWaWV3QWNjb3VudHNCdXR0b24maW50Y21wPTpvdzpvOmg6bmF2Ok9IUDA2MjVWaWV3QWNjb3VudHNCdXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1MjhidG4yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sYmw9XCJjdGEtMDYyNS1uYXYtaGVhZGVyLWFjY291bnRzLWZyZWUtdGllci1vY2lcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2lnbiBVcCBmb3IgQ2xvdWQgRnJlZSBUaWVyXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9