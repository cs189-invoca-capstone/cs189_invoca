const router = require("express").Router();
const { requiresAuth } = require('express-openid-connect');
const Users = require("../models/User");

router.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

router.get('/profile', requiresAuth(), async (req, res) => {
  console.log(req.oidc.user.email);
  try{
    const user = await Users.findOne({
      'email' : req.oidc.user.email
    });
    res.status(200).json(user);
    // console.log(req.oidc.user);
    // console.log(user);
    // console.log(user.invocaPhone);
    // console.log(user.isAdmin);
  }catch (error) {
    res.status(500).json(error);
  }
});

// requiresAuth checks authentication.
router.get('/admin', requiresAuth(), (req, res) =>
  res.send(`Hello ${req.oidc.user.sub}, this is the admin section.`)
);

router.put('/setPhone', requiresAuth(), async (req, res) => {
  try{
    const filter = { 'email' : req.oidc.user.email };
    const update = { invocaPhone: req.body.invocaPhone };
    console.log(req.body);
    const user = await Users.findOneAndUpdate(filter, update);
    res.status(200).json(user);
    // console.log(req.oidc.user);
    console.log(user);
    // console.log(user.invocaPhone);
    // console.log(user.isAdmin);
  }catch (error) {
    res.status(500).json(error);
  }
});

router.put('/setPhone/:invocaPhone', async (req, res) => {
  console.log("endpoint hit");
  try{
    const filter = { 'email' : req.oidc.user.email };
    const update = { invocaPhone: req.params.invocaPhone };
    console.log(req.params.invocaPhone);
    const user = await Users.findOneAndUpdate(filter, update);
    res.status(200).json(user);
    // console.log(req.oidc.user);
    console.log(user);
    // console.log(user.invocaPhone);
    // console.log(user.isAdmin);
  }catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;