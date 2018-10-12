import {extend, override} from "flarum/extend";
import app from "flarum/app";
import HeaderSecondary from "flarum/components/HeaderSecondary";
import SettingsPage from "flarum/components/SettingsPage";
import LogInModal from "flarum/components/LogInModal";

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

        items.replace('logIn',
            <a href="#" className="Button Button--link login-button">
                Login
            </a>
        );

        $(document).on('click', '.login-button', function(e) {
            e.preventDefault();
            getAuth0Lock().show();
        });
    }

    function replaceSignupButton(items) {
        if (!items.has('signUp')) {
            return;
        }
        items.replace('signUp',''); // TO DO: delete?
    }

    function removeProfileActions(items) {
        items.remove('changeEmail');
        items.remove('changePassword');
    }

    function checkRemoveAccountSection(items) {
        if (items.has('account')
            && items.get('account').props.children.length === 0) {
            items.remove('account');
        }
    }
});

// Auth0Lock init
function getAuth0Lock() {
    return new Auth0Lock(
        app.forum.attribute('mprove-auth0.client_id'),
        app.forum.attribute('mprove-auth0.domain'),
        {
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
                logo: app.forum.attribute('logoUrl'), // TODO logo path
            },
            languageDictionary: {
                // title: 'Mprove',
                title: '',
            }
        }
    );
}
