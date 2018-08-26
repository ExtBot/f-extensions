var gulp = require('flarum-gulp');

gulp({
  modules: {
    'nearata/flarum-ext-groupstyle': [
      'src/**/*.js',
    ]
  }
});
