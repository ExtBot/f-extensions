module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/AuthyModal.js":
/*!********************************************!*\
  !*** ./src/forum/components/AuthyModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthyModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _TwoFactorModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TwoFactorModal */ "./src/forum/components/TwoFactorModal.js");
/* harmony import */ var _RecoveryModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RecoveryModal */ "./src/forum/components/RecoveryModal.js");
/* harmony import */ var _Countries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Countries */ "./src/forum/components/Countries.js");
/* harmony import */ var _PhoneModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PhoneModal */ "./src/forum/components/PhoneModal.js");














var AuthyModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AuthyModal, _Modal);

  function AuthyModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = AuthyModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.twoFactorCode = m.prop('');
    this.phone = m.prop('');
    this.enabled = m.prop(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.twofa_enabled());
    $.getScript('https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/master/src/jquery.mask.js', function () {
      $('#phone').mask('(000) 000-0000');
      $('#code').mask('AAA-AAA', {
        placeholder: '   -   '
      });
    });
    this.country = {
      name: 'United States of America',
      mcode: '+1'
    };
  };

  _proto.className = function className() {
    return 'TwoFactorModal Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.twofactor_title');
  };

  _proto.countryItems = function countryItems() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    items.add('sort', flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      buttonClassName: 'Button FormControl',
      menuClassName: 'Country-Dropdown-actual',
      label: this.country.name,
      children: Object(_Countries__WEBPACK_IMPORTED_MODULE_11__["default"])().map(function (country) {
        var active = _this.country === country;
        return flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
          children: country.name,
          icon: active ? 'check' : true,
          onclick: function onclick() {
            _this.country = country;
          },
          active: active
        });
      })
    }));
    return items;
  };

  _proto.content = function content(user) {
    var _this2 = this;

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("h2", {
      style: "text-align: center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.authy_heading')), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.twillio_enabled === "1" ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary Switch-button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _PhoneModal__WEBPACK_IMPORTED_MODULE_12__["default"]());
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.stPhone')
    }) : '', flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary Switch-button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _TwoFactorModal__WEBPACK_IMPORTED_MODULE_9__["default"](_this2.user));
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.stTOTP')
    }), m("div", {
      style: "text-align: center",
      className: "helpText Submit-Button"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.helpAuthy'))), this.enabled() !== 5 ? m("div", {
      className: "Form-group"
    }, m("ul", {
      className: "Country-dropdown"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(this.countryItems().toArray())), m("input", {
      type: "text",
      id: "phone",
      oninput: m.withAttr('value', this.phone),
      className: "FormControl Phone-Input"
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
          method: 'POST',
          data: {
            'step': 5,
            'countryCode': _this2.country.mcode,
            'phone': _this2.phone().replace(/[- )(]/g, '')
          }
        });

        _this2.enabled(5);

        m.redraw();
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.otSetup')
    })) : m("div", null, m("input", {
      type: "text",
      id: "code",
      style: "text-transform: uppercase;",
      oninput: m.withAttr('value', this.twoFactorCode),
      className: "FormControl"
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary TwoFactor-button',
      loading: this.loading,
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
          method: 'POST',
          data: {
            'step': 6,
            'code': _this2.twoFactorCode()
          }
        }).then(function (response) {
          var data = response.data.id;

          if (data === 'IncorrectCode') {
            _this2.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
              type: 'error',
              children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.incorrect_2fa')
            });
            m.redraw();
          } else {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(_this2.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
              type: 'success',
              children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.2fa_enabled')
            }));
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _RecoveryModal__WEBPACK_IMPORTED_MODULE_10__["default"]({
              data: data
            }));
          }
        });
        _this2.loading = false;
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.button')
    }))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    this.alert = null;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
      method: 'POST',
      data: {
        'step': 5,
        'code': this.twoFactorCode()
      },
      errorHandler: this.onerror.bind(this)
    }).then(function (response) {
      console.log(response);
      var data = response.data.id;

      if (data === 'IncorrectCode') {
        _this3.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'error',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.incorrect_2fa')
        });
        m.redraw();
      } else {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(_this3.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'success',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.2fa_enabled')
        }));
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _RecoveryModal__WEBPACK_IMPORTED_MODULE_10__["default"]({
          data: data
        }));
      }
    });
    this.loading = false;
  };

  return AuthyModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6___default.a);



/***/ }),

/***/ "./src/forum/components/Countries.js":
/*!*******************************************!*\
  !*** ./src/forum/components/Countries.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogInFactorModal; });
function LogInFactorModal() {
  return [{
    name: "United States of America",
    mcode: "+1"
  }, {
    name: "United Kingdom",
    mcode: "+44"
  }, {
    name: "Algeria",
    mcode: "+213"
  }, {
    name: "Andorra",
    mcode: "+376"
  }, {
    name: "Angola",
    mcode: "+244"
  }, {
    name: "Anguilla",
    mcode: "+1264"
  }, {
    name: "Antigua & Barbuda",
    mcode: "+1268"
  }, {
    name: "Argentina",
    mcode: "+54"
  }, {
    name: "Armenia",
    mcode: "+374"
  }, {
    name: "Aruba",
    mcode: "+297"
  }, {
    name: "Australia",
    mcode: "+61"
  }, {
    name: "Austria",
    mcode: "+43"
  }, {
    name: "Azerbaijan",
    mcode: "+994"
  }, {
    name: "Bahamas",
    mcode: "+1242"
  }, {
    name: "Bahrain",
    mcode: "+973"
  }, {
    name: "Bangladesh",
    mcode: "+880"
  }, {
    name: "Barbados",
    mcode: "+1246"
  }, {
    name: "Belarus",
    mcode: "+375"
  }, {
    name: "Belgium",
    mcode: "+32"
  }, {
    name: "Belize",
    mcode: "+501"
  }, {
    name: "Benin",
    mcode: "+229"
  }, {
    name: "Bermuda",
    mcode: "+1441"
  }, {
    name: "Bhutan",
    mcode: "+975"
  }, {
    name: "Bolivia",
    mcode: "+591"
  }, {
    name: "Bosnia Herzegovina",
    mcode: "+387"
  }, {
    name: "Botswana",
    mcode: "+267"
  }, {
    name: "Brazil",
    mcode: "+55"
  }, {
    name: "Brunei",
    mcode: "+673"
  }, {
    name: "Bulgaria",
    mcode: "+359"
  }, {
    name: "Burkina Faso",
    mcode: "+226"
  }, {
    name: "Burundi",
    mcode: "+257"
  }, {
    name: "Cambodia",
    mcode: "+855"
  }, {
    name: "Cameroon",
    mcode: "+237"
  }, {
    name: "Canada",
    mcode: "+1"
  }, {
    name: "Cape Verde Islands",
    mcode: "+238"
  }, {
    name: "Cayman Islands",
    mcode: "+1345"
  }, {
    name: "Central African Republic",
    mcode: "+236"
  }, {
    name: "Chile",
    mcode: "+56"
  }, {
    name: "China",
    mcode: "+86"
  }, {
    name: "Colombia",
    mcode: "+57"
  }, {
    name: "Comoros",
    mcode: "+269"
  }, {
    name: "Congo",
    mcode: "+242"
  }, {
    name: "Cook Islands",
    mcode: "+682"
  }, {
    name: "Costa Rica",
    mcode: "+506"
  }, {
    name: "Croatia",
    mcode: "+385"
  }, {
    name: "Cuba",
    mcode: "+53"
  }, {
    name: "Cyprus - North",
    mcode: "+90"
  }, {
    name: "Cyprus - South",
    mcode: "+357"
  }, {
    name: "Czech Republic",
    mcode: "+420"
  }, {
    name: "Denmark",
    mcode: "+45"
  }, {
    name: "Djibouti",
    mcode: "+253"
  }, {
    name: "Dominica",
    mcode: "+1809"
  }, {
    name: "Dominican Republic",
    mcode: "+1809"
  }, {
    name: "Ecuador",
    mcode: "+593"
  }, {
    name: "Egypt",
    mcode: "+20"
  }, {
    name: "El Salvador",
    mcode: "+503"
  }, {
    name: "Equatorial Guinea",
    mcode: "+240"
  }, {
    name: "Eritrea",
    mcode: "+291"
  }, {
    name: "Estonia",
    mcode: "+372"
  }, {
    name: "Ethiopia",
    mcode: "+251"
  }, {
    name: "Falkland Islands",
    mcode: "+500"
  }, {
    name: "Faroe Islands",
    mcode: "+298"
  }, {
    name: "Fiji",
    mcode: "+679"
  }, {
    name: "Finland",
    mcode: "+358"
  }, {
    name: "France",
    mcode: "+33"
  }, {
    name: "French Guiana",
    mcode: "+594"
  }, {
    name: "French Polynesia",
    mcode: "+689"
  }, {
    name: "Gabon",
    mcode: "+241"
  }, {
    name: "Gambia",
    mcode: "+220"
  }, {
    name: "Georgia",
    mcode: "+7880"
  }, {
    name: "Germany",
    mcode: "+49"
  }, {
    name: "Ghana",
    mcode: "+233"
  }, {
    name: "Gibraltar",
    mcode: "+350"
  }, {
    name: "Greece",
    mcode: "+30"
  }, {
    name: "Greenland",
    mcode: "+299"
  }, {
    name: "Grenada",
    mcode: "+1473"
  }, {
    name: "Guadeloupe",
    mcode: "+590"
  }, {
    name: "Guam",
    mcode: "+671"
  }, {
    name: "Guatemala",
    mcode: "+502"
  }, {
    name: "Guinea",
    mcode: "+224"
  }, {
    name: "Guinea - Bissau",
    mcode: "+245"
  }, {
    name: "Guyana",
    mcode: "+592"
  }, {
    name: "Haiti",
    mcode: "+509"
  }, {
    name: "Honduras",
    mcode: "+504"
  }, {
    name: "Hong Kong",
    mcode: "+852"
  }, {
    name: "Hungary",
    mcode: "+36"
  }, {
    name: "Iceland",
    mcode: "+354"
  }, {
    name: "India",
    mcode: "+91"
  }, {
    name: "Indonesia",
    mcode: "+62"
  }, {
    name: "Iraq",
    mcode: "+964"
  }, {
    name: "Iran",
    mcode: "+98"
  }, {
    name: "Ireland",
    mcode: "+353"
  }, {
    name: "Israel",
    mcode: "+972"
  }, {
    name: "Italy",
    mcode: "+39"
  }, {
    name: "Jamaica",
    mcode: "+1876"
  }, {
    name: "Japan",
    mcode: "+81"
  }, {
    name: "Jordan",
    mcode: "+962"
  }, {
    name: "Kazakhstan",
    mcode: "+7"
  }, {
    name: "Kenya",
    mcode: "+254"
  }, {
    name: "Kiribati",
    mcode: "+686"
  }, {
    name: "Korea - North",
    mcode: "+850"
  }, {
    name: "Korea - South",
    mcode: "+82"
  }, {
    name: "Kuwait",
    mcode: "+965"
  }, {
    name: "Kyrgyzstan",
    mcode: "+996"
  }, {
    name: "Laos",
    mcode: "+856"
  }, {
    name: "Latvia",
    mcode: "+371"
  }, {
    name: "Lebanon",
    mcode: "+961"
  }, {
    name: "Lesotho",
    mcode: "+266"
  }, {
    name: "Liberia",
    mcode: "+231"
  }, {
    name: "Libya",
    mcode: "+218"
  }, {
    name: "Liechtenstein",
    mcode: "+417"
  }, {
    name: "Lithuania",
    mcode: "+370"
  }, {
    name: "Luxembourg",
    mcode: "+352"
  }, {
    name: "Macao",
    mcode: "+853"
  }, {
    name: "Macedonia",
    mcode: "+389"
  }, {
    name: "Madagascar",
    mcode: "+261"
  }, {
    name: "Malawi",
    mcode: "+265"
  }, {
    name: "Malaysia",
    mcode: "+60"
  }, {
    name: "Maldives",
    mcode: "+960"
  }, {
    name: "Mali",
    mcode: "+223"
  }, {
    name: "Malta",
    mcode: "+356"
  }, {
    name: "Marshall Islands",
    mcode: "+692"
  }, {
    name: "Martinique",
    mcode: "+596"
  }, {
    name: "Mauritania",
    mcode: "+222"
  }, {
    name: "Mayotte",
    mcode: "+269"
  }, {
    name: "Mexico",
    mcode: "+52"
  }, {
    name: "Micronesia",
    mcode: "+691"
  }, {
    name: "Moldova",
    mcode: "+373"
  }, {
    name: "Monaco",
    mcode: "+377"
  }, {
    name: "Mongolia",
    mcode: "+976"
  }, {
    name: "Montserrat",
    mcode: "+1664"
  }, {
    name: "Morocco",
    mcode: "+212"
  }, {
    name: "Mozambique",
    mcode: "+258"
  }, {
    name: "Myanmar",
    mcode: "+95"
  }, {
    name: "Namibia",
    mcode: "+264"
  }, {
    name: "Nauru",
    mcode: "+674"
  }, {
    name: "Nepal",
    mcode: "+977"
  }, {
    name: "Netherlands",
    mcode: "+31"
  }, {
    name: "New Caledonia",
    mcode: "+687"
  }, {
    name: "New Zealand",
    mcode: "+64"
  }, {
    name: "Nicaragua",
    mcode: "+505"
  }, {
    name: "Niger",
    mcode: "+227"
  }, {
    name: "Nigeria",
    mcode: "+234"
  }, {
    name: "Niue",
    mcode: "+683"
  }, {
    name: "Norfolk Islands",
    mcode: "+672"
  }, {
    name: "Northern Marianas",
    mcode: "+670"
  }, {
    name: "Norway",
    mcode: "+47"
  }, {
    name: "Oman",
    mcode: "+968"
  }, {
    name: "Pakistan",
    mcode: "+92"
  }, {
    name: "Palau",
    mcode: "+680"
  }, {
    name: "Panama",
    mcode: "+507"
  }, {
    name: "Papua New Guinea",
    mcode: "+675"
  }, {
    name: "Paraguay",
    mcode: "+595"
  }, {
    name: "Peru",
    mcode: "+51"
  }, {
    name: "Philippines",
    mcode: "+63"
  }, {
    name: "Poland",
    mcode: "+48"
  }, {
    name: "Portugal",
    mcode: "+351"
  }, {
    name: "Puerto Rico",
    mcode: "+1787"
  }, {
    name: "Qatar",
    mcode: "+974"
  }, {
    name: "Reunion",
    mcode: "+262"
  }, {
    name: "Romania",
    mcode: "+40"
  }, {
    name: "Russia",
    mcode: "+7"
  }, {
    name: "Rwanda",
    mcode: "+250"
  }, {
    name: "San Marino",
    mcode: "+378"
  }, {
    name: "Sao Tome & Principe",
    mcode: "+239"
  }, {
    name: "Saudi Arabia",
    mcode: "+966"
  }, {
    name: "Senegal",
    mcode: "+221"
  }, {
    name: "Serbia",
    mcode: "+381"
  }, {
    name: "Seychelles",
    mcode: "+248"
  }, {
    name: "Sierra Leone",
    mcode: "+232"
  }, {
    name: "Singapore",
    mcode: "+65"
  }, {
    name: "Slovak Republic",
    mcode: "+421"
  }, {
    name: "Slovenia",
    mcode: "+386"
  }, {
    name: "Solomon Islands",
    mcode: "+677"
  }, {
    name: "Somalia",
    mcode: "+252"
  }, {
    name: "South Africa",
    mcode: "+27"
  }, {
    name: "Spain",
    mcode: "+34"
  }, {
    name: "Sri Lanka",
    mcode: "+94"
  }, {
    name: "St. Helena",
    mcode: "+290"
  }, {
    name: "St. Kitts",
    mcode: "+1869"
  }, {
    name: "St. Lucia",
    mcode: "+1758"
  }, {
    name: "Suriname",
    mcode: "+597"
  }, {
    name: "Sudan",
    mcode: "+249"
  }, {
    name: "Swaziland",
    mcode: "+268"
  }, {
    name: "Sweden",
    mcode: "+46"
  }, {
    name: "Switzerland",
    mcode: "+41"
  }, {
    name: "Syria",
    mcode: "+963"
  }, {
    name: "Taiwan",
    mcode: "+886"
  }, {
    name: "Tajikistan",
    mcode: "+992"
  }, {
    name: "Thailand",
    mcode: "+66"
  }, {
    name: "Togo",
    mcode: "+228"
  }, {
    name: "Tonga",
    mcode: "+676"
  }, {
    name: "Trinidad & Tobago",
    mcode: "+1868"
  }, {
    name: "Tunisia",
    mcode: "+216"
  }, {
    name: "Turkey",
    mcode: "+90"
  }, {
    name: "Turkmenistan",
    mcode: "+993"
  }, {
    name: "Turks & Caicos Islands",
    mcode: "+1649"
  }, {
    name: "Tuvalu",
    mcode: "+688"
  }, {
    name: "Uganda",
    mcode: "+256"
  }, {
    name: "Ukraine",
    mcode: "+380"
  }, {
    name: "United Arab Emirates",
    mcode: "+971"
  }, {
    name: "Uruguay",
    mcode: "+598"
  }, {
    name: "Uzbekistan",
    mcode: "+998"
  }, {
    name: "Vanuatu",
    mcode: "+678"
  }, {
    name: "Vatican City",
    mcode: "+379"
  }, {
    name: "Venezuela",
    mcode: "+58"
  }, {
    name: "Vietnam",
    mcode: "+84"
  }, {
    name: "Virgin Islands - British",
    mcode: "+1"
  }, {
    name: "Virgin Islands - US",
    mcode: "+1"
  }, {
    name: "Wallis & Futuna",
    mcode: "+681"
  }, {
    name: "Yemen",
    mcode: "North)(+969"
  }, {
    name: "Yemen",
    mcode: "South)(+967"
  }, {
    name: "Zambia",
    mcode: "+260"
  }, {
    name: "Zimbabwe",
    mcode: "+263"
  }];
}

/***/ }),

/***/ "./src/forum/components/LogInFactorModal.js":
/*!**************************************************!*\
  !*** ./src/forum/components/LogInFactorModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogInFactorModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5__);







var LogInFactorModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LogInFactorModal, _Modal);

  function LogInFactorModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = LogInFactorModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.identification = this.props.data.identification;
    this.password = this.props.data.password;
    this.remember = this.props.data.remember;
    this.pageId = this.props.data.pageId;
    this.twoFactorCode = m.prop('');
    $.getScript('https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/master/src/jquery.mask.js', function () {
      $('#code').mask('AAA-AAA', {
        placeholder: "   -   "
      });
    });
  };

  _proto.className = function className() {
    return 'TwoFactorModal Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.login_title');
  };

  _proto.content = function content(user) {
    return m("div", {
      className: "Modal-body"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.2fa_help'), m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("div", {
      className: "TwoFactor-input"
    }, m("input", {
      type: "text",
      style: "text-transform:uppercase",
      id: "code",
      oninput: m.withAttr('value', this.twoFactorCode),
      className: "FormControl",
      placeholder: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.placeholder')
    })), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "Button Button--primary TwoFactor-button",
      loading: this.loading,
      type: "submit"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.button')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this = this;

    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    this.twoFactorCode(this.twoFactorCode().toUpperCase());
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/login',
      method: 'POST',
      data: {
        'identification': this.identification,
        'password': this.password,
        'remember': this.remember,
        'twofactor': this.twoFactorCode(),
        'pageId': this.pageId
      }
    }).then(function (response) {
      if (response.userId === 'IncorrectCode') {
        _this.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'error',
          dismissible: false,
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.incorrect_2fa')
        });
        _this.loading = false;
        m.redraw();
      } else {
        window.location.reload();
      }
    });
  };

  return LogInFactorModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/components/PhoneModal.js":
/*!********************************************!*\
  !*** ./src/forum/components/PhoneModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AuthyModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AuthyModal */ "./src/forum/components/AuthyModal.js");
/* harmony import */ var _TwoFactorModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TwoFactorModal */ "./src/forum/components/TwoFactorModal.js");
/* harmony import */ var _RecoveryModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RecoveryModal */ "./src/forum/components/RecoveryModal.js");
/* harmony import */ var _Countries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Countries */ "./src/forum/components/Countries.js");














var PhoneModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PhoneModal, _Modal);

  function PhoneModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = PhoneModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.twoFactorCode = m.prop('');
    this.phone = m.prop('');
    this.enabled = m.prop(flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user.twofa_enabled());
    $.getScript('https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/master/src/jquery.mask.js', function () {
      $('#phone').mask('(000) 000-0000');
      $('#code').mask('AAA-AAA', {
        placeholder: '   -   '
      });
    });
    this.country = {
      name: 'United States of America',
      mcode: '+1'
    };
  };

  _proto.className = function className() {
    return 'TwoFactorModal Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.twofactor_title');
  };

  _proto.countryItems = function countryItems() {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default.a();
    items.add('sort', flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_7___default.a.component({
      buttonClassName: 'Button FormControl',
      menuClassName: 'Country-Dropdown-actual',
      label: this.country.name,
      children: Object(_Countries__WEBPACK_IMPORTED_MODULE_12__["default"])().map(function (country) {
        var active = _this.country === country;
        return flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
          children: country.name,
          icon: active ? 'check' : true,
          onclick: function onclick() {
            _this.country = country;
          },
          active: active
        });
      })
    }));
    return items;
  };

  _proto.content = function content(user) {
    var _this2 = this;

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("h2", {
      style: "text-align: center"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.phone_heading')), this.enabled() !== 3 ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary Switch-button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _TwoFactorModal__WEBPACK_IMPORTED_MODULE_10__["default"](_this2.user));
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.stTOTP')
    }) : '', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.authy_enabled === "1" ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary Switch-button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _AuthyModal__WEBPACK_IMPORTED_MODULE_9__["default"]());
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.stAuthy')
    }) : '', m("div", {
      style: "text-align: center",
      className: "helpText Submit-Button"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.helpPhone'))), this.enabled() !== 3 ? m("div", {
      className: "Form-group"
    }, m("ul", {
      className: "Country-dropdown"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_5___default()(this.countryItems().toArray())), m("input", {
      type: "text",
      id: "phone",
      oninput: m.withAttr('value', this.phone),
      className: "FormControl Phone-Input"
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
          method: 'POST',
          data: {
            'step': 3,
            'phone': _this2.country.mcode + _this2.phone().replace(/[- )(]/g, '')
          }
        });

        _this2.enabled(3);

        m.redraw();
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.submitPhone')
    })) : m("div", null, flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary TwoFactor-button',
      loading: this.loading,
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
          method: 'POST',
          data: {
            'step': 1
          },
          errorHandler: _this2.onerror.bind(_this2)
        }).then(function () {
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _TwoFactorModal__WEBPACK_IMPORTED_MODULE_10__["default"](_this2.user));
        });
        _this2.loading = false;
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.back')
    }), m("input", {
      type: "text",
      id: "code",
      style: "text-transform: uppercase;",
      oninput: m.withAttr('value', this.twoFactorCode),
      className: "FormControl"
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      className: 'Button Button--primary TwoFactor-button',
      loading: this.loading,
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
          method: 'POST',
          data: {
            'step': 4,
            'code': _this2.twoFactorCode()
          }
        }).then(function (response) {
          var data = response.data.id;

          if (data === 'IncorrectCode') {
            _this2.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
              type: 'error',
              children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.incorrect_2fa')
            });
            m.redraw();
          } else {
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(_this2.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
              type: 'success',
              children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.2fa_enabled')
            }));
            flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _RecoveryModal__WEBPACK_IMPORTED_MODULE_11__["default"]({
              data: data
            }));
          }
        });
        _this2.loading = false;
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.button')
    }))));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    this.alert = null;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
      method: 'POST',
      data: {
        'step': 4,
        'code': this.twoFactorCode()
      },
      errorHandler: this.onerror.bind(this)
    }).then(function (response) {
      console.log(response);
      var data = response.data.id;

      if (data === 'IncorrectCode') {
        _this3.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'error',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.incorrect_2fa')
        });
        m.redraw();
      } else {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(_this3.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'success',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.2fa_enabled')
        }));
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _RecoveryModal__WEBPACK_IMPORTED_MODULE_11__["default"]({
          data: data
        }));
      }
    });
    this.loading = false;
  };

  return PhoneModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_6___default.a);



/***/ }),

/***/ "./src/forum/components/RecoveryModal.js":
/*!***********************************************!*\
  !*** ./src/forum/components/RecoveryModal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecoveryModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4__);






var RecoveryModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RecoveryModal, _Modal);

  function RecoveryModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = RecoveryModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.recoveries = this.props.data.split(',');
  };

  _proto.className = function className() {
    return 'TwoFactorModal Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.twofactor_title');
  };

  _proto.content = function content(user) {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("div", {
      className: "TwoFactor-codes"
    }, m("h3", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.recov_help1')), m("h4", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.recov_help2')), this.recoveries.map(function (recovery) {
      return m("br", null), m("h3", null, recovery);
    })), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      className: "Button Button--primary TwoFactor-button",
      loading: this.loading,
      type: "submit"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.close')))));
  };

  _proto.onsubmit = function onsubmit(e) {
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
  };

  return RecoveryModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/components/TwoFactorModal.js":
/*!************************************************!*\
  !*** ./src/forum/components/TwoFactorModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TwoFactorModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AuthyModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthyModal */ "./src/forum/components/AuthyModal.js");
/* harmony import */ var _PhoneModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PhoneModal */ "./src/forum/components/PhoneModal.js");
/* harmony import */ var _RecoveryModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RecoveryModal */ "./src/forum/components/RecoveryModal.js");











var TwoFactorModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TwoFactorModal, _Modal);

  function TwoFactorModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = TwoFactorModal.prototype;

  _proto.init = function init() {
    var _this = this;

    _Modal.prototype.init.call(this);

    this.user = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user;
    this.enabled = m.prop(0);
    this.secret = m.prop('');
    this.url = m.prop('');
    this.twoFactorCode = m.prop('');
    $.getScript('https://cdn.rawgit.com/igorescobar/jQuery-Mask-Plugin/master/src/jquery.mask.js', function () {
      $('#passcode').mask('000000');
    });
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/getsecret',
      method: 'GET'
    }).then(function (response) {
      _this.secret(response.data[0].attributes.data.google2fa_secret);

      _this.url(response.data[1].id);

      _this.enabled(response.data[0].attributes.data.twofa_enabled);

      m.redraw();
    });
  };

  _proto.className = function className() {
    return 'TwoFactorModal Modal--small';
  };

  _proto.title = function title() {
    return flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.twofactor_title');
  };

  _proto.content = function content(user) {
    var _this2 = this;

    if (this.enabled() === 3) {
      flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _PhoneModal__WEBPACK_IMPORTED_MODULE_8__["default"]());
    }

    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, this.enabled() === 1 ? m("div", {
      className: "Form-group"
    }, m("h2", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.2fa_heading')), flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.twillio_enabled === "1" ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      className: 'Button Button--primary Switch-button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _PhoneModal__WEBPACK_IMPORTED_MODULE_8__["default"]());
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.stPhone')
    }) : '', flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.data.attributes.authy_enabled === "1" ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a.component({
      className: 'Button Button--primary Switch-button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.close();
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _AuthyModal__WEBPACK_IMPORTED_MODULE_7__["default"]());
      },
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.stAuthy')
    }) : '', m("div", {
      style: "text-align: center",
      className: "helpText Submit-Button"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.helpQR')), m("div", {
      className: "TwoFactor-img Submit-Button"
    }, m("img", {
      src: decodeURIComponent(this.url())
    }), m("h3", null, this.secret())), m("div", {
      className: "TwoFactor-input"
    }, m("input", {
      type: "text",
      id: "passcode",
      oninput: m.withAttr('value', this.twoFactorCode),
      className: "FormControl",
      placeholder: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.placeholder')
    })), m(flarum_components_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "Button Button--primary TwoFactor-button",
      loading: this.loading,
      type: "submit"
    }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.button'))) : '', this.enabled() !== 1 && this.enabled() !== 3 ? m("div", {
      className: "Form-group"
    }, m("label", null, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.heading')), m("div", null, flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a.component({
      state: this.enabled(),
      children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.modal.switch'),
      className: 'TwoFactor-switch',
      onchange: function onchange(value) {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
          url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
          method: 'POST',
          data: {
            'step': value
          }
        }).then(function (response) {
          _this2.enabled(+value);

          flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
            url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/getsecret',
            method: 'GET'
          }).then(function (response) {
            _this2.secret(response.data[0].attributes.data.google2fa_secret);

            _this2.url(response.data[1].id);

            m.redraw();
          });
        });
      }
    }))) : ''));
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    this.alert = null;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/verifycode',
      method: 'POST',
      data: {
        'step': 2,
        'code': this.twoFactorCode()
      }
    }).then(function (response) {
      var data = response.data.id;

      if (data === 'IncorrectCode') {
        _this3.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'error',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.incorrect_2fa')
        });
        m.redraw();
      } else {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.alerts.show(_this3.successAlert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
          type: 'success',
          children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.2fa_enabled')
        }));
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _RecoveryModal__WEBPACK_IMPORTED_MODULE_9__["default"]({
          data: data
        }));
      }
    });
    this.loading = false;
  };

  return TwoFactorModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_4___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LogInFactorModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LogInFactorModal */ "./src/forum/components/LogInFactorModal.js");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/LogInModal */ "flarum/components/LogInModal");
/* harmony import */ var flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_TwoFactorModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TwoFactorModal */ "./src/forum/components/TwoFactorModal.js");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_9__);










flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('reflar-twofactor', function () {
  flarum_models_User__WEBPACK_IMPORTED_MODULE_9___default.a.prototype.twofa_enabled = flarum_Model__WEBPACK_IMPORTED_MODULE_6___default.a.attribute('twofa-enabled');

  flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.init = function () {
    this.identification = m.prop(this.props.identification || '');
    this.password = m.prop(this.props.password || '');
    this.remember = m.prop(this.props.remember && true);
    this.pageId = this.makeid();
  };

  flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.makeid = function () {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };

  flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.onsubmit = function (e) {
    var _this = this;

    e.preventDefault();
    this.loading = true;
    var identification = this.identification();
    var password = this.password();
    var remember = this.remember();
    var pageId = this.pageId;
    flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('apiUrl') + '/twofactor/login',
      method: 'POST',
      errorHandler: this.failure.bind(this),
      data: {
        identification: identification,
        password: password,
        remember: remember,
        pageId: pageId
      }
    }).then(function (response) {
      if (response.userId === 'IncorrectCode') {
        var data = {
          identification: _this.identification(),
          password: _this.password(),
          remember: _this.remember(),
          pageId: _this.pageId
        };
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_LogInFactorModal__WEBPACK_IMPORTED_MODULE_4__["default"]({
          data: data
        }));
      } else {
        window.location.reload();
      }
    });
  };

  flarum_components_LogInModal__WEBPACK_IMPORTED_MODULE_5___default.a.prototype.failure = function (response) {
    if (parseInt(response.status) === 401) {
      this.alert = new flarum_components_Alert__WEBPACK_IMPORTED_MODULE_2___default.a({
        type: 'error',
        dismissible: false,
        children: flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('core.forum.log_in.invalid_login_message')
      });
      this.loading = false;
      m.redraw();
    }
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_7___default.a.prototype, 'accountItems', function (items) {
    items.add('2 Factor', flarum_components_Button__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      className: 'Button',
      onclick: function onclick() {
        flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.modal.show(new _components_TwoFactorModal__WEBPACK_IMPORTED_MODULE_8__["default"]());
      }
    }, [flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.translator.trans('reflar-twofactor.forum.accountlabel')]), 1);
  });
});

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/LogInModal":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LogInModal']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LogInModal'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/SettingsPage":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsPage']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsPage'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map