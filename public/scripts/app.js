/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

(function () {
  angular.module('app', [
    'ngRoute',
    'AdalAngular',
		'angular-loading-bar'
  ])
	.config(config);
  
  // Configure the routes.
	function config($routeProvider, $httpProvider, adalAuthenticationServiceProvider, cfpLoadingBarProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainController',
				controllerAs: 'main'
			})

			.otherwise({
				redirectTo: '/'
			});
	
		// Initialize the ADAL provider with your clientID (found in the Azure Management Portal) and the API URL (to enable CORS requests).
		adalAuthenticationServiceProvider.init(
			{
				clientId: clientId,
				// The endpoints here are resources for ADAL to get tokens for.
				endpoints: {
					'https://graph.microsoft.com': 'https://graph.microsoft.com'
				}
			},
			$httpProvider
			);
			
		// Remove spinner from loading bar.
    cfpLoadingBarProvider.includeSpinner = false;
	};
})();