const { isLoggedIn } = require('../middleware/route-guard');
const Task = require('../models/Task.model');

const router = require('express').Router();

// send views/tasks.hbs for displaying in the browser
router.get("/tasks", isLoggedIn, async (req, res, next) => {
    console.log("You're in tasks");
    const user = req.session.currentUser;
    try {
        const tasks = await Task.find();
        res.render("tasks/tasks", { user , tasks });
    } catch (error) {
        console.log(error);
    }
});

router.post("/tasks/create", isLoggedIn, async (req, res, next) => {
    console.log("You're in post tasks");
    const { name } = req.body;
    try {
        await Task.create({ name });
        res.redirect("/tasks");
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;