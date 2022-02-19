const { isLoggedOut } = require('../middleware/route-guard');

const router = require('express').Router();


router.get('/pricing', isLoggedOut, (req, res, next) => {
    console.log("At least you're on pricing");
    res.render('pricing/pricing');
});

router.post('/pricing', isLoggedOut, (req, res, next) => {
    console.log("At least you're on post pricing");
});

module.exports = router;