'use strict';

angular.module('foobank')
  .service('LoginValidationSrv', function LoginValidationSrv() {

    /**
     * Checks the existence of the user object
     * @param  {Object} user The user object
     * @return {Boolean}      Whether it is valid or not
     */
    function validateUserObject(user) {
      return !!user;
    }

    /**
     * Checks the validity of the username field
     * @param  {Object} user The user object
     * @return {Boolean}      Whether it is valid or not
     */
    function validateUsername(user) {
      return user && !!user.username;
    }

    /**
     * Checks the validity of the password field
     * @param  {Object} user The user object
     * @return {Boolean}      Whether it is valid or not
     */
    function validatePassword(user) {
      return user && !!user.password;
    }

    /**
     * Performs some very naive validation of properties on an object
     * @param  {Object} user The user object to validate
     * @return {Object}      A validation object
     */
    function _validate(user) {
      return _.chain([[validateUserObject, 'USER_ERROR'], [validateUsername, 'USERNAME_ERROR'], [validatePassword, 'PASSWORD_ERROR']])
              .map(function(validator) {
                return (!validator[0](user)) ? { valid: false, message: validator[1] } : { valid: true };
              })
              .find({valid: false})
              .value();
    }

    return {
      validate: _validate
    };

  });
