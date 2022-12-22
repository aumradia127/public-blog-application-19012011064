const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("landing");
});

//show register form
router.get("/register", (req, res) => {
  res.render("register");
});

//handle signup logic
router.post("/register", (req, res) => {
  var newUser = new User({ 
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    // password: req.body.password,
  });
  User.register(newUser,  req.body.password ,(err, user) => {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
      // res.send("data  posted")
      // res.status(201).json({
      //   status:'success',

      // })
      res.redirect("/posts");
    });
  });

  // User.create(newUser)
  // res.status(201).json({
  //   status:'Success',
  //   data:{
  //     newUser
  //   }
  // })
});

// show login form
router.get("/login", (req, res) => {
  res.render("login");
});

//handle login logic
// ----------> router.post('/login', middleware, callback)
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/login",
  }),
  (req, res) => {}
);

//logic route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/posts");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
