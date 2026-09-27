const UserGetMandapServices = require("../Services/UserGetMandapServices");

const UserGetMandapController = async(req, res) => {
  try {
    await UserGetMandapServices(req,res);

    // console.log(data);

    // res.status(200).json(data);
  } catch (error) {
    console.log(error)
  }
};

module.exports = UserGetMandapController;
