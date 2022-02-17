const async = require("hbs/lib/async");
const User = require('../models/User.model');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// send views/auth/signup.hbs for displaying in the browser
router.get('/signup', (req, res, next) => {
    console.log("You're on signup");
    res.render('auth/signup');
});

router.post('/signup', async (req, res, next) => {
    const { username , password } = req.body;
    if ( !username || !password || username === '' || password === '') {
        res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username and password.' });
        return;
    }
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
        res
        .status(500)
        .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
        return;
    }
    const salt = bcrypt.genSaltSync(10);
    hash = bcrypt.hashSync(password, salt);   
    try {
        const resDB = await User.create({ username , password: hash });
        console.log(resDB);
        res.redirect('/userProfile');
    } catch (err) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render('auth/signup', { errorMessage: error.message });
        } else if (error.code === 11000) {
            res.status(500).render('auth/signup', {
               errorMessage: 'Username need to be unique. Username is already used.'
            });
        } else {
            next(error);
            console.log("Error while creating a user: ", err);
            res.redirect("/signup?error=true");
        }
    }
});

router.get('/signin', (req, res, next) => {
    console.log("You're on signin");
    res.render('auth/login');
});

router.post("/signin", async (req, res, next) => {
    const { username , password } = req.body;
    if ( !username || !password || username === '' || password === '' ) {
        res.render('auth/login', { errorMessage: 'All fields are mandatory. Please provide your username and password.' });
        return;
    }
    try {
        const resDB = await User.findOne({ username });
        if (!resDB) {
            res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
            return;
        } else if(bcrypt.compareSync(password, resDB.password)) {
            res.redirect("/userProfile", resDB);
        } else {
            res.render('auth/login', { errorMessage: 'Incorrect password.' });
        }
    } catch (err) {
        console.log("Error while retrieving the user: ", err);
        res.render('auth/login', { errorMessage: 'Connection error.' });
    }
});

router.get('/userProfile', (req, res) => {
    console.log("You're on the user profile");
    res.render('users/user-profile');
});

module.exports = router;