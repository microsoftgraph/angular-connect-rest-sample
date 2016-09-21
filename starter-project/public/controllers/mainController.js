/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

(function () {
  angular
    .module('app')
    .controller('MainController', MainController);

  function MainController($http, $log, GraphHelper) {
    let vm = this;

    // View model properties
    vm.displayName;
    vm.emailAddress;
    vm.emailAddressSent;
    vm.requestSuccess;
    vm.requestFinished;

    // View model methods
    vm.sendMail = sendMail;
    vm.login = login;
    vm.logout = logout;
    vm.isAuthenticated = isAuthenticated;
    vm.initAuth = initAuth;

    /////////////////////////////////////////
    // End of exposed properties and methods.

    function initAuth() {

      // Check initial connection status.
      if (localStorage.auth) {
          processAuth();
      } else {
        let auth = hello('aad').getAuthResponse();
        if (auth !== null) {
          localStorage.auth = angular.toJson(auth);
          processAuth();
        }
      }
    }

    // Set the default headers and user properties

    vm.initAuth();    

    function isAuthenticated() {
      return localStorage.getItem('user') !== null;
    }

    function login() {
      GraphHelper.login();
    }

    function logout() {
      GraphHelper.logout();
    }

    // Send an email on behalf of the current user

  };
})();