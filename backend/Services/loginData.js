const jwt = require("jsonwebtoken");
const Users = require("../model/registration");

const loginData = async (req, res) => {
  try {
    console.log("LOGIN BODY:", req.body);

    const { email, password } = req.body;

    const existingUser = await Users.findOne({
      email: email,
    });

    res.status(200).json({
      email: existingUser.email,
    });
    if (!existingUser) {
      return res.status(404).send("Email not registered");
    }

    // if (response.status === 200) {
    //   localStorage.setItem("email", response.data.email);

    //   navigate("/UserGetMandap");
    // }

    if (existingUser.password !== password) {
      return res.status(401).send("Invalid password");
    }

    if (!existingUser.isVerified) {
      return res.status(400).send("Please verify email first");
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    console.log("JWT TOKEN:", token);

    return res.status(200).json({
      message: "Login successful",
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
