const { isLoggedIn } = require('../middleware/route-guard');

const router = require('express').Router();

// send views/templates.hbs for displaying in the browser
router.get("/templates", isLoggedIn, (req, res, next) => {
    console.log("You're in templates");
    const user = req.session.currentUser;
    res.render("templates/templates", { user });
});

module.exports = router;