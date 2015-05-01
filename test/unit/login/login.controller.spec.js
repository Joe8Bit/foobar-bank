'use strict';

describe('The Login controller', function() {
  var scope;
  var LoginCtrl;
  var $location;
  var UserSrv;

  var LoginValidationSrv = {
    validate: sinon.stub()
  };

  LoginValidationSrv.validate.onCall(0).returns(undefined);

  LoginValidationSrv.validate.returns({
    valid: false
  });

  beforeEach(module('foobank'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    $location = {
      path: sinon.spy()
    };

    UserSrv = {
      createSession: sinon.stub().returns({
        then: function(success) {
          success({
            data: {
              id: 'lkdfjlkjg'
            }
          });
        }
      }),
      setSession: sinon.stub()
    };

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $location: $location,
      LoginValidationSrv: LoginValidationSrv,
      UserSrv: UserSrv
    });

  }));

  it('should expose the correct properties to the view', inject(function() {
    expect(LoginCtrl).not.toBeUndefined();
    expect(LoginCtrl.login).not.toBeUndefined();
    expect(LoginCtrl.loginSuccess).not.toBeUndefined();
    expect(LoginCtrl.setError).not.toBeUndefined();
  }));

  it('should set an error into the scope', inject(function() {
    LoginCtrl.setError('An error');
    expect(LoginCtrl.error).toBe('An error');
  }));

  it('should redirect to the dashboard when successfully logged in', inject(function() {
    LoginCtrl.loginSuccess({
      data: {
        id: 'lfjlk'
      }
    });
    expect($location.path.called).toBeTruthy();
    expect($location.path.calledWith('/dashboard')).toBeTruthy();
    expect(UserSrv.setSession.called).toBeTruthy();
  }));

  it('call the login service if user is valid', inject(function() {
    LoginCtrl.login({
      username: 'foo',
      password: 'bar'
    });
    expect(LoginValidationSrv.validate.called).toBeTruthy();
    expect(UserSrv.createSession.called).toBeTruthy();
  }));

  it('call the error service if user is not valid', inject(function() {
    LoginCtrl.login(undefined);
    expect(LoginValidationSrv.validate.called).toBeTruthy();
    expect(UserSrv.createSession.called).toBe(false);
  }));

});
