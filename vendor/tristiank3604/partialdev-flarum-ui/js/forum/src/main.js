import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import affixSidebar from 'flarum/utils/affixSidebar';

app.initializers.add('partialdev-flarum-ui', function() {
  extend(IndexPage.prototype, 'view', function(items) {
    return (
      <div className="IndexPage">
        <div className="container">
          <nav className="IndexPage-nav sideNav" config={affixSidebar}>
            <ul>{listItems(IndexPage.prototype.sidebarItems().toArray())}</ul>
          </nav>
          <div className="IndexPage-results">
            {app.cache.discussionList.render()}
          </div>
        </div>
      </div>
    );
  });
});