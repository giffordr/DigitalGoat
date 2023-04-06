'use strict';

/*
 * A simple Node.js program for exporting the current working directory via a webserver listing
 * on a hard code (see portno below) port. To start the webserver run the command:
 *    node webServer.js
 *
 * Note that anyone able to connect to localhost:3001 will be able to fetch any file accessible
 * to the current user in the current directory or any of its children.
 */

/* jshint node: true */

var express = require('express');
const prerender = require('prerender');
const server = prerender();
server.start();

var portno = 3001;   // Port number to use

var app = express();

// We have the express static module (http://expressjs.com/en/starter/static-files.html) do all
// the work for us.
app.use(require('prerender-node'));
app.use(express.static(__dirname));

// if something redirects here, give it a 404 status and "Not found" message!
app.get('/not-found', (req, res) => {
  res.sendStatus(404);
});

app.get('*', (req, res) => {
  res.sendFile(ROOT_FOLDER + '/index.html');
});




var server2 = app.listen(portno, function () {
  var port = server2.address().port;
  console.log('Listening at http://localhost:' + port + ' exporting the directory ' + __dirname);
});

