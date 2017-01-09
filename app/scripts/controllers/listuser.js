'use strict';

/**
 * @ngdoc function
 * @name myShopyApp.controller:GetapiCtrl
 * @description
 * # Getapi
 * Controller of the myShopyApp
 */
 angular.module('myShopyApp')
 .controller('ListuserCtrl', function ($scope, Dataservice) {

   var viewModel = this;
   viewModel.dataObj = {};

   Dataservice.getData().then(function(response) {
    viewModel.dataObj = response.users
  });

   // Delete function
   $scope.del = function(user) {
    // console.log(user);
    var result = confirm("Are you sure?");
    if(result === true) {
      Dataservice.deleteData(user.id).then(function(response) {
        Dataservice.getData().then(function(response) {
          viewModel.dataObj = response.users
        });
      });
    };
  };

});
