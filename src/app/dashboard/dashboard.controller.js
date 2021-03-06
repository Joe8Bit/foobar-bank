'use strict';

angular.module('foobank')
  .controller('DashboardCtrl', [
    '$location',
    '$translate',
    'transfers',
    'UserSrv',
    function($location, $translate, transfers, UserSrv) {

      /**
       * Destroys a user session
       * @return {[type]} [description]
       */
      function logout() {
        UserSrv.destroySession();
        $location.path('/login');
      }

      _.extend(this, {
        logout: logout,
        translate: $translate.use,
        transfers: _.map(transfers.data.transfers, function(transfer) {
          transfer.date = new Date(transfer.date);
          return transfer;
        })
      });

    }]);
