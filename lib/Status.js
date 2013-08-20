/*
 * Status
 * https://github.com/JamesMeldrum/Status
 *
 * Copyright (c) 2013 James Meldrum
 * Licensed under the MIT license.
 */

var childProcess  = require( 'child_process' ),
    phantomJS     = require( 'phantomjs' ),
    path          = require( 'path' );
var binPath       = phantomJS.path;

var childArgs = [
  path.join( __dirname, '../phantom/phantomjs.js' ),
  'http://www.winespectator.com'
];

childProcess.execFile( binPath, childArgs, function( err, stdout, stderr ){
  // Handle results
  console.log( err );
  console.log( stdout );
  console.log( stderr );
});
