import SettingsModal from 'flarum/components/SettingsModal';

export default class CustomHeaderSettingsModal extends SettingsModal {
  className() {
    return 'CustomHeaderSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('global-colorchanger.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <h1>{app.translator.trans('global-colorchanger.admin.settings.homepage')}</h1>
        <label>{app.translator.trans('global-colorchanger.admin.settings.apphex')}</label>
        <input type="color" required className="FormControl" type="color" bidi={this.setting('global-color.apphex')}></input>
        <label>{app.translator.trans('global-colorchanger.admin.settings.herohex')}</label>
        <input type="color" required className="FormControl" type="color" bidi={this.setting('global-color.herohex')}></input>
        <label>{app.translator.trans('global-colorchanger.admin.settings.headerhex')}</label>
        <input type="color" required className="FormControl" type="color" bidi={this.setting('global-color.headerhex')}></input>
        <h1>{app.translator.trans('global-colorchanger.admin.settings.adminpage')}</h1>
        <label>{app.translator.trans('global-colorchanger.admin.settings.adminnavhex')}</label>
        <input type="color" required className="FormControl" type="color" bidi={this.setting('global-color.adminnavhex')}></input>
        <label>{app.translator.trans('global-colorchanger.admin.settings.adminpagehex')}</label>
        <input type="color" required className="FormControl" type="color" bidi={this.setting('global-color.adminpagehex')}></input>
        <p>{app.translator.trans('global-colorchanger.admin.settings.help')}</p>
      </div>
    ];
}}