import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('albums', function() {
    this.route('show', {path: '/id/:album_id'});
    this.route('user-albums', {path: '/:username'});
    this.route('create');
  });
  this.route('login');
  this.route('register');
  this.route('users', function() {
    this.route('show', { path: '/:username' });
  });
});

export default Router;
