const router = require('express').Router();

// send views/tasks.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("subtasks"));

module.exports = router;