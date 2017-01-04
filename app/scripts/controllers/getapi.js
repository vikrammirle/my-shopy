'use strict';

/**
 * @ngdoc function
 * @name myShopyApp.controller:GetapiCtrl
 * @description
 * # Getapi
 * Controller of the myShopyApp
 */
angular.module('myShopyApp')
  .controller('GetapiCtrl', function (Dataservice) {

  	var viewModel = this;
  	viewModel.dataObj = {};

  	Dataservice.getData().then(function(response) {
  		viewModel.dataObj = response.users
  	});

  });
