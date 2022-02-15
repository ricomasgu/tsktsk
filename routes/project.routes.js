const router = require('express').Router();
const Project = require('../models/Project.model');

// send views/projects.hbs for displaying in the browser
router.get("/projects", (req, res, next) => {
    Project.find()
            .then(resFromDB => {
                console.log("You retrieved the projects successfully", resFromDB);
                res.render("projects/projects", { projects: resFromDB });
            })
            .catch(err => {
                console.log("Some error occurred when retrieving the projects", err);
            });
});

router.post("/projects/create", (req, res, next) => {
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

router.get("/projects/:id/edit", (req, res, next) => {
    Project.findBtId(req.params.id)
            .then(resFromDB => {
                console.log("You retrieved the project successfully", resFromDB);
                res.render("projects/project-details", { project: resFromDB });
            })
            .catch(err => {
                console.log("Some error occurred when retrieving the project", err);
            });
});

module.exports = router;
