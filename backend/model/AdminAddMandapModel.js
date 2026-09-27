const mongoose = require("mongoose");

const AdminAddMandapSchema = mongoose.Schema({
    name:{
        type:String
    },
    mandaptype:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:String
    },
    image:[{
        type:String
    }]
})

const AdminAddMandapModel = mongoose.model("AdminAddMandap",AdminAddMandapSchema)
module.exports = AdminAddMandapModel