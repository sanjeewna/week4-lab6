const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getUser,
  createUser,
  getUsers,
  deleteUser,
  patchUser,
  putUser,
  
} = require("./controllers/userControllers");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes

app.get("/", (req, res) => res.send("API Running!"));
// GET a single user
app.get("/api/users/:id", getUser);
// DELETE a user
app.delete("/api/users/:id", deleteUser);
// Update user using PATCH
app.patch("/api/users/:id", patchUser);
// Update user using PUT
app.put("/api/users/:id", putUser);
// Add a new user
app.post("/api/users", createUser);
// GET all users
app.get("/api/users", getUsers);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
