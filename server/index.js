const path = require( "path" );

const express = require( "express" );

const PORT = process.env.PORT || 3001;

const app = express( );


// CREATION OF API ENDPOINT (to link node and react)

app.get( "/api", ( req, res ) => {

    res.json( { message: "Hello from server!" } );

} );

// ESTABLISHING PORT CONNECTION (to listen for get requests)

app.listen( PORT, ( ) => {

    console.log( `Server listening on ${PORT}` );

} );

// MAKE NODE SERVE THE FILES FOR BUILT REACT APP

app.use( express.static( path.resolve( __dirname, '../client/build' ) ) );

// ALL OTHER GET REQS NOT PREVIOUSLY HANDLED WILL RETURN THE REACT APP

app.get( '*', ( req, res ) => {

    res.sendFile( path.resolve( __dirname, '../client/build', 'index.html' ) );

} );
