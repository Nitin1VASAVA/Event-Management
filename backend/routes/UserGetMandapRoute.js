const express = require("express")
const router = express.Router();

const UserGetMandapController = require("../controllers/UserGetMandapController");
router.get("/UserMandapGetData",UserGetMandapController);

module.exports = router;