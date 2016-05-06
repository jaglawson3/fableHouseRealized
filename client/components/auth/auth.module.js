'use strict';

angular.module('fableHouseRealizedApp.auth', [
  'fableHouseRealizedApp.constants',
  'fableHouseRealizedApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
