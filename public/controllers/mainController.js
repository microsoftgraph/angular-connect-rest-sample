/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

(function () {
  angular
    .module('app')
    .controller('MainController', MainController);

  /**
   * The MainController code.
   */
  function MainController($http, $log, GraphHelper) {
    var vm = this;

    // Properties
    vm.isConnected;
    vm.displayName;
    vm.emailAddress;
    vm.emailAddressSent;
    vm.requestSuccess;
    vm.requestFinished;

    // Methods
    vm.sendMail = sendMail;
    vm.login = login;
    vm.logout = logout;

    /////////////////////////////////////////
    // End of exposed properties and methods.

    /**
		 * This function does any initialization work the 
		 * controller needs.
		 */
    (function activate() {
      // Check connection status and show appropriate UI.
      if (localStorage.auth) {

          // Check if the token is expired or about to expire.
          let auth = angular.fromJson(localStorage.auth);
          let expiration = new Date();
          expiration.setTime((auth.expires - 300) * 1000); 

          if (expiration > new Date()) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + auth.access_token;
            let user;
            if (!localStorage.user) {
                GraphHelper.me().then(function(data) {
                  user = angular.fromJson(localStorage.user);

                  // Get the user name and email address.
                  vm.displayName = user.displayName;
                  vm.emailAddress = user.mail || user.userPrincipalName;
                  vm.isConnected = true;
              });
            }
            else {
              user = angular.fromJson(localStorage.user);
              
              // Get the user name and email address.
              vm.displayName = user.displayName;
              vm.emailAddress = user.mail || user.userPrincipalName;
              vm.isConnected = true;
            }
          }
      }
    })();

    function login() {
      delete localStorage.user;
      GraphHelper.login();
    }

    function logout() {
      GraphHelper.logout();
    }

    function sendMail() {
      // This is the content of the email that's about to be sent.
      var emailContent = getEmailContent();

      // Build the HTTP request payload (the Message object).
      var email = {
          Subject: 'Welcome to Microsoft Graph development with Angular and the Microsoft Graph Connect sample',
          Body: {
            ContentType: 'HTML',
            Content: emailContent
          },
          ToRecipients: [
            {
              EmailAddress: {
                Address: vm.emailAddress
              }
            }
          ]
      };

      // Save email address so it doesn't get lost with two way data binding.
      vm.emailAddressSent = vm.emailAddress;
      
      GraphHelper.sendMail(email)
        .then(function (response) {
          $log.debug('HTTP request to Microsoft Graph API returned successfully.', response);
          response.status === 202 ? vm.requestSuccess = true : vm.requestSuccess = false;
          vm.requestFinished = true;
        }, function (error) {
          $log.error('HTTP request to Microsoft Graph API failed.');
          vm.requestSuccess = false;
          vm.requestFinished = true;
        });
    };

    /**
     * Gets the HTMl for the email to send.
     */
    function getEmailContent() {
      return "<html><head> <meta http-equiv=\'Content-Type\' content=\'text/html; charset=us-ascii\'> <title></title> </head><body style=\'font-family:calibri\'> <p>Congratulations " + vm.displayName + ",</p> <p>This is a message from the Microsoft Graph Connect sample. You are well on your way to incorporating Microsoft Graph endpoints in your apps. </p> <h3>What&#8217;s next?</h3><ul><li>Check out <a href='https://graph.microsoft.io' target='_blank'>graph.microsoft.io</a> to start building Microsoft Graph apps today with all the latest tools, templates, and guidance to get started quickly.</li><li>Use the <a href='https://graph.microsoft.io/graph-explorer' target='_blank'>Graph explorer</a> to explore the rest of the APIs and start your testing.</li><li>Browse other <a href='https://github.com/microsoftgraph/' target='_blank'>samples on GitHub</a> to see more of the APIs in action.</li></ul> <h3>Give us feedback</h3> <ul><li>If you have any trouble running this sample, please <a href='https://github.com/microsoftgraph/angular-connect-rest-sample/issues' target='_blank'>log an issue</a>.</li><li>For general questions about the Microsoft Graph API, post to <a href='https://stackoverflow.com/questions/tagged/microsoftgraph?sort=newest' target='blank'>Stack Overflow</a>. Make sure that your questions or comments are tagged with [microsoftgraph].</li></ul><p>Thanks and happy coding!<br>Your Microsoft Graph samples development team</p> <div style=\'text-align:center; font-family:calibri\'> <table style=\'width:100%; font-family:calibri\'> <tbody> <tr> <td><a href=\'https://github.com/microsoftgraph/angular-connect-rest-sample\'>See on GitHub</a> </td> <td><a href=\'https://officespdev.uservoice.com/\'>Suggest on UserVoice</a> </td> <td><a href=\'https://twitter.com/share?text=I%20just%20started%20developing%20%23Angular%20apps%20using%20the%20%23MicrosoftGraph%20Connect%20sample!%20&url=https://github.com/microsoftgraph/angular-connect-rest-sample\'>Share on Twitter</a> </td> </tr> </tbody> </table> </div>  </body> </html>";
    };
  };
})();