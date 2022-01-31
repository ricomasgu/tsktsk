// Require Express
const express = require('express');

// Require hbs
const hbs = require('hbs');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

//tell our Express app that HBS will be in charge of rendering the HTML
app.set("view engine", "hbs");

//to register the partials directory
hbs.registerPartials(__dirname + "views/partials");

// send views/index.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("index"));

// send views/projects.hbs for displaying in the browser
app.get("/projects", (req, res, next) => res.render("projects"));

// send views/resources.hbs for displaying in the browser
app.get("/resources", (req, res, next) => res.render("resources"));

// send views/services.hbs for displaying in the browser
app.get("/services", (req, res, next) => res.render("services"));

// send views/tasks.hbs for displaying in the browser
app.get("/tasks", (req, res, next) => res.render("tasks"));

// send views/templates.hbs for displaying in the browser
app.get("/templates", (req, res, next) => res.render("templates"));

// send views/tests.hbs for displaying in the browser
app.get("/tests", (req, res, next) => res.render("tests"));

// Server Started
app.listen(3000, () => console.log('Server up and running on port 3000!'));