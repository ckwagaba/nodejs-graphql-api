const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

// routes
require('./app/routes')(app, {});

app.listen(port, () => {
   console.log('We are live on ' + port); 
});