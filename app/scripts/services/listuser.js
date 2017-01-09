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

        return $http.get("http://localhost:3000/users").then(success, failure);
      },
      deleteData: function(id) {

        function success (response) {
          return response.data;
        }

        function failure (response) {
          return response.data;
        }

        return $http.delete("http://localhost:3000/users/"+id).then(success, failure);
      }
    };

    return obj;
});
