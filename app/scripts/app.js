'use strict';

/**
 * @ngdoc overview
 * @name myShopyApp
 * @description
 * # myShopyApp
 *
 * Main module of the application.
 */
angular
  .module('myShopyApp', [
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
      .when('/signup', {
        templateUrl: 'views/register/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/login', {
        templateUrl: 'views/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/listuser', {
        templateUrl: 'views/listuser.html',
        controller: 'ListuserCtrl',
        controllerAs: 'list'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
