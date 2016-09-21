/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

hello.init({

	aad: {
		name: 'Azure Active Directory',	
		oauth: {
			version: 2,
			auth: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
			grant: 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
		},
		scope_delim: ' ',


		// Don't even try submitting via form.
		// This means no POST operations in <=IE9
		form: false
	}
});

hello.on('auth.login', function (auth) {

  // save the auth info into localStorage
  localStorage.auth = angular.toJson(auth.authResponse);
});