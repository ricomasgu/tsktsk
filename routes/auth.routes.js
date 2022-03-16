const async = require("hbs/lib/async");
const User = require('../models/User.model');
const router = require("express").Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard");

// send views/auth/signup.hbs for displaying in the browser
router.get('/signup', isLoggedOut, (_, res, next) => {
    console.log("You're on signup");
    res.render('auth/signup');
});

router.post('/signup', isLoggedOut, async (req, res, next) => {
    const { email , password } = req.body;
    if ( !email || !password || !email.length || !password.length ) {
        res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your email and password.' });
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
        const resDB = await User.create({ email , password: hash });
        req.session.currentUser = resDB;
        res.redirect('/userProfile');
    } catch (err) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render('auth/signup', { errorMessage: error.message });
        } else if (error.code === 11000) {
            res.status(500).render('auth/signup', {
               errorMessage: 'email need to be unique. email is already used.'
            });
        } else {
            next(error);
            console.log("Error while creating a user: ", err);
            res.redirect("/signup?error=true");
        }
    }
});

router.get('/signin', isLoggedOut, (_, res, next) => {
    console.log("You're on signin");
    res.render('auth/login');
});

router.post("/signin", isLoggedOut, async (req, res, next) => {
    const { email , password } = req.body;
    if ( !email || !password || email === '' || password === '' ) {
        res.render('auth/login', { errorMessage: 'All fields are mandatory. Please provide your email and password.' });
        return;
    }
    try {
        const resDB = await User.findOne({ email });
        if (!resDB) {
            res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
            return;
        } else if(bcrypt.compareSync(password, resDB.password)) {
            req.session.currentUser = resDB;
            res.redirect("/userProfile");
        } else {
            res.render('auth/login', { errorMessage: 'Incorrect password.' });
        }
    } catch (err) {
        console.log("Error while retrieving the user: ", err);
        res.render('auth/login', { errorMessage: 'Connection error.' });
    }
});

router.get('/userProfile', isLoggedIn, (req, res, next) => {
    const user = req.session.currentUser;
    res.render('users/user-profile', { user });
});

router.post('/logout', isLoggedIn, (req, res, next) => {
    req.session.destroy(err => {
        if (err) next(err);
        res.redirect('/');
    });
});

module.exports = router;