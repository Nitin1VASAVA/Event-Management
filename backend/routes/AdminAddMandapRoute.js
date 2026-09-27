const express = require("express")
const upload = require("../middleware/upload")
const router = express.Router();

const AdminAddMandapController = require("../controllers/AdminAddMandapController")

router.post("/AdminAddMandap",upload.array("images"),AdminAddMandapController);

module.exports = router