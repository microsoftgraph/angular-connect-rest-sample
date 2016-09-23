/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

// This sample uses an open source OAuth 2.0 library that is compatible with the Azure AD v2.0 endpoint. 
// Microsoft does not provide fixes or direct support for this library. 
// Refer to the library’s repository to file issues or for other support. 
// For more information about auth libraries see: https://azure.microsoft.com/documentation/articles/active-directory-v2-libraries/ 
// Library repo: https://github.com/MrSwitch/hello.js

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