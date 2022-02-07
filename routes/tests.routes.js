const router = require('express').Router();

// send views/tests.hbs for displaying in the browser
router.get('/tests', (req, res, next) => {
    console.log("At least you're on tests");
    res.render('tests');
});

module.exports = router; 