'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the angularAppApp.
 */
angular.module('angularAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=7c05932d89845c2f21fbb4532f9ca6ae', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
