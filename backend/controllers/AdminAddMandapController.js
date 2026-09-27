const express = require("express");
const AdminAddMandapService = require("../Services/AdminAddMandapServices")

const AdminAddMandapController = (req,res)=>{
    try {
        AdminAddMandapService(req,res);
    } catch (error) {
        console.log(error)
    }
}
module.exports = AdminAddMandapController;