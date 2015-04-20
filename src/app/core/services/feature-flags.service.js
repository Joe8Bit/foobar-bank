'use strict';

angular.module('foobank')
  .service('FeatureFlagsSrv', [
    '$http',
    '$q',
    'api',
    'featureFlags',
    function FeatureFlagsSrv($http, $q, api, featureFlags) {

      function _init() {
        return featureFlags.set($http.get([api.base, api.features.get].join('')));
      }

      return {
        init: _init
      };

    }]);
