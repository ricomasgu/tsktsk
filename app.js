// Require Express
const express = require('express');

// ℹ️ Connects to the database
require('./db');

// Express server handling requests and responses
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// 👇 Start handling routes here
const index = require('./routes/index.routes');
app.use('/', index);

const projects = require('./routes/project.routes');
app.use('/', projects);

const tests = require('./routes/tests.routes');
app.use('/', tests);

module.exports = app;