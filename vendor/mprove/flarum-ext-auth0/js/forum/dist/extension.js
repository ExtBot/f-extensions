"use strict";

System.register("mprove/auth0/main", ["flarum/extend", "flarum/app", "flarum/components/HeaderSecondary", "flarum/components/SettingsPage", "flarum/components/LogInModal"], function (_export, _context) {
    "use strict";

    var extend, override, app, HeaderSecondary, SettingsPage, LogInModal;


    // Auth0Lock init
    function getAuth0Lock() {
        return new Auth0Lock(app.forum.attribute('mprove-auth0.client_id'), app.forum.attribute('mprove-auth0.domain'), {
            auth: {
                redirect: false,
                redirectUrl: app.forum.attribute('baseUrl') + '/auth/auth0',
                responseType: 'code',
                params: {
                    scope: 'openid email',
                    protocol: "oauth2",
                    response_mode: "query",
                    response_type: "code"
                }
            },
            loginAfterSignUp: true,
            socialButtonStyle: 'small',
            theme: {
                logo: app.forum.attribute('logoUrl') // TODO logo path
            },
            languageDictionary: {
                // title: 'Mprove',
                title: ''
            }
        });
    }
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
            override = _flarumExtend.override;
        }, function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumComponentsHeaderSecondary) {
            HeaderSecondary = _flarumComponentsHeaderSecondary.default;
        }, function (_flarumComponentsSettingsPage) {
            SettingsPage = _flarumComponentsSettingsPage.default;
        }, function (_flarumComponentsLogInModal) {
            LogInModal = _flarumComponentsLogInModal.default;
        }],
        execute: function () {

            app.initializers.add('mprove-auth0', function () {
                override(LogInModal.prototype, 'init', redirectWhenLoginModalIsOpened);

                extend(HeaderSecondary.prototype, 'items', replaceLoginButton);
                extend(HeaderSecondary.prototype, 'items', replaceSignupButton);

                extend(SettingsPage.prototype, 'accountItems', removeProfileActions);
                extend(SettingsPage.prototype, 'settingsItems', checkRemoveAccountSection);

                function redirectWhenLoginModalIsOpened() {
                    getAuth0Lock().show();
                    throw new Error('Stop execution');
                }

                function replaceLoginButton(items) {
                    if (!items.has('logIn')) {
                        return;
                    }

                    items.replace('logIn', m(
                        "a",
                        { href: "#", className: "Button Button--link login-button" },
                        "Login"
                    ));

                    $(document).on('click', '.login-button', function (e) {
                        e.preventDefault();
                        getAuth0Lock().show();
                    });
                }

                function replaceSignupButton(items) {
                    if (!items.has('signUp')) {
                        return;
                    }
                    items.replace('signUp', ''); // TO DO: delete?
                }

                function removeProfileActions(items) {
                    items.remove('changeEmail');
                    items.remove('changePassword');
                }

                function checkRemoveAccountSection(items) {
                    if (items.has('account') && items.get('account').props.children.length === 0) {
                        items.remove('account');
                    }
                }
            });
        }
    };
});