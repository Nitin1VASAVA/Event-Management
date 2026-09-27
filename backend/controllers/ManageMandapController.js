const ManageMandapServices = require("../Services/ManageMandapServices");

const ManageMandapController = async(req,res)=>{
   await ManageMandapServices(req,res);
}

module.exports = ManageMandapController