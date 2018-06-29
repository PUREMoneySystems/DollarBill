'use strict';

var app = require('../../app.js');


module.exports = {
    getAllFeeds : getAllFeeds,
    stopAllFeeds : stopAllFeeds,
    startAllFeeds : startAllFeeds,
    changeFeedRunState : changeFeedRunState,
    addFeed : addFeed,
    removeFeed : removeFeed
};



function getAllFeeds(req, res){
    return new Promise(function(resolve, reject){
        try{
            var feeds = app.exchangeFeed.currentFeeds[req.path.exchangeName];

            console.log(req.params.exchangeName);
            console.log(app.exchangeFeed.currentFeeds);
            console.log(app.exchangeFeed.currentFeeds[req.path.exchangeName]);

            console.log("\nSuccessfully executed a POST");
            res.json(feeds);
            resolve(feeds);
        }catch(e){
            res.status(500).send({error:e.message});
            reject(e);
        }
    });}
function stopAllFeeds(req, res){}
function startAllFeeds(req, res){}
function changeFeedRunState(req, res){}
function addFeed(req, res){
    return new Promise(function(resolve, reject){
        try{
            // Add the new feed to the list of currentFeeds
            app.exchangeFeed.addFeed(req.path.exchangeName, req.body.feedName);

            console.log("\nSuccessfully executed a POST");
            res.json("\nSuccessfully executed a POST");
            resolve(true);
        }catch(e){
            res.status(500).send({error:e.message});
            reject(e);
        }
    });
}
function removeFeed(req, res){}