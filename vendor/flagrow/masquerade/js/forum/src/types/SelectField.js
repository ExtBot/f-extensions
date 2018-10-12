import Select from 'flarum/components/Select';
import BaseField from 'flagrow/masquerade/types/BaseField';

const NO_OPTION_SELECTED_KEY = 'flagrow_masquerade_no_option_selected';

export default class EmailField extends BaseField {
    editorInput() {
        return Select.component({
            onchange: value => {
                if (value === NO_OPTION_SELECTED_KEY) {
                    value = null;
                }

                this.set(value);
            },
            value: BaseField.isNoOptionSelectedValue(this.value()) ? NO_OPTION_SELECTED_KEY : this.value(),
            options: this.options(),
        });
    }

    options() {
        let options = {};

        if (!this.readAttribute(this.field, 'required')) {
            options[NO_OPTION_SELECTED_KEY] = app.translator.trans('flagrow-masquerade.forum.fields.select.none-optional');
        } else if (BaseField.isNoOptionSelectedValue(this.value())) {
            options[NO_OPTION_SELECTED_KEY] = app.translator.trans('flagrow-masquerade.forum.fields.select.none-required');
        }

        const validationIn = this.validationRule('in');

        if (validationIn) {
            validationIn.split(',').forEach(value => {
                options[value] = value;
            });
        }

        if (!BaseField.isNoOptionSelectedValue(this.value()) && typeof options[this.value()] === 'undefined') {
            options[this.value()] = '(invalid) ' + this.value();
        }

        return options;
    }
}
