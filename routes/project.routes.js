const router = require('express').Router();

// send views/projects.hbs for displaying in the browser
app.get("/projects", (req, res, next) => res.render("projects"));

module.exports = router;
