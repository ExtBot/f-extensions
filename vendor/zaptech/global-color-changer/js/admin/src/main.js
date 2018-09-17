import app from 'flarum/app';
import { extend } from 'flarum/extend';
import PermissionGrid from 'flarum/components/PermissionGrid';
import CustomHeaderSettingsModal from 'zaptech/global-color-changer/components/CustomHeaderSettingsModal';
import Page from 'flarum/components/Page';

app.initializers.add('zaptech-global-color-changer', () => {
  app.extensionSettings['zaptech-global-color-changer'] = () => app.modal.show(new CustomHeaderSettingsModal());
    extend(Page.prototype, 'init', function() {
      //DEFINE THE VARIABLES FOR WRITING TO THE HEAD
      var hexcode = app.forum.attribute("global-color.hexcode");
      var herohex = app.forum.attribute('global-color.herohex');
      var headerhex = app.forum.attribute("global-color.headerhex")
      var apphex = app.forum.attribute("global-color.apphex");
      var adminnavhex = app.forum.attribute('global-color.adminnavhex');
      var adminpagehex = app.forum.attribute("global-color.adminpagehex")
      //WRITE HEX CODES ALONG WITH CSS TO THE HEAD
      document.querySelector("head").innerHTML += '<style>#app{background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#header{background:' + headerhex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#admin-navigation{background:' + adminnavhex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.ExtensionsPage-header{background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups{background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.TagsPage-header{background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(1){background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(2){background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(3){background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(4){background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(5){background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button:nth-child(6){background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>#content > div > div.PermissionsPage-groups > div > button.Button.Group.Group--add{background:' + adminpagehex + '}</style>';
      document.querySelector("head").innerHTML += '<style>.DashboardPage{background:' + adminpagehex + '}</style>';
    });
});