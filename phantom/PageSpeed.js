var page = require( 'webpage' ).create(),
    system  = require( 'system' ),
    t,
    address;

if( system.args.length === 1 ){
  console.log( 'Usage: loadspeed.js <some URL>' );
  phantom.exti();
}

t = Date.now();

address = system.args[1];
page.open( address, function( status ){

  if( status !== 'success' ){

    console.log( 'FAIL to load the address: ' + address );

  } else {

    t = Date.now() - t;
    console.log( 'Loading time for ' + address  + ':', t );

  }

  phantom.exit();

});
