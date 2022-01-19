const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        email:{
            type: String,
            require:true,
            max: 50,
            unique: true
        },
        password:{
            type: String,
            require:true,
            min: 6,
        },
        invocaPhone:{
            type: String,
        },
        isAdmin:{
            type: Boolean,
            default: false
        },
    }
);

module.exports = mongoose.model("Users", UserSchema);
