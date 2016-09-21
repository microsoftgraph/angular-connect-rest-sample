/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

"use strict";

(function () {
  angular
    .module('app')
    .service('GraphHelper', ['$http', function ($http) {

      // Initialize the auth request.
      hello.init( {
        aad: clientId // from public/scripts/config.js
        }, {
        redirect_uri: redirectUrl,
        scope: graphScopes
      });

      return {

        // Sign in and sign out the user.
        login: function login() {
          hello('aad').login({
            display: 'page',
            state: 'abcd'
          });
        },
        logout: function logout() {
          hello('aad').logout();
          delete localStorage.auth;
          delete localStorage.user;
        },

        // Get the profile of the current user.
        me: function me() {
          return $http.get('https://graph.microsoft.com/v1.0/me');
        },

        // Send an email on behalf of the current user.
        sendMail: function sendMail(email) {
          return $http.post('https://graph.microsoft.com/v1.0/me/sendMail', { 'message' : email, 'saveToSentItems': true });        
        }
      }
    }]);
})();