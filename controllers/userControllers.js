const User = require("../models/userModel");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    if (!name || !email || !password ||!address) {
      return res
        .status(400)
        .json({ error: "All fields (name, email, address, password) are required" });
    }

    const newUser = new User({ name, email, address, password });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single user by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a blog by ID
const deleteUser = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single user by ID
const patchUser = async (req, res) => {
  try {
    const user = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single user by ID
const putUser = async (req, res) => {
  try {
    const user = await User.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  patchUser,
  putUser,
};