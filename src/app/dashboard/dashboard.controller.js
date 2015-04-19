'use strict';

angular.module('foobank')
  .controller('DashboardCtrl', [
    '$location',
    'transfers',
    'UserSrv',
    function($location, transfers, UserSrv) {

      /**
       * Destroys a user session
       * @return {[type]} [description]
       */
      function logout() {
        UserSrv.destroySession();
        $location.path('/');
      }

      _.extend(this, {
        logout: logout,
        transfers: _.map(transfers.data.transfers, function(transfer) {
          transfer.date = new Date(transfer.date);
          return transfer;
        })
      });

    }]);
