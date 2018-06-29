
'use strict';

var nano = require('nano');

var localApp = null;
var couchDB = null;
var databasesAreCreated = false;



module.exports = {
    initialize : initialize,
    verifyDatabasesExist : verifyDatabasesExist,
    databasesAreCreated : databasesAreCreated,
    createDatabases : createDatabases,
    createData : createData,
    retrieveData : retrieveData,
    updateData : updateData,
    deleteData : deleteData
}


function initialize(app){
    localApp = app;

    // Create a connection to the local CouchDB server
    couchDB = nano(localApp.config.couchDBURL);

    // Check that the databases have already been created
    verifyDatabasesExist().catch(
        function(err){
            console.log('Encountered an error while verifying CouchDB\'s exist : ' + err);
    });
}

function verifyDatabasesExist(){
    var databaseIsMissing = false;

    return new Promise(function (resolve, reject){
        couchDB.db.list(function(listError, currentDBs){
            if(listError){reject(listError);}

            var requiredDBs = localApp.config.couchDBDatabases;
    
            requiredDBs.forEach(function(requiredDB){
                if(!databaseIsMissing){
                    var currentRequiredDBExists = false;

                    //currentDBs.forEach(function(currentDB){
                    //    if(currentDB == requiredDB){
                        currentRequiredDBExists = true;
                    //}
                    //});

                    if(!currentRequiredDBExists){databaseIsMissing = true;}
                }
            });

            databasesAreCreated = !databaseIsMissing;
            localApp.datastore.databasesAreCreated = databasesAreCreated;
            resolve(databasesAreCreated);
        });
    });
}

function createDatabases(){
    return new Promise(function (resolve, reject){
        var requiredDBs = app.config.couchDBDatabases;

        couchDB.db.list(function(listError, currentDBs){
            if(listError){reject(listError);}

            requiredDBs.forEach(function(requiredDB){
                currentDBs.forEach(function(currentDB){
                    var foundRequiredDB = false;    
                    if(currentDB == requiredDB){foundRequiredDB = true;}
    
                    if(!foundRequiredDB){
                        couchDB.db.create(requiredDB, function(creationError, creationResponse){
                            if(creationError){reject(creationError);}
                        });
                    }
                });
            });

            resolve(true);
        });
    });
}

function createData(data){
    return new Promise(function (resolve, reject){
        try{
            resolve(false);
        }catch(e){
            reject(e);
        }
    });
}

function retrieveData(query){
    return new Promise(function (resolve, reject){
        try{
            resolve(false);
        }catch(e){
            reject(e);
        }
    });
}

function updateData(id, data){
    return new Promise(function (resolve, reject){
        try{
            resolve(false);
        }catch(e){
            reject(e);
        }
    });
}

function deleteData(id){
    return new Promise(function (resolve, reject){
        try{
            resolve(false);
        }catch(e){
            reject(e);
        }
    });
}
