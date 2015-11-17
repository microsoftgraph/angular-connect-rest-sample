/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path'); 

// Initialize variables. 
var port = process.env.PORT || 8080; 

// Configure morgan module to log all requests.
app.use(morgan('dev')); 

// Set the front-end folder to serve public assets.
app.use(express.static(__dirname + '/public'));

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start the server.  
app.listen(port);
console.log('Listening on port ' + port + '...'); 

// *********************************************************
//
// O365-Angular-Microsoft-Graph-Connect, https://github.com/OfficeDev/O365-Angular-Microsoft-Graph-Connect
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// *********************************************************