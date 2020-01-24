import { extend } from 'flarum/extend';
import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import DiscussionList from 'flarum/components/DiscussionList';
import abbreviateNumber from 'flarum/utils/abbreviateNumber';
import DiscussionView from '../models/DiscussionView';

export default function () {
    app.store.models.discussionviews = DiscussionView; //discussionviews = serializer type

    Discussion.prototype.views = Model.hasMany('views');
    Discussion.prototype.canReset = Model.attribute('canReset');

    extend(DiscussionListItem.prototype, 'infoItems', function(items) {
        const discussion = this.props.discussion;

        var number = app.forum.attribute('mb-discussionviews.abbr_numbers') == 1 ? abbreviateNumber(discussion.views().length) : discussion.views().length;
        items.add('discussion-views', number);
    });

    extend(DiscussionList.prototype, 'requestParams', function(params) {
        params.include.push('views'); //fixes not loading relationship when navigating back to the discussion list if you directly went to a discussion or another page
    })
}
