const model = require("../model/AdminAddMandapModel");

const UserGetMandapServices = async (req, res) => {
  const data = await model.find();
  console.log(data);

  res.status(200).json(data);
};
module.exports = UserGetMandapServices;
