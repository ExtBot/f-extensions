'use strict';

System.register('mprove/auth0/components/Auth0SettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, Auth0SettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      Auth0SettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(Auth0SettingsModal, _SettingsModal);

        function Auth0SettingsModal() {
          babelHelpers.classCallCheck(this, Auth0SettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (Auth0SettingsModal.__proto__ || Object.getPrototypeOf(Auth0SettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(Auth0SettingsModal, [{
          key: 'className',
          value: function className() {
            return 'Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('mprove-auth0.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('mprove-auth0.admin.settings.domain')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('mprove-auth0.domain') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('mprove-auth0.admin.settings.client_id')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('mprove-auth0.client_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('mprove-auth0.admin.settings.client_secret')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('mprove-auth0.client_secret') })
            )];
          }
        }]);
        return Auth0SettingsModal;
      }(SettingsModal);

      _export('default', Auth0SettingsModal);
    }
  };
});;
'use strict';

System.register('mprove/auth0/main', ['flarum/app', 'mprove/auth0/components/Auth0SettingsModal'], function (_export, _context) {
  "use strict";

  var app, Auth0SettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_mproveAuth0ComponentsAuth0SettingsModal) {
      Auth0SettingsModal = _mproveAuth0ComponentsAuth0SettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('mprove-auth0', function () {
        app.extensionSettings['mprove-auth0'] = function () {
          return app.modal.show(new Auth0SettingsModal());
        };
      });
    }
  };
});