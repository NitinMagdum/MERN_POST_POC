const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const { json } = require("body-parser");

exports.userList = (req, res) => {
  try {
    const user = UserModel.find();
    res.status(200), json({ user });
  } catch (err) {
    res.status(500).json({ message: "something went wrong in user list" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDetails = await UserModel.findOne({ email });
    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, userDetails.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { email: userDetails.email, id: userDetails._id },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.status(200).json({ userDetails, token });
  } catch (err) {
    res.status(500).json({ message: "something went wrong in user login" });
  }
};

exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user exist" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "password doesnt match" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const userDetail = await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign({ email }, "SECTER_KEY", { expiresIn: "12h" });

    res.status(201).json({ userDetail, token });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "something went wrong in user registration" });
  }
};
