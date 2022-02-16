const async = require("hbs/lib/async");
const User = require('../models/User.model');
const router = require("express").Router();
const bcrypt = require('bcryptjs');

// send views/auth/signup.hbs for displaying in the browser
router.get('/signup', (req, res, next) => {
    console.log("You're on signup");
    res.render('auth/signup');
});

router.post('/signup', async (req, res, next) => {
    const { username , password } = req.body;    
    try { 
        const salt = await bcrypt.genSaltSync(10);
        hash = await bcrypt.hashSync(password, salt);
        const resDB = await User.create({ username , password: hash });
        console.log(resDB);
        res.redirect('/userProfile');
    } catch (err) {
        console.log("Error while creating a user: ", err);
        res.redirect("/signup?error=true");
    }
});

router.get('/signin', (req, res, next) => {
    console.log("You're on signin");
    res.render('auth/login');
});

router.post("/signin", async (req, res, next) => {
    const { username , password } = req.body;
    try {
        const resDB = await User.find({ username: username });
        bcrypt.compareSync(password, resDB[0].password) ? res.redirect("/userProfile") : res.redirect("/signin?error=true");
    } catch (err) {
        console.log("Error while retrieving a user: ", err);
        res.redirect("/?error=true");
    }
});

router.get('/userProfile', (req, res) => {
    console.log("You're on the user profile");
    res.render('users/user-profile');
});

module.exports = router;