System.register('tristiank3604/partialdev-flarum-ui/homepage', ['flarum/components/Page', 'flarum/components/IndexPage', 'flarum/helpers/listItems'], function (_export) {
    'use strict';

    var Page, IndexPage, listItems, HomePage;
    return {
        setters: [function (_flarumComponentsPage) {
            Page = _flarumComponentsPage['default'];
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage['default'];
        }, function (_flarumHelpersListItems) {
            listItems = _flarumHelpersListItems['default'];
        }],
        execute: function () {
            HomePage = (function (_Page) {
                babelHelpers.inherits(HomePage, _Page);

                function HomePage() {
                    babelHelpers.classCallCheck(this, HomePage);
                    babelHelpers.get(Object.getPrototypeOf(HomePage.prototype), 'constructor', this).apply(this, arguments);
                }

                babelHelpers.createClass(HomePage, [{
                    key: 'view',
                    value: function view() {

                        return m(
                            'div',
                            { className: 'HomePage' },
                            m(
                                'div',
                                { className: 'container' },
                                m(
                                    'nav',
                                    { className: 'HomePage-nav IndexPage-nav sideNav', config: IndexPage.prototype.affixSidebar },
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
                    }
                }]);
                return HomePage;
            })(Page);

            _export('default', HomePage);
        }
    };
});;
System.register('tristiank3604/partialdev-flarum-ui/main', ['flarum/extend', 'flarum/components/IndexPage', './homepage'], function (_export) {
  'use strict';

  var extend, IndexPage, HomePage;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumComponentsIndexPage) {
      IndexPage = _flarumComponentsIndexPage['default'];
    }, function (_homepage) {
      HomePage = _homepage['default'];
    }],
    execute: function () {

      app.initializers.add('partialdev-flarum-ui', function () {
        app.routes['partialdev-flarum-ui.homepage'] = {
          path: '/partialdev-flarum-ui-homepage',
          component: HomePage.component()
        };
      });
    }
  };
});