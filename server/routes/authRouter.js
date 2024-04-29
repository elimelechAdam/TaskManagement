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

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    const user = await User.findOne({ email });

    if (!user) return res.status(401).send("User not found.");

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch)
      return res.status(401).send("Please check your username or password.");

    // Generate JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Send response
    res.status(200).json({
      message: "Login successful",
      token,
      _id: user._id,
      email: user.email,
      name: user.name,
      profileImage: user.profileImage,

      tasks: user.tasks,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("signup backend data - ", name, email, password);

    // Check username field
    if (!name) return res.status(400).send("Name is required.");

    // Check if email is valid
    if (!email || !isValidEmail(email))
      return res.status(400).send("Valid email is required.");

    // Check password field
    if (!password) return res.status(400).send("Password is required.");

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).send("User already exists.");

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("hashedPassword", hashedPassword);
    // Create a new user
    const userData = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await userData.save();

    // Send success response
    return res.status(200).json({ message: "Signup successful", name, email });
  } catch (error) {
    console.error("Signup error: ", error.message);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
