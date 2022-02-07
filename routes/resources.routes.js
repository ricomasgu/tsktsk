const router = require('express').Router();

// send views/resources.hbs for displaying in the browser
app.get("/resources", (req, res, next) => res.render("resources"));

module.exports = router;