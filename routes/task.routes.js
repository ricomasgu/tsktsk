const { isLoggedIn } = require('../middleware/route-guard');

const router = require('express').Router();

// send views/tasks.hbs for displaying in the browser
router.get("/tasks", isLoggedIn, (req, res, next) => {
    console.log("You're in tasks");
    const user = req.session.currentUser;
    res.render("tasks/tasks", { user });
});

module.exports = router;