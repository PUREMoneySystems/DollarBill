'use strict';

var possibleStates = [
    {indicator: 0, message: 'Unknown', validNextStates: [1,4]},
    {indicator: 1, message: 'Initialized', validNextStates: [2,4]},
    {indicator: 2, message: 'Started', validNextStates: [3,4]},
    {indicator: 3, message: 'Stopped', validNextStates: [2,4]},
    {indicator: 4, message: 'Error', validNextStates: [1,2]}    
];


module.exports = {
    getStateByIndicator: getStateByIndicator,
    unknown: getStateByIndicator(0),
    initialized: getStateByIndicator(1),
    started: getStateByIndicator(2),
    stopped: getStateByIndicator(3),
    error: getStateByIndicator(4)
};



function getStateByIndicator(indicator){
    var unknownState = null;

    possibleStates.forEach(function(state){
        if(state.indicator == 0){
            unknownState = state;
        }

        if(state.indicator == indicator){
            return state;
        }
    });

    return unknownState;
}