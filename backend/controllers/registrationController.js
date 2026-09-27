const Users = require("../model/registration");
const Login = require("../model/login");

const {loginData}  = require("../Services/loginData")

const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// REGISTER + SEND OTP
const loginUser = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { name, email, password, age, gender } = req.body;


    //profile ke liye
    

    // Check email already exists
    const existingUser = await Users.findOne({
      email: email,
    });
    
    

    if (existingUser) {
      return res.status(400).send("Email already registered");
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // OTP expiry = 5 minutes
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    // Create user
    const user = new Users({
      name: name,
      email: email,
      password: password,
      age: age,
      gender: gender,

      otp: otp,
      otpExpiry: otpExpiry,

      isVerified: false,
    });

    // Save user
    await user.save();


    // Email
    const mailOption = {
      from: process.env.EMAIL_USER,

      to: email,

      subject: "Registration OTP",

      text: `Your registration OTP is ${otp}`,
    };

    // Send OTP
    await transport.sendMail(mailOption);

    console.log("OTP:", otp);

    res.status(200).send("OTP sent successfully");
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).send("Registration failed");
  }
};

// VERIFY REGISTRATION OTP
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find user
    const user = await Users.findOne({
      email: email,
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Check OTP
    if (user.otp !== otp) {
      return res.status(400).send("Invalid OTP");
    }

    // Check expiry
    if (new Date() > user.otpExpiry) {
      return res.status(400).send("OTP expired");
    }

    // Verify user
    user.isVerified = true;

    // Remove OTP
    user.otp = null;

    user.otpExpiry = null;

    // Save changes
    await user.save();

    res.status(200).send("Registration successful");
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).send("Verification failed");
  }
};


module.exports = {
  loginUser,
  verifyOTP,
  loginData
};
