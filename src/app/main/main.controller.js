'use strict';

angular.module('foobank')
  .controller('MainCtrl', [
    '$translate',
    function($translate) {

      _.extend(this, {
        translate: $translate.use
      });

    }]);
