'use strict'

angular.module('myShopyApp')
.controller('SignupCtrl', function($scope, $http, Registerservice){

  $scope.submitSignupForm = function(signupmsg) {
    var data = {
      "user": {
        "first_name": signupmsg.first_name,
        "last_name": signupmsg.last_name,
        "email": signupmsg.email,
        "mobile_number": signupmsg.mobile_number,
        "password": signupmsg.password,
        "password_confirmation": signupmsg.password_confirmation
      }
    }
    Registerservice.postData(data).then(function(response){
        // console.log(response);
      });

  };
});