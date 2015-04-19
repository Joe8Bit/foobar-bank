'use strict';

angular.module('foobank')
  .controller('TransferCtrl', [
    '$location',
    '$translate',
    'TransferSrv',
    function($location, $translate, TransferSrv) {

      /**
       * Set our UI state to successful
       */
      function transferCreateSuccess() {
        this.success = true;
      }

      /**
       * Set out UI state to failure
       */
      function transferCreateFailure() {
        this.error = true;
      }

      /**
       * Create a transfer
       * @param  {Object} transfer The transfer object
       */
      function create(transfer) {
        var boundTransferCreateSuccess = this.transferCreateSuccess.bind(this);
        var boundTransferCreateFailure = this.transferCreateFailure.bind(this);

        TransferSrv.create(transfer).then(boundTransferCreateSuccess, boundTransferCreateFailure);
      }

      _.extend(this, {
        create: create,
        transferCreateSuccess: transferCreateSuccess,
        transferCreateFailure: transferCreateFailure,
        translate: $translate.use
      });

    }]);
