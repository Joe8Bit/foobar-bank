'use strict';

angular.module('foobank', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngRoute',
  'pascalprecht.translate',
  'feature-flags',
  'ConfigModule'
  ])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main',
          resolve: {
            features: function(FeatureFlagsSrv) {
              return FeatureFlagsSrv.init();
            }
          }
        })
        .when('/dashboard', {
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'dashboard',
          resolve: {
            auth: function(UserSrv, $location) {
              if (!UserSrv.getSession()) {
                $location.path('/');
              }
            },

            transfers: function(TransferSrv) {
              return TransferSrv.get();
            },

            offers: function(OffersSrv) {
              return OffersSrv.get();
            }
          }
        })
        .when('/dashboard/transfer', {
          templateUrl: 'app/dashboard/transfer/transfer.html',
          controller: 'TransferCtrl',
          controllerAs: 'newTransfer',
          resolve: {
            auth: function(UserSrv, $location) {
              if (!UserSrv.getSession()) {
                $location.path('/');
              }
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true).hashPrefix('!');
    }]);
