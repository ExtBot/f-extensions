import Component from 'flarum/Component';
import LoadingIndicator from 'flarum/components/LoadingIndicator';
import classList from 'flarum/utils/classList';
import extractText from 'flarum/utils/extractText';
import app from 'flarum/app';

app.initializers.add('extum/flarum-ext-user-bio', () => {

});

 /**
 * The `UserBio` component displays a user's bio, optionally letting the user
 * edit it.
 */
export default class UserBio extends Component {
  init() {
    /**
     * Whether or not the bio is currently being edited.
     *
     * @type {Boolean}
     */
    this.editing = false;
     /**
     * Whether or not the bio is currently being saved.
     *
     * @type {Boolean}
     */
    this.loading = false;
  }
   view() {
    const user = this.props.user;
    let content;
     if (this.editing) {
      content = <textarea className="FormControl" placeholder={extractText(app.translator.trans('core.forum.user.bio_placeholder'))} rows="3" value={user.bio()}/>;
    } else {
      let subContent;
       if (this.loading) {
        subContent = <p className="UserBio-placeholder">{LoadingIndicator.component({size: 'tiny'})}</p>;
      } else {
        const bioHtml = user.bioHtml();
         if (bioHtml) {
          subContent = m.trust(bioHtml);
        } else if (this.props.editable) {
          subContent = <p className="UserBio-placeholder">{app.translator.trans('core.forum.user.bio_placeholder')}</p>;
        }
      }
       content = <div className="UserBio-content" onclick={this.edit.bind(this)}>{subContent}</div>;
    }
     return (
      <div className={'UserBio ' + classList({
          editable: this.props.editable,
          editing: this.editing
        })}>
        {content}
      </div>
    );
  }
   /**
   * Edit the bio.
   */
  edit() {
    if (!this.props.editable) return;
     this.editing = true;
    m.redraw();
     const bio = this;
    const save = function(e) {
      if (e.shiftKey) return;
      e.preventDefault();
      bio.save($(this).val());
    };
     this.$('textarea').focus()
      .bind('blur', save)
      .bind('keydown', 'return', save);
  }
   /**
   * Save the bio.
   *
   * @param {String} value
   */
  save(value) {
    const user = this.props.user;
     if (user.bio() !== value) {
      this.loading = true;
       user.save({bio: value})
        .catch(() => {})
        .then(() => {
          this.loading = false;
          m.redraw();
        });
    }
     this.editing = false;
    m.redraw();
  }
}

bio: Model.attribute('bio'),
        bioHtml: computed('bio', function (bio) {
          return bio ? '<p>' + $('<div/>').text(bio).html().replace(/\n/g, '<br>').autoLink({ rel: 'nofollow' }) + '</p>' : '';
        });
          
System.register('flarum/components/UserBio', ['flarum/Component', 'flarum/components/LoadingIndicator', 'flarum/utils/classList', 'flarum/utils/extractText'], function (_export, _context) {
  "use strict";
  
  var Component, LoadingIndicator, classList, extractText, UserBio;
  return {
    setters: [function (_flarumComponent) {
      Component = _flarumComponent.default;
    }, function (_flarumComponentsLoadingIndicator) {
      LoadingIndicator = _flarumComponentsLoadingIndicator.default;
    }, function (_flarumUtilsClassList) {
      classList = _flarumUtilsClassList.default;
    }, function (_flarumUtilsExtractText) {
      extractText = _flarumUtilsExtractText.default;
    }],
    execute: function () {
      UserBio = function (_Component) {
        babelHelpers.inherits(UserBio, _Component);
         function UserBio() {
          babelHelpers.classCallCheck(this, UserBio);
          return babelHelpers.possibleConstructorReturn(this, (UserBio.__proto__ || Object.getPrototypeOf(UserBio)).apply(this, arguments));
        }
         babelHelpers.createClass(UserBio, [{
          key: 'init',
          value: function init() {
            /**
             * Whether or not the bio is currently being edited.
             *
             * @type {Boolean}
             */
            this.editing = false;
             /**
             * Whether or not the bio is currently being saved.
             *
             * @type {Boolean}
             */
            this.loading = false;
          }
        }, {
          key: 'view',
          value: function view() {
            var user = this.props.user;
            var content = void 0;
             if (this.editing) {
              content = m('textarea', { className: 'FormControl', placeholder: extractText(app.translator.trans('core.forum.user.bio_placeholder')), rows: '3', value: user.bio() });
            } else {
              var subContent = void 0;
               if (this.loading) {
                subContent = m(
                  'p',
                  { className: 'UserBio-placeholder' },
                  LoadingIndicator.component({ size: 'tiny' })
                );
              } else {
                var bioHtml = user.bioHtml();
                 if (bioHtml) {
                  subContent = m.trust(bioHtml);
                } else if (this.props.editable) {
                  subContent = m(
                    'p',
                    { className: 'UserBio-placeholder' },
                    app.translator.trans('core.forum.user.bio_placeholder')
                  );
                }
              }
               content = m(
                'div',
                { className: 'UserBio-content', onclick: this.edit.bind(this) },
                subContent
              );
            }
             return m(
              'div',
              { className: 'UserBio ' + classList({
                  editable: this.props.editable,
                  editing: this.editing
                }) },
              content
            );
          }
        }, {
          key: 'edit',
          value: function edit() {
            if (!this.props.editable) return;
             this.editing = true;
            m.redraw();
             var bio = this;
            var save = function save(e) {
              if (e.shiftKey) return;
              e.preventDefault();
              bio.save($(this).val());
            };
             this.$('textarea').focus().bind('blur', save).bind('keydown', 'return', save);
          }
        }, {
          key: 'save',
          value: function save(value) {
            var _this2 = this;
             var user = this.props.user;
             if (user.bio() !== value) {
              this.loading = true;
               user.save({ bio: value }).catch(function () {}).then(function () {
                _this2.loading = false;
                m.redraw();
              });
            }
             this.editing = false;
            m.redraw();
          }
        }]);
        return UserBio;
      }(Component);
       _export('default', UserBio);
    }
  };
});;
'use strict';
 System.register('flarum/components/UserCard', ['flarum/Component', 'flarum/utils/humanTime', 'flarum/utils/ItemList', 'flarum/utils/UserControls', 'flarum/helpers/avatar', 'flarum/helpers/username', 'flarum/helpers/icon', 'flarum/components/Dropdown', 'flarum/components/UserBio', 'flarum/components/AvatarEditor', 'flarum/helpers/listItems'], function (_export, _context) {
  "use strict";
   var Component, humanTime, ItemList, UserControls, avatar, username, icon, Dropdown, UserBio, AvatarEditor, listItems, UserCard;
