const router = require('express').Router();
const Task = require('../models/Task.model');

// send views/tests.hbs for displaying in the browser
router.get('/tests', (req, res, next) => {
    console.log("At least you're on tests");
    Task.find()
        .then((tasks) => {
            res.render('tests', tasks);
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