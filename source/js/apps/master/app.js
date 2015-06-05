/**
 * apps/master/app
 */

define('apps/master/app', [
  'settings'
], function() {

  'use strict';

  var App = {};

  /**
   * start()
   *
   * Gets the application running
   */
  App.start = function() {
    console.log('App Started');
  };

  return App;

});
