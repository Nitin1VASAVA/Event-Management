const GetMandapByIdServices = require("../Services/GetMandapByIdServices");
const GetMandapByIdController = (req, res) => {
  GetMandapByIdServices(req, res);
};
module.exports = GetMandapByIdController;
