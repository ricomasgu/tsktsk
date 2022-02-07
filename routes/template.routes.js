const router = require('express').Router();

// send views/templates.hbs for displaying in the browser
app.get("/templates", (req, res, next) => res.render("templates"));

module.exports = router;