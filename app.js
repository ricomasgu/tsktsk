// Require Express
const express = require('express');

// Require hbs
const hbs = require('hbs');

// ℹ️ Connects to the database
require('./db');

// Express server handling requests and responses
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

//to register the partials directory
hbs.registerPartials(__dirname + "/views/partials");

// 👇 Start handling routes here
const index = require('./routes/index.routes');
app.use('/', index);

const tests = require('./routes/tests.routes');
app.use('/', tests);

module.exports = app;