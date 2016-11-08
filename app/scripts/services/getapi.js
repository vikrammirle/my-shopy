'use strict';

/**
 * @ngdoc function
 * @name myShopyApp.Service:Getapiservice
 * @description
 * # Getapi
 * Controller of the myShopyApp
 */

angular.module('myShopyApp')
  .factory('Dataservice', function ($http) {
    var obj = {
      getData: function() {

        function success (response) {
          return response.data;
        }

        function failure (response) {
          return response.data;
        }

        return $http.get("http://www.w3schools.com/angular/customers.php").then(success, failure);
      }
    };

    return obj;
});