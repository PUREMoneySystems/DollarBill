var express = require('express');
var openapi = require('express-openapi');
const fs = require('fs');
const path = require('path');
var feedController = require('../api/controllers/feedController.js');
var runtimeController = require('../api/controllers/runtimeController.js');
var apiPath = '../api/swagger/swagger.yaml';

const app = express();
openapi.initialize({
  app,
  // NOTE: If using yaml it's necessary to use "fs" e.g.
  // apiDoc: fs.readFilesync(path.resolve(__dirname, './api-v1/api-doc.yml'), 'utf8'),
  apiDoc: fs.readFileSync(path.resolve(__dirname, apiPath), 'utf8'),
  dependencies: {
    feedController: feedController,
    runtimeController: runtimeController
  },
  paths: {}
});

app.listen(3000);