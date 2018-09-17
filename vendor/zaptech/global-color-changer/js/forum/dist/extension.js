'use strict';

System.register('zaptech/global-color-changer/main', ['flarum/app', 'flarum/extend', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var app, extend, Page;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {

            app.initializers.add('zaptech-global-color-changer', function () {
                extend(Page.prototype, 'init', function () {
                    //DEFINE THE MSG FOR THE CONSOLE.LOG COMMAND
                    var msg, hexcode, headerhex, herohex;
                    msg = "Global Color Changer HexCodes: ";
                    //LOG THE HEXCODES TO THE CONSOLE
                    console.log(msg, app.forum.attribute("global-color.headerhex"), app.forum.attribute("global-color.herohex"), app.forum.attribute("global-color.hexcode"), app.forum.attribute("global-color.adminpagehex"), app.forum.attribute("global-color.adminnavhex"), app.forum.attribute("global-color.apphex"));
                    //DEFINE THE VARIABLES FOR WRITING TO THE HEAD
                    var apphex = app.forum.attribute("global-color.apphex");
                    var herohex = app.forum.attribute("global-color.herohex");
                    var headerhex = app.forum.attribute("global-color.headerhex");
                    //WRITE HEX CODES ALONG WITH CSS TO THE HEAD
                    document.querySelector("head").innerHTML += '<style>.Hero{background:' + herohex + '} #app{background:' + apphex + '} #header{background:' + headerhex + '}</style>';
                });
            });
        }
    };
});
