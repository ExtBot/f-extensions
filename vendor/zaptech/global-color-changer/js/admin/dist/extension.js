'use strict';

System.register('zaptech/global-color-changer/components/CustomHeaderSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, CustomHeaderSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      CustomHeaderSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(CustomHeaderSettingsModal, _SettingsModal);

        function CustomHeaderSettingsModal() {
          babelHelpers.classCallCheck(this, CustomHeaderSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (CustomHeaderSettingsModal.__proto__ || Object.getPrototypeOf(CustomHeaderSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(CustomHeaderSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'CustomHeaderSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('global-colorchanger.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            var _m, _m2, _m3, _m4, _m5;

            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'h1',
                null,
                app.translator.trans('global-colorchanger.admin.settings.homepage')
              ),
              m(
                'label',
                null,
                app.translator.trans('global-colorchanger.admin.settings.apphex')
              ),
              m('input', (_m = { type: 'color', required: true, className: 'FormControl' }, babelHelpers.defineProperty(_m, 'type', 'color'), babelHelpers.defineProperty(_m, 'bidi', this.setting('global-color.apphex')), _m)),
              m(
                'label',
                null,
                app.translator.trans('global-colorchanger.admin.settings.herohex')
              ),
              m('input', (_m2 = { type: 'color', required: true, className: 'FormControl' }, babelHelpers.defineProperty(_m2, 'type', 'color'), babelHelpers.defineProperty(_m2, 'bidi', this.setting('global-color.herohex')), _m2)),
              m(
                'label',
                null,
                app.translator.trans('global-colorchanger.admin.settings.headerhex')
              ),
              m('input', (_m3 = { type: 'color', required: true, className: 'FormControl' }, babelHelpers.defineProperty(_m3, 'type', 'color'), babelHelpers.defineProperty(_m3, 'bidi', this.setting('global-color.headerhex')), _m3)),
              m(
                'h1',
                null,
                app.translator.trans('global-colorchanger.admin.settings.adminpage')
              ),
              m(
                'label',
                null,
                app.translator.trans('global-colorchanger.admin.settings.adminnavhex')
              ),
              m('input', (_m4 = { type: 'color', required: true, className: 'FormControl' }, babelHelpers.defineProperty(_m4, 'type', 'color'), babelHelpers.defineProperty(_m4, 'bidi', this.setting('global-color.adminnavhex')), _m4)),
              m(
                'label',
                null,
                app.translator.trans('global-colorchanger.admin.settings.adminpagehex')
              ),
              m('input', (_m5 = { type: 'color', required: true, className: 'FormControl' }, babelHelpers.defineProperty(_m5, 'type', 'color'), babelHelpers.defineProperty(_m5, 'bidi', this.setting('global-color.adminpagehex')), _m5)),
              m(
                'p',
                null,
                app.translator.trans('global-colorchanger.admin.settings.help')
              )
            )];
          }
        }]);
        return CustomHeaderSettingsModal;
      }(SettingsModal);

      _export('default', CustomHeaderSettingsModal);
    }
  };
});;
'use strict';

System.register('zaptech/global-color-changer/main', ['flarum/app', 'flarum/extend', 'flarum/components/PermissionGrid', 'zaptech/global-color-changer/components/CustomHeaderSettingsModal', 'flarum/components/Page'], function (_export, _context) {
  "use strict";

  var app, extend, PermissionGrid, CustomHeaderSettingsModal, Page;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsPermissionGrid) {
      PermissionGrid = _flarumComponentsPermissionGrid.default;
    }, function (_zaptechGlobalColorChangerComponentsCustomHeaderSettingsModal) {
      CustomHeaderSettingsModal = _zaptechGlobalColorChangerComponentsCustomHeaderSettingsModal.default;
    }, function (_flarumComponentsPage) {
      Page = _flarumComponentsPage.default;
    }],
    execute: function () {

      app.initializers.add('zaptech-global-color-changer', function () {
        app.extensionSettings['zaptech-global-color-changer'] = function () {
          return app.modal.show(new CustomHeaderSettingsModal());
        };
        extend(Page.prototype, 'init', function () {
          //DEFINE THE VARIABLES FOR WRITING TO THE HEAD
          var hexcode = app.forum.attribute("global-color.hexcode");
          var herohex = app.forum.attribute('global-color.herohex');
          var headerhex = app.forum.attribute("global-color.headerhex");
          var apphex = app.forum.attribute("global-color.apphex");
          var adminnavhex = app.forum.attribute('global-color.adminnavhex');
          var adminpagehex = app.forum.attribute("global-color.adminpagehex");
          //WRITE HEX CODES ALONG WITH CSS TO THE HEAD
          document.querySelector("head").innerHTML += '<style>#app{background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#header{background:' + headerhex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#admin-navigation{background:' + adminnavhex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.ExtensionsPage-header{background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups{background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.TagsPage-header{background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(1){background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(2){background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(3){background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(4){background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(5){background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(6){background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button.Button.Group.Group--add{background:' + adminpagehex + '}</style>';
          document.querySelector("head").innerHTML += '<style>.DashboardPage{background:' + adminpagehex + '}</style>';
        });
      });
    }
  };
});