'use strict';

var localApp = null;
var currentFeeds = {'poloniex': ['']};
var poloniex = require('./poloniex.js');

module.exports = {
    currentFeeds : currentFeeds,
    initialize : initialize,
    stopFeed : stopFeed,
    startFeed : startFeed,
    addFeed : addFeed,
    removeFeed : removeFeed
};

function initialize(app){
    localApp = app;
    poloniex.initialize(app);
    
    localApp.exchangeFeed.currentFeeds['poloniex'] = poloniex.currentFeeds;
}

function stopFeed(exchangeName, feedName){
    if(exchangeName.toLowerCase() == 'poloniex'){
        poloniex.stopFeed(feedName);
    }
}

function startFeed(exchangeName, feedName){
    if(exchangeName.toLowerCase() == 'poloniex'){
        poloniex.startFeed(feedName);
    }
}

function addFeed(exchangeName, feedName){
    if(exchangeName.toLowerCase() == 'poloniex'){
        poloniex.addFeed(feedName);
        localApp.exchangeFeed.currentFeeds['poloniex'] = poloniex.currentFeeds;    
    }
}

function removeFeed(exchangeName, feedName){
    if(exchangeName.toLowerCase() == 'poloniex'){
        poloniex.removeFeed(feedName);
        localApp.exchangeFeed.currentFeeds['poloniex'] = poloniex.currentFeeds;    
    }
}