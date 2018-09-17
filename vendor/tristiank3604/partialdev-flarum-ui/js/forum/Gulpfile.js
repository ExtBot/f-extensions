var flarum = require('flarum-gulp');

flarum({
  modules: {
    'tristiank3604/partialdev-flarum-ui': [
      'src/**/*.js'
    ]
  }
});