var flarum = require('flarum-gulp');

flarum({
  modules: {
    'zaptech/global-color-changer': [
      'src/**/*.js'
    ]
  }
});