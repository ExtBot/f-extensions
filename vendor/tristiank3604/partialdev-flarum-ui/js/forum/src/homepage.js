import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage';
import listItems from 'flarum/helpers/listItems';

export default class HomePage extends Page {

    view() {

        return (
            <div className="HomePage">
                <div className="container">
                    <nav className="HomePage-nav IndexPage-nav sideNav" config={IndexPage.prototype.affixSidebar}>
                        <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
                    </nav>
                    <div className="IndexPage-results">
                        {app.cache.discussionList.render()}
                    </div>
                </div>
            </div>
        );
    }
}