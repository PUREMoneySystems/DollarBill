'use strict';

var localApp = null;
//var currentFeeds = [''];

module.exports = {
    currentFeeds : [''],
    initialize : initialize,
    stopFeed : stopFeed,
    startFeed : startFeed,
    addFeed : addFeed,
    removeFeed : removeFeed
};

function initialize(app){   
    localApp = app;
    //currentFeeds = localApp.config.poloniexDataFeeds;
    module.exports.currentFeeds = localApp.config.poloniexDataFeeds;
}
function stopFeed(feedName){
    console.log('stopFeed: Stopped a Feed - ' + feedName);}
function startFeed(feedName){
    console.log('startFeed: Started a Feed - ' + feedName);
}
function addFeed(feedName){
    if(module.exports.currentFeeds.indexOf(feedName) > -1){return;}

    // Add the Feed to the list of currentFeeds, then expose through the main App
    module.exports.currentFeeds.push(feedName);
    console.log('addFeed: Added a new Feed - ' + feedName);

    // If the current App is Started, then start this Feed
    if (localApp.currentState.message == 'Started'){
        startFeed(feedName);
    }
}
function removeFeed(){
    if(module.exports.currentFeeds.indexOf(feedName) == -1){return;}

    // If the current App is Started, then stop this Feed
    if (localApp.currentState.message == 'Started'){
        stopFeed(feedName);
    }
    // Remove the Feed from the list of currentFeeds, then expose through the main App
    var feedIndex = module.exports.currentFeeds.indexOf(feedName);
    module.exports.currentFeeds.splice(feedIndex, 1);
    console.log('removeFeed: Removed an existing Feed - ' + feedName);
}