const { isLoggedIn } = require('../middleware/route-guard');

const router = require('express').Router();

// send views/services.hbs for displaying in the browser
router.get("/services", isLoggedIn, (req, res, next) => {
    console.log("You're in services");
    const user = req.session.currentUser;
    res.render("services/services", { user });
});

module.exports = router;