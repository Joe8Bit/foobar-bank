'use strict';

angular.module('foobank')
  .config([
    '$translateProvider',
    function($translateProvider) {
    $translateProvider.translations('en', {

      // Cross site
      NOT_REAL_BANK: 'This is not a real bank',
      LOGOUT: 'Logout',

      // Landing page
      BRAND: 'Foobar',
      TAG_LINE: 'Your digital bank',
      BLURB: 'Foobar Bank is part of a new generation of banks that put its\' customers digital needs first. Login now too:',
      FEATURE_1: 'View and create transfers',
      USERNAME: 'Username',
      PASSWORD: 'Password',
      LOGIN: 'Login',
      USER_ERROR: 'You must enter a username and password',
      USERNAME_ERROR: 'You must enter a username',
      PASSWORD_ERROR: 'You must enter a password',

      // Dashboard page
      WELCOME_DESKTOP: 'Welcome to your online banking dashboard',
      WELCOME_MOBILE: 'Welcome',
      RECENT_TRANSFERS: 'Recent transfers',
      NEW_TRANSFER: 'New transfer',
      AMOUNT: 'Amount',
      ACCOUNT: 'Account',
      DATE: 'Date',

      // Trasfer page
      BACK_TO_DASHBOARD: 'Back to dashboard',
      TRANSFER_SUCCESS: 'Your transfer was made',
      TRANSFER_FAILURE: 'There was an error processing your tranfer',
      TRANSFER_AMOUNT: 'Transfer amount',
      TO_ACCOUNT: 'To account',
      TRANSFER: 'Transfer'
    });
    $translateProvider.translations('tr', {

      // Cross site
      NOT_REAL_BANK: 'Bu bir gerçek banka değildir',
      LOGOUT: 'Çıkış Yap',

      // Landing page
      BRAND: 'Foo',
      TAG_LINE: 'Dijital bankası',
      BLURB: 'Foo Bankası ilk olarak \' müşterilerine dijital ihtiyaçlarını koymak bankaların yeni nesil bir parçasıdır . Şimdi de Girişi :',
      FEATURE_1: 'Görüntüleyin ve transferler oluşturmak',
      USERNAME: 'Kullanıcı adı',
      PASSWORD: 'şifre',
      LOGIN: 'Oturum Aç',
      USER_ERROR: 'Bir kullanıcı adı ve şifrenizi girmeniz gerekir',
      USERNAME_ERROR: 'Bir kullanıcı adı girmelisiniz',
      PASSWORD_ERROR: 'Bir şifre girmeniz gerekir',

      // Dashboard page
      WELCOME_DESKTOP: 'Online bankacılık pano Hoşgeldiniz',
      WELCOME_MOBILE: 'karşılama',
      RECENT_TRANSFERS: 'Son transferleri',
      NEW_TRANSFER: 'yeni transferi',
      AMOUNT: 'miktar',
      ACCOUNT: 'banka hesabı',
      DATE: 'tarih',

      // Trasfer page
      BACK_TO_DASHBOARD: 'Geri pano için',
      TRANSFER_SUCCESS: 'Sizin transferi yapıldı',
      TRANSFER_FAILURE: 'Senin kâğıdı ve işlenirken bir hata oluştu',
      TRANSFER_AMOUNT: 'aktarım tutarı',
      TO_ACCOUNT: 'hesap için',
      TRANSFER: 'aktarma'
    });
    $translateProvider.preferredLanguage('en');
  }]);
