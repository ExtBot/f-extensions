import app from 'flarum/app';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';
import Answer from 'flagrow/mason/models/Answer';
import Field from 'flagrow/mason/models/Field';
import addComposerFields from 'flagrow/mason/addComposerFields';
import addFieldUpdateControl from 'flagrow/mason/addFieldUpdateControl';
import addFieldsOnDiscussionHero from 'flagrow/mason/addFieldsOnDiscussionHero';
import addFieldsOnDiscussionPost from 'flagrow/mason/addFieldsOnDiscussionPost';
import patchModelIdentifier from "flagrow/mason/patchModelIdentifier";

app.initializers.add('flagrow-mason', app => {
    app.store.models['flagrow-mason-field'] = Field;
    app.store.models['flagrow-mason-answer'] = Answer;

    Discussion.prototype.flagrowMasonAnswers = Model.hasMany('flagrowMasonAnswers');
    Discussion.prototype.canUpdateFlagrowMasonAnswers = Model.attribute('canUpdateFlagrowMasonAnswers');

    addComposerFields();
    addFieldsOnDiscussionHero();
    addFieldsOnDiscussionPost();
    addFieldUpdateControl();
    patchModelIdentifier();
});
