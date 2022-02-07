const router = require('express').Router();

// send views/index.hbs for displaying in the browser
router.get('/', (req, res, next) => {
    console.log("At least you're on index");
    res.render('index');
});

module.exports = router;