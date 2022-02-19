const router = require('express').Router();
const { isLoggedIn } = require('../middleware/route-guard');
const Task = require('../models/Task.model');

// send views/tests.hbs for displaying in the browser
router.get('/tests', isLoggedIn, (req, res, next) => {
    console.log("At least you're on tests");
    const user = req.session.currentUser;
    Task.find()
        .then((tasks) => {
            res.render('tests/tests', { user, tasks });
        })
        .catch(err => console.log(err));
});

router.post('/tests', (req, res, next) => {
    console.log("Post on tests!");
    const { name , description , status , priority } = req.body;
    Task.create({ name , description , status , priority })
        .then(() => {
            res.redirect('tests');
        })
        .catch(err => console.log(err));
});

module.exports = router; 