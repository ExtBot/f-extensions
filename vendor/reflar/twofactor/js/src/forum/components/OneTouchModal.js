import Modal from "flarum/components/Modal";
import LoadingIndicator from 'flarum/components/LoadingIndicator'

export default class OneTouchModal extends Modal {
    className() {
        return 'OneTouchModal';
    }

    title() {
        return app.translator.trans('reflar-twofactor.forum.modal.oneTouchTitle');
    }

    content() {
        return (
            <div className='Modal-body'>
                <h2>{app.translator.trans('reflar-twofactor.forum.modal.oneTouchHeader')}</h2>
                <div>
                    {LoadingIndicator.component()}
                </div>
            </div>
        )
    }
}