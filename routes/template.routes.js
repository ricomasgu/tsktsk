const router = require('express').Router();

// send views/templates.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("templates"));

module.exports = router;