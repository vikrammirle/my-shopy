'use strict';

/**
 * @ngdoc function
 * @name myShopyApp.Service:Getapiservice
 * @description
 * # Getapi
 * Controller of the myShopyApp
 */

angular.module('myShopyApp')
  .factory('Registerservice', function ($http) {
    var obj = {
      postData: function(data) {
        function success (response) {
          return response.data;
        }

        function failure (response) {
          return response.data;
        }

        return $http.post("http://localhost:3000/users", data).then(success, failure);
      }
    };

    return obj;
});
