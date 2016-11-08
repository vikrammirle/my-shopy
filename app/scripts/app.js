'use strict';

/**
 * @ngdoc overview
 * @name startApp
 * @description
 * # startApp
 *
 * Main module of the application.
 */
angular
  .module('startApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/getapi', {
        templateUrl: 'views/getapi.html',
        controller: 'GetapiCtrl',
        controllerAs: 'Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
