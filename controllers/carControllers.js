const Car = require("../models/carModel");

// Create a new car
const createCar = async (req, res) => {
  try {
    const { make, model, year, color, price } = req.body;
    if (!make || !model || !year ||!color ||!price) {
      return res
        .status(400)
        .json({ error: "All fields (make, model, year, color, price) are required" });
    }

    const newCar = new Car({ make, model, year, color, price });
    const savedCar = await newCar.save();

    res.status(201).json(savedCar);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all Cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single car by ID
const getCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a car by ID
const deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single car by ID
const patchCar = async (req, res) => {
  try {
    const car = await Car.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }

    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single car by ID
const putCar = async (req, res) => {
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
  createCar,
  getCars,
  getCar,
  deleteCar,
  patchCar,
  putCar,
};