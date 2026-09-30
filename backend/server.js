require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const model = require("../backend/model/AdminAddMandapModel");
const cors = require("cors");

//model

const app = express();

const loginRoute = require("./routes/loginRoute");
const userRoutes = require("./routes/userRoutes");

//Admin Route
const AdminAddMandapRoute = require("./routes/AdminAddMandapRoute");

//User Routes
const UserGetMandapRoute = require("./routes/UserGetMandapRoute");

//get mandap by id
const GetMandapById = require("./routes/GetMandapByIdRoute");

//manage mandap
const ManageMandapRoute = require("./routes/ManageMandapRoute");

//image actual me frontend me bhejne ke liye
app.use("/uploads", express.static("uploads"));

// Middleware
app.use(cors());
app.use(express.json());

// User routes
app.use("/api", userRoutes);

// Login / Register routes
app.use("/api", loginRoute);

app.use("/api", AdminAddMandapRoute);

app.use("/api", GetMandapById);

//user
app.use("/api", UserGetMandapRoute);

app.use("/api", ManageMandapRoute);

// Admin test route
app.get("/api/admin/test", (req, res) => {
  res.send("Admin route working");
});



//delete mandap
app.delete("/api/ManageMandap/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMandap = await model.findByIdAndDelete(id);
    res.status(200).json({ message: "successfully delete",data:deletedMandap});
  } catch (error) {
    console.log(error);
  }
});

console.log("MONGO_URI =", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((error) => {
    console.log("MongoDB error:", error);
  });

// Server
app.listen(8080, () => {
  console.log("Server running on 8080");
});
