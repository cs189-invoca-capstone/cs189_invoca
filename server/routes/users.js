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
            name: req.body.name,
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

router.put("/edit/:id", async (req,res) => {
    try {
        await Users.exists({ _id: req.params.id }, (error, result) => {
            if(error || !result){
                console.log("Error! User Doesn't exist");
                res.status(400);
                res.end();
                return;
            }
        }); // Check if Id exists
        const filter = { _id: req.params.id };
        const opts = { new: true };
        let update = {};
        // if("start_time_local" in req.body) update.start_time_local = req.body.start_time_local;
        if("name" in req.body) update.name = req.body.name;
        if("email" in req.body) update.email = req.body.email;
        if("invocaPhone" in req.body) {
            if (req.body.invocaPhone.length === 10) {
                newPhone = ""
                for (let i = 0; i < 10; i++) {
                    newPhone+=req.body.invocaPhone[i];
                    if (i === 2 || i === 5) {
                        newPhone+="-";
                    }
                }
                update.invocaPhone = newPhone;
            } else {
                update.invocaPhone = req.body.invocaPhone;
            }
        }
    
        let updatedRecord = await Users.findOneAndUpdate(filter, update, opts);

        res.status(200).json(updatedRecord);
        console.log(updatedRecord);
    }
    catch(err){
        console.log(err);
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