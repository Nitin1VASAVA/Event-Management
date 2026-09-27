// const express = require("express");
const AdminAddMandapModel = require("../model/AdminAddMandapModel");

const AdminAddMandapService = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    console.log("FILES:", req.files);
    const user = ({ name, mandaptype, description, price } = req.body);

    const imagePaths = req.files.map((file)=>file.path);
    const data = new AdminAddMandapModel({
      name: name,
      mandaptype: mandaptype,
      description: description,
      price: price,
      image:imagePaths
    });
    await data.save();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = AdminAddMandapService;
