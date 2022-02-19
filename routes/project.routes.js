const router = require('express').Router();
const { isLoggedIn } = require('../middleware/route-guard');
const Project = require('../models/Project.model');

// send views/projects.hbs for displaying in the browser
router.get("/projects", isLoggedIn, (req, res, next) => {
    const user = req.session.currentUser;
    Project.find()
            .then(resFromDB => {
                console.log("You retrieved the projects successfully", resFromDB);
                res.render("projects/projects", { user, projects: resFromDB });
            })
            .catch(err => {
                console.log("Some error occurred when retrieving the projects", err);
            });
});

router.post("/projects/create", isLoggedIn, (req, res, next) => {
    const { name } = req.body;
    Project.create({ name })
            .then(resFromDB => {
                console.log("You created a project successfully", resFromDB);
                res.redirect("/projects");
            })
            .catch(err => {
                console.log("Some error occurred when creating a project", err);
                res.redirect("/projects");
            });
});

router.get("/projects/:id/edit", isLoggedIn, (req, res, next) => {
    const user = req.session.currentUser;
    Project.findBtId(req.params.id)
            .then(resFromDB => {
                console.log("You retrieved the project successfully", resFromDB);
                res.render("projects/project-details", { user, project: resFromDB });
            })
            .catch(err => {
                console.log("Some error occurred when retrieving the project", err);
            });
});

module.exports = router;
