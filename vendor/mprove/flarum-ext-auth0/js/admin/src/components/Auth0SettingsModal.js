import SettingsModal from 'flarum/components/SettingsModal';

export default class Auth0SettingsModal extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
    return app.translator.trans('mprove-auth0.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('mprove-auth0.admin.settings.domain')}</label>
        <input className="FormControl" bidi={this.setting('mprove-auth0.domain')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('mprove-auth0.admin.settings.client_id')}</label>
        <input className="FormControl" bidi={this.setting('mprove-auth0.client_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('mprove-auth0.admin.settings.client_secret')}</label>
        <input className="FormControl" bidi={this.setting('mprove-auth0.client_secret')}/>
      </div>,
    ];
  }
}
