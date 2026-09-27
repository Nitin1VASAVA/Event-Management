const model = require("../model/AdminAddMandapModel")
const GetMandapByIdServices = async(req,res)=>{
    try {
        const id = req.params.id;
        const data = await model.findById(id);
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "server error"
        });
    }
}
module.exports = GetMandapByIdServices