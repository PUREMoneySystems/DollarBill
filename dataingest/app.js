'use strict';

console.log('Starting the application ... ');

var util = require('util');
var app = require('express')();
var bodyParser = require('body-parser');

// Determine current environment
var currentEnvironment = ((process.env.CURRENT_ENVIRONMENT) ? process.env.CURRENT_ENVIRONMENT : "LOCAL");
var isLocal = (currentEnvironment == "LOCAL");
var config = require('./config/' + currentEnvironment + '-config.json');

// Create the Swagger Application
var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');

// Load the Exchange Data Feed
var exchangeFeed = require('./api/helpers/exchangeFeed.js');

// Load the DataStore
var datastore = require('./api/helpers/datastore.js');

// Load the Runtime Globals
var runtime = require('./api/helpers/runtime.js');
var unknownState = runtime.unknown;


// Expose app infrastructure to other modules
module.exports = {
    app: app,
    config: config,
    exchangeFeed : exchangeFeed,
    datastore: datastore,
    currentState: unknownState
};



// Configure and Start the Swagger app
var swaggerConfig = {
    appRoot: __dirname
};

SwaggerExpress.create(swaggerConfig, function(err, swaggerExpress) {
    if (err) { throw err; }

    //Set a large limit on the bodyParser
    app.use(bodyParser.urlencoded({limit: '1000mb', extended:true}));
    app.use(bodyParser.json({limit: '1000mb'}));

    // add swagger-ui
    app.use(SwaggerUi(swaggerExpress.runner.swagger));

    // install middleware
    swaggerExpress.register(app);

    // start Express
    var port = process.env.PORT || 10010;
    app.listen(port);

    // initialize all the service providers
    exchangeFeed.initialize(module.exports);
    datastore.initialize(module.exports);
    
    console.log('Listening on port ' + port);
});
