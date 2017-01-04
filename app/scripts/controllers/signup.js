'use strict'

angular.module('myShopyApp')
.controller('SignupCtrl', function($scope, $http, Registerservice){

  var vm = this;
    // create a blank object to handle form data
    // $scope.signupmsg = {};

    // calling our submit function
    $scope.submitSignupForm = function(signupmsg) {
      var data = {"user": {"email": signupmsg.email, "password": signupmsg.password, "password_confirmation": signupmsg.password_confirmation, "first_name": signupmsg.first_name, "last_name": signupmsg.last_name, "mobile_number": signupmsg.mobile_number}}
      console.log(data)
      Registerservice.postData(data).then(function(response){
        console.log(response);
      })
    };
  });