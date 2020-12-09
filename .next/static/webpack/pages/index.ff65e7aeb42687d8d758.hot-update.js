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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    children: "Header"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 6
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29yZS9IZWFkZXIvVTI4L1YxL1Byb2ZpbGUuanMiXSwibmFtZXMiOlsiUHJvZmlsZSIsImlzUHJvZkFjdGl2ZSIsInVwZGF0ZVByb2ZpbGVTdGF0ZSIsInByb2ZpbGVSZWYiLCJ1c2VSZWYiLCJsb2NhdGlvbiIsIndpbmRvdyIsImhyZWYiLCJ1c2VTdGF0ZSIsInVzZXJJbmZvIiwic2V0dXNlckluZm8iLCJpc1JUTCIsInNldFJUTEZpeCIsInNzb1VSTCIsInNldHNzb1VSTCIsInVzZUVmZmVjdCIsInNzbyIsImhhbmRsZVJlc2l6ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVByb2ZpbGVDbGlja091dHNpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidTI4cHJvZmlsZWJ0biIsImN1cnJlbnQiLCJxdWVyeVNlbGVjdG9yIiwidTI4cHJvZmlsZWRyb3Bkb3duIiwidTI4cHJvZmlsZWRyb3Bkb3duV2lkdGgiLCJjbGllbnRXaWR0aCIsIm9mZnNldFBhcmVudCIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJ0bndpZHRoIiwidTI4cHJvZmlsZWJ0bk9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByb2ZpbGVyaWdodCIsImlubmVyV2lkdGgiLCJsZWZ0IiwidG9nZ2xlUHJvZmlsZVBvcHVwIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1N0YXRlIiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjbG9zZVBvcHVwIiwib25CYWNrQ2xpY2siLCJoYW5kbGVTaWduT3V0Iiwic3NvU2lnbk91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMEM7QUFBQTs7QUFBQSxNQUF2Q0MsWUFBdUMsUUFBdkNBLFlBQXVDO0FBQUEsTUFB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Qm1CLFFBQW5CLENBQTRCSCxLQUFLLENBQUNJLE1BQWxDLENBQUosRUFBK0M7QUFDM0M7QUFDQTtBQUNILEtBSndDLENBS3pDOzs7QUFDQUMsY0FBVTtBQUNiLEdBUEQsQ0F4RHNELENBa0V0RDs7O0FBQ0EsTUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQjFDLHNCQUFrQixDQUFDLEtBQUQsQ0FBbEI7QUFDSCxHQUZELENBbkVzRCxDQXVFdEQ7OztBQUNGLE1BQU0yQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTixLQUFELEVBQVc7QUFDN0JBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBSSxjQUFVO0FBQ1gsR0FIRCxDQXhFd0QsQ0E0RXZEOzs7QUFDQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNQLEtBQUQsRUFBVztBQUNoQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FPLGNBQVU7QUFDWCxHQUhBOztBQU1DLHNCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFJSCxDQXZGRDs7R0FBTS9DLE87O0tBQUFBLE87QUEwRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmNjVlN2FlYjQyNjg3ZDhkNzU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoeyBpc1Byb2ZBY3RpdmUsIHVwZGF0ZVByb2ZpbGVTdGF0ZSB9KSA9PiB7XHJcblxyXG4gICAgLyogRGVjbGFyYXRpb25zICovXHJcbiAgICBjb25zdCBwcm9maWxlUmVmID0gdXNlUmVmKCk7XHJcbiAgICBsZXQgbG9jYXRpb24gPSAnJztcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG4gICAgLyogU3RhdGVzICovXHJcbiAgICBjb25zdCBbdXNlckluZm8sIHNldHVzZXJJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtpc1JUTCwgc2V0UlRMRml4XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzc29VUkwsIHNldHNzb1VSTF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLyogSG9va3MgKi9cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3NvID0gYGh0dHBzOi8vd3d3Lm9yYWNsZS5jb20vd2ViYXBwcy9yZWRpcmVjdC9zaWdub24/bmV4dHVybD0ke3dpbmRvdy5sb2NhdGlvbi5ocmVmfWA7XHJcbiAgICAgICAgc2V0c3NvVVJMKHNzbyk7XHJcbiAgICAgICAgaGFuZGxlUmVzaXplKCk7XHJcbiAgICAgICAgLy8gc2V0dXNlckluZm8oZ2V0VXNlckluZm8oKSk7XHJcbiAgICAgICAgLy8gYWRkIHdoZW4gbW91bnRlZFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVByb2ZpbGVDbGlja091dHNpZGUpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIC8vIHJldHVybiBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB1bm1vdW50ZWRcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVByb2ZpbGVDbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdTI4cHJvZmlsZWJ0biA9IHByb2ZpbGVSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCcudTI4cHJvZicpO1xyXG5cclxuICAgICAgICBjb25zdCB1Mjhwcm9maWxlZHJvcGRvd24gPSBwcm9maWxlUmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcignLnUyOC1wcm9maWxldzEnKTtcclxuICAgICAgICBsZXQgdTI4cHJvZmlsZWRyb3Bkb3duV2lkdGggPSB1Mjhwcm9maWxlZHJvcGRvd24uY2xpZW50V2lkdGg7XHJcbiAgICAgICAgaWYgKHUyOHByb2ZpbGVkcm9wZG93bi5vZmZzZXRQYXJlbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdTI4cHJvZmlsZWRyb3Bkb3duV2lkdGggPSBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHUyOHByb2ZpbGVkcm9wZG93bikuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ0bndpZHRoID0gdTI4cHJvZmlsZWJ0bi5jbGllbnRXaWR0aDtcclxuICAgICAgICBjb25zdCB1Mjhwcm9maWxlYnRuT2Zmc2V0ID0gdTI4cHJvZmlsZWJ0bi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBwcm9maWxlcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtICh1Mjhwcm9maWxlYnRuT2Zmc2V0LmxlZnQgKyBidG53aWR0aCk7XHJcbiAgICAgICAgLy8gRml4IGZvciBSVExcclxuICAgICAgICBpZiAocHJvZmlsZXJpZ2h0ICsgYnRud2lkdGggPD0gdTI4cHJvZmlsZWRyb3Bkb3duV2lkdGggLSAyMCkge1xyXG4gICAgICAgICAgICBzZXRSVExGaXgodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9maWxlcmlnaHQgKyBidG53aWR0aCA+IHUyOHByb2ZpbGVkcm9wZG93bldpZHRoIC0gMjApIHtcclxuICAgICAgICAgICAgc2V0UlRMRml4KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgIC8vIEhpZGUvU2hvdyBQcm9maWxlIGxpbmtzXHJcbiAgICAgY29uc3QgdG9nZ2xlUHJvZmlsZVBvcHVwID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9ICFpc1Byb2ZBY3RpdmU7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZVN0YXRlKG5ld1N0YXRlKTtcclxuICAgIH07XHJcbiAgICAvLyBDbG9zZSBwcm9maWxlIHBvcHVwIHdoZW4gY2xpY2sgb3V0c2lkZVxyXG4gICAgY29uc3QgaGFuZGxlUHJvZmlsZUNsaWNrT3V0c2lkZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9maWxlUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAvLyBpbnNpZGUgY2xpY2tcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdXRzaWRlIGNsaWNrXHJcbiAgICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBIaWRlIFByb2ZpbGUgUG9wdXBcclxuICAgIGNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdXBkYXRlUHJvZmlsZVN0YXRlKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQmFjayBDbGljayBIYW5kbGVyIEluIE1vYmlsZSBWaWV3XHJcbiAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjbG9zZVBvcHVwKCk7XHJcbiAgfTsgXHJcbiAgIC8vIFNpZ25vdXQgSGFuZGxlclxyXG4gICBjb25zdCBoYW5kbGVTaWduT3V0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3NvU2lnbk91dCgpO1xyXG4gIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgPGgxPkhlYWRlcjwvaDE+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiXSwic291cmNlUm9vdCI6IiJ9