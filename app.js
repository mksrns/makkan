const express = require('express');
const app = express();
var fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require("path");
var cors = require('cors');
const http = require('http');
const compression = require('compression');
const dailySellsRoutes = require('./api/routes/dailySells');
const superAdminRoutes = require('./api/routes/superAdmins');
const config = require('./config/database');

const port = process.env.PORT || 3000;
app.use(compression());
//Database
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to db: ' + config.database);
});

mongoose.connection.on('error', (err) => {
    if(err){
        console.log('Error is: ' +err);
    }
});

app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: 86400000,
        setHeaders: function(res, path) {
            res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString());
      }
}));

//Morgan for testing status
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads', {
    maxAge: 86400000,
    setHeaders: function(res, path) {
        res.setHeader("Expires", new Date(Date.now() + 2592000000*30).toUTCString());
}}));
//Adding middleware-cors
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes for handling requests
app.use('/superAdmin', superAdminRoutes);
// app.use('/dailySells', dailySellsRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Error handling for bad requests
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//Error handling for other erros(like db and all)
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.listen(port, ()=>{
    console.log('Server started on port: '+port);
}); 

module.exports = app;