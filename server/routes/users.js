const router = require("express").Router();
// const { requiresAuth } = require('express-openid-connect');
const Users = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
    try{
        // generate bcrypt hashed pass
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        
        // create a new user
        const newUser = new Users({
            email: req.body.email,
            password: hashedPass,
            invocaPhone: req.body.invocaPhone,
            isAdmin: false
        });

        // save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
});

// Login
router.post("/login", async (req,res)=>{
    try{
        const user = await Users.findOne({
            email: req.body.email,
        });
        if(!user){
            res.status(404).json("user not found");
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            res.status(400).json("wrong password");
        }
        res.status(200).json(user);
    }catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;


// router.get('/profile', requiresAuth(), async (req, res) => {
//   console.log(req.oidc.user.email);
//   try{
//     const user = await Users.findOne({
//       'email' : req.oidc.user.email
//     });
//     res.status(200).json(user);
//     // console.log(req.oidc.user);
//     // console.log(user);
//     // console.log(user.invocaPhone);
//     // console.log(user.isAdmin);
//   }catch (error) {
//     res.status(500).json(error);
//   }
// });


// router.put('/setPhone/:invocaPhone', async (req, res) => {
//   console.log("endpoint hit");
//   try{
//     const filter = { 'email' : req.oidc.user.email };
//     const update = { invocaPhone: req.params.invocaPhone };
//     console.log(req.params.invocaPhone);
//     const user = await Users.findOneAndUpdate(filter, update);
//     res.status(200).json(user);
//     // console.log(req.oidc.user);
//     console.log(user);
//     // console.log(user.invocaPhone);
//     // console.log(user.isAdmin);
//   }catch (error) {
//     res.status(500).json(error);
//   }
// });

// module.exports = router;