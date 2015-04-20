'use strict';

angular.module('foobank')
  .service('OffersSrv', [
    '$http',
    'api',
    function OffersSrv($http, api) {

      function _get() {
        return $http.get([api.base, api.offers.get].join(''));
      }

      return {
        get: _get
      };

    }]);
