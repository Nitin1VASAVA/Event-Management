const express = require("express");
const router = express.Router();
const GetMandapByIdController = require("../controllers/GetMandapByIdController");

router.get("/AdminAddMandap/:id",GetMandapByIdController)
module.exports = router