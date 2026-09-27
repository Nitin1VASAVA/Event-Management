const model = require("../model/AdminAddMandapModel");
const ManageMandapServices = async (req, res) => {
  try {
    const data = await model.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to get mandaps",
    });
  }
};

module.exports = ManageMandapServices;
