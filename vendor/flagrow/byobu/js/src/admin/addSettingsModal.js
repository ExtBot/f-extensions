import { settings } from '@fof-components';

const { SettingsModal, items: { BooleanItem, StringItem } } = settings;

export default () => {
    app.extensionSettings['fof-byobu'] = () =>
        app.modal.show(
            new SettingsModal({
                title: 'FoF Byōbu',
                size: 'medium',
                items: [
                    <StringItem>
                        {app.translator.trans('fof-byobu.admin.settings.nothing_here')}
                    </StringItem>,
                ],
            })
        );
}
