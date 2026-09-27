const express = require("express")
const router = express.Router();

const ManageMandapController = require("../controllers/ManageMandapController");

router.get("/ManageMandap",ManageMandapController);
module.exports = router;