const express = require("express");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
//if sign up not working its because isValidEmail
const { isValidEmail } = require("../utils/utils");

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("login backend data - ", email, password);

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("User not found.");
    // If user/password is invalid, return an error
    if (!user || (await bcrypt.compare(password, user.password))) {
      return res.status(401).send("Invalid email or password.");
    }
    // Generate JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Send response
    res.status(200).send({
      message: "Login successful",
      token,

      _id: user._id,
      email: user.email,
      name: user.name,
      tasks: user.tasks,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, fullname } = req.body;
    // Check username field
    if (!username) return res.status(400).send("Username is required.");

    // Check if email is valid
    if (!email || !isValidEmail(email))
      return res.status(400).send("Valid email is required.");

    // Check password field
    if (!password) return res.status(400).send("Password is required.");

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = new User({
      username,
      email,
      password: hashedPassword,
      fullname,
    });
    userData.save();

    return res
      .status(200)
      .json({ message: "Signup successful", username, email, hashedPassword });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
