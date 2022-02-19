const { isLoggedIn } = require('../middleware/route-guard');

const router = require('express').Router();

// send views/resources.hbs for displaying in the browser
router.get("/resources", isLoggedIn, (req, res, next) => {
    console.log("You're in resources");
    const user = req.session.currentUser;
    res.render("resources/resources", { user });
});

module.exports = router;