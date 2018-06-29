
'use strict';

var app = require('../../app.js');
var runtime = require('../helpers/runtime.js');


module.exports = {
    getStatus: getStatus,
    changeStatus: changeStatus
};




function getStatus(req, res){
    return new Promise(function(resolve, reject){
        try{
            var runtimeStatus = {
                indicator: app.currentState.indicator,
                message: app.currentState.message,
                validNextStates: app.currentState.validNextStates,
                databasesAreCreated: app.datastore.databasesAreCreated,
                datafeeds: app.exchangeFeed.currentFeeds
            };
            res.json(runtimeStatus);
            resolve(runtimeStatus);            
        }catch(e){
            res.status(500).send({error:e.message});
            reject(e);
        }
    });
}

function changeStatus(req, res){
    return new Promise(function(resolve, reject){
        try{
            console.log("\nSuccessfully executed a POST");
            res.json("\nSuccessfully executed a POST");
            resolve(true);
        }catch(e){
            res.status(500).send({error:e.message});
            reject(e);
        }
    });
}