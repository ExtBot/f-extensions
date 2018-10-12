import app from 'flarum/app';

import Auth0SettingsModal from 'mprove/auth0/components/Auth0SettingsModal';

app.initializers.add('mprove-auth0', () => {
  app.extensionSettings['mprove-auth0'] = () => app.modal.show(new Auth0SettingsModal());
});
