const jwt = require("jsonwebtoken");
const Users = require("../model/registration");
const model2 = require("../model/login")

const loginData = async (req, res) => {
  try {
    console.log("LOGIN BODY:", req.body);

    const { email, password } = req.body;

    const existingUser = await Users.findOne({
      email: email,
    });

    const new_user = new model2({
      email:email,
      password:password
    })

    await new_user.save();


    // 1. Email check
    if (!existingUser) {
      return res.status(404).send("Email not registered");
    }

    // 2. Password check
    if (existingUser.password !== password) {
      return res.status(401).send("Invalid password");
    }

    // 3. Email verification check
    if (!existingUser.isVerified) {
      return res.status(400).send("Please verify email first");
    }

    // 4. JWT token create
    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    console.log("JWT TOKEN:", token);

    // 5. Only ONE response
    return res.status(200).json({
      message: "Login successful",
      email: existingUser.email,
      token: token,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return res.status(500).send("Login failed");
  }
};

module.exports = {
  loginData,
};