const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8080;

const db = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));

mongoClient.connect(db.url, (error, database) => {
    if (error) return console.log(error);
    require('./app/routes')(app, database);
    app.listen(port, () => {
       console.log('We are live on ' + port);
    });
});