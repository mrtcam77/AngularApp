'use strict';

/**
 * @ngdoc service
 * @name angularAppApp.forecast
 * @description
 * # forecast
 * Factory in the angularAppApp.
 */


angular.module('angularAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=7c05932d89845c2f21fbb4532f9ca6ae', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
