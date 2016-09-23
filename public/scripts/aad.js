/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

// This sample uses an open source OAuth 2.0 library that is compatible with the Azure AD v2.0 endpoint. 
// Microsoft does not provide fixes or direct support for this library. 
// Refer to the library’s repository to file issues or for other support. 
// For more information about auth libraries see: https://azure.microsoft.com/documentation/articles/active-directory-v2-libraries/ 
// Library repo: http://adodson.com/hello.js/

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