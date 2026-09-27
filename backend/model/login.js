const mongoose = require("mongoose");
// const { loginUser } = require("../controllers/registrationController");

const loginSchema = mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type:String,
        require:true
    }
})
const LoginUser = mongoose.model("loginData",loginSchema);
module.exports = LoginUser