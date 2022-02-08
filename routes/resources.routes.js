const router = require('express').Router();

// send views/resources.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("resources"));

module.exports = router;