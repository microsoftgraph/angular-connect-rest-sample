/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

"use strict";

hello.on('auth.login', function (auth) {
  localStorage.auth = angular.toJson(auth.authResponse);
  delete localStorage.user;
});

(function () {
  angular
    .module('app')
    .service('GraphHelper', ['$http', function ($http, $q) {
      hello.init({
        aad: clientId // from public/scripts/constants.js
      }, {
          redirect_uri: redirectUrl,
          scope: 'user.read mail.send'
        });

      return {
        me: function me() {
          return $http.get('https://graph.microsoft.com/v1.0/me')
            .then(function (response) {
              if (response && response.data) {
                localStorage.user = angular.toJson(response.data);
                return;
              }
              else {
                throw new Error('Invalid response');
              }
            })
            .catch(function (error) {
              console.error(error);
            });
        },
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
          window.location.href('/');
        },
        sendMail: function sendMail(email) {
          return $http.post('https://graph.microsoft.com/v1.0/me/sendMail', { 'message' : email, 'saveToSentItems': true })
            .then(function (response) {
              if (response) {
                return response;
              }
              else {
                throw new Error('Invalid response');
              }
            })
            .catch(function (error) {
              console.error(error);
            });          
        }
      }
    }]);
})();