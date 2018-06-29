
'use strict';

var dbConnection = require('./couchDB.js');

module.exports = {
    initialize : dbConnection.initialize,
    verifyDatabasesExist : dbConnection.verifyDatabasesExist,
    databasesAreCreated : dbConnection.databasesAreCreated,
    createDatabases : dbConnection.createDatabases,
    createData : dbConnection.createData,
    retrieveData : dbConnection.retrieveData,
    updateData : dbConnection.updateData,
    deleteData : dbConnection.deleteData
}
