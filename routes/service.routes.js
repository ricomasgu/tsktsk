const router = require('express').Router();

// send views/services.hbs for displaying in the browser
app.get("/services", (req, res, next) => res.render("services"));

module.exports = router;