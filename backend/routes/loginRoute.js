const express = require("express");

const router = express.Router();

const {
    loginUser,
    loginData,
    verifyOTP
} = require("../controllers/registrationController");

router.post("/register", loginUser);

router.post("/verify-otp", verifyOTP);

router.post("/login",loginData);

module.exports = router;