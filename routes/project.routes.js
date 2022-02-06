const router = require('express').Router();

// GET route to retrieve and display all the books
router.get('/projects', (req, res) => res.render('projects/projects-list.hbs'));

module.exports = router;
