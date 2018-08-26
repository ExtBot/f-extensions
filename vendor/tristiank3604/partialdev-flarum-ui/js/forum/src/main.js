import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import HomePage from './homepage';

app.initializers.add('partialdev-flarum-ui', function() {
  app.routes['partialdev-flarum-ui.homepage'] = {
    path: '/partialdev-flarum-ui-homepage',
    component: HomePage.component()
  };
});