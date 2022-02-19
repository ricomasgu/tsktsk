const { isLoggedOut } = require('../middleware/route-guard');

const router = require('express').Router();

// send views/index.hbs for displaying in the browser
router.get('/', isLoggedOut, (req, res, next) => {
    console.log("At least you're on home");
    res.render('index');
});

module.exports = router;