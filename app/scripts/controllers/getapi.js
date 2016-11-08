'use strict';

/**
 * @ngdoc function
 * @name startApp.controller:GetapiCtrl
 * @description
 * # Getapi
 * Controller of the startApp
 */
angular.module('startApp')
  .controller('GetapiCtrl', function (Dataservice) {

  	var viewModel = this;
  	viewModel.dataObj = {};

  	Dataservice.getData().then(function(response) {
  		viewModel.dataObj = response.records;
  	});

  });
