const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers
const {
  getCar,
  createCar,
  getCars,
  deleteCar,
  patchCar,
  putCar,
  
} = require("./controllers/carControllers");

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes

app.get("/", (req, res) => res.send("API Running!"));
// GET a single car
app.get("/api/cars/:id", getCar);
// DELETE a car
app.delete("/api/cars/:id", deleteCar);
// Update car using PATCH
app.patch("/api/cars/:id", patchCar);
// Update car using PUT
app.put("/api/cars/:id", putCar);
// Add a new car
app.post("/api/cars", createCar);
// GET all cars
app.get("/api/cars", getCars);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
