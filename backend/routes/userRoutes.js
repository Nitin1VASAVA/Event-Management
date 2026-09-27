const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authmiddleware");

router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "You are authenticated",
    user: req.user
  });
});

module.exports = router;