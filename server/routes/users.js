const router = require("express").Router();
const { requiresAuth } = require('express-openid-connect');
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
  // user id created by google auth0
  // res.send(JSON.stringify(req.oidc.user.sub));
});

// requiresAuth checks authentication.
router.get('/admin', requiresAuth(), (req, res) =>
  res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
);

module.exports = router;