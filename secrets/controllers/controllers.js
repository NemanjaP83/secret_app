//const mongoose = require("mongoose");
const User = require('../model/User');


exports.getHome = ((req, res) => { 
    res.render('home');
});

exports.getLogin = ((req, res) => {
    res.render('login');
});

exports.getRegister = ((req, res) => {
    res.render('register');
});

exports.getSecrets = ((req, res) => {
    res.render('secrets');
});


exports.createUser = ('/register', (req, res) => {
    let email = req.body.username;
    let password = req.body.password;
    
    let addnewUser = new User({ email: email, password: password });
    addnewUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Succsessfully added user in database.');
            res.render('secrets');
        }
    });
});

exports.loginCheck = ('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    
    User.findOne({email: email}, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            if (user.email === email) {
                if (user.password === password) {
                    res.render('secrets');
                } else {
                    res.send(`Sorry user data don't match`);
                }
            }
        }
    })    
    
});