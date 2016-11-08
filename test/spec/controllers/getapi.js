'use strict';

describe('Controller: GetapiCtrl', function () {

  // load the controller's module
  beforeEach(module('startApp'));

  var getapi, scope, deferred, dataservice;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope, Dataservice) {
    scope = $rootScope.$new();
    deferred = $q.defer();
    dataservice = Dataservice;
    spyOn(Dataservice, 'getData').and.returnValue(deferred.promise);
    
    getapi = $controller('GetapiCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should call Dataservice getData function', function () {
    scope.$digest();
    deferred.resolve();
    expect(dataservice.getData).toHaveBeenCalled();
  });

});
