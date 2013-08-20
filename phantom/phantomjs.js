/**
 *
 *  PageSpeed.js - Reports PageSpeed events
 *
 *  @param {string} address URL to get the PageSpeed of
 *
 *  Via stdout
 *  @returns {Object} pageSpeed PageSpeed Info Object
 *  @returns {Object} pageSpeed.pageLoad Time (ms) to PageLoad Event
 *  @returns {Object} pageSpeed.pageReady Time (ms) to PageReady Event
 *    
 */

var page = require( 'webpage' ).create(),
    system  = require( 'system' ),
    t,
    address;

if( system.args.length === 1 ){
  console.log( 'Usage: loadspeed.js <some URL>' );
  phantom.exti();
}

address = system.args[1];

/*
 *
 *  Initialize page object
 *
 */

page.onInitialized = function(){

  page.evaluate( function(){

    document.addEventListener( 'DOMContentLoaded', function(){

      console.log( 'DOMContentLoaded' );

    }, false);
    document.addEventListener( 'onload', function(){

      console.log( 'onLoad' );
      console.log( 'onLoad' );

    }, false);
  });
};

page.onResourceRequested = function(){
  console.log( 'resource requested' );
};
page.onResourceReceived = function(){
  console.log( 'resource received' );
};
page.onLoadFinished = function(){
  console.log( 'page finished loading' );
};

/*
 *
 *  Mirror logs to stdout
 *
 */

page.onConsoleMessage = function( msg ){
  console.log( msg );
};

/*
 * Page Open Event
 */

t = Date.now();

page.open( address, function( status ){

  var pageSpeed = {
    pageLoad  : 0,
    pageReady : 0,
    url       : address
  };

  if( status !== 'success' ){

    console.log( 'FAIL to load the address: ' + address );

  } else {

    t = Date.now() - t;
    console.log( 'Loading time for ' + address  + ':', t );

  }

  console.log( pageSpeed );

  phantom.exit();

});
