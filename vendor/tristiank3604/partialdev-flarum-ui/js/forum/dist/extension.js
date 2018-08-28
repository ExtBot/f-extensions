System.register('tristiank3604/partialdev-flarum-ui/main', ['flarum/extend', 'flarum/components/IndexPage', 'flarum/utils/affixSidebar'], function (_export) {
  'use strict';

  var extend, IndexPage, affixSidebar;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsIndexPage) {
      IndexPage = _flarumComponentsIndexPage['default'];
    }, function (_flarumUtilsAffixSidebar) {
      affixSidebar = _flarumUtilsAffixSidebar['default'];
    }],
    execute: function () {

      app.initializers.add('partialdev-flarum-ui', function () {
        extend(IndexPage.prototype, 'view', function (items) {
          return m(
            'div',
            { className: 'IndexPage' },
            m(
              'div',
              { className: 'container' },
              m(
                'nav',
                { className: 'IndexPage-nav sideNav', config: affixSidebar },
                m(
                  'ul',
                  null,
                  listItems(IndexPage.prototype.sidebarItems().toArray())
                )
              ),
              m(
                'div',
                { className: 'IndexPage-results' },
                app.cache.discussionList.render()
              )
            )
          );
        });
      });
    }
  };
});