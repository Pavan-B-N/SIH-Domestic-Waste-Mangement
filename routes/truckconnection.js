const express = require('express');
const router = express.Router();
const Truck = require("../models/TruckModel"); //importing the truck model

// get method to find all trucks
router.get('/trucks', async (req, res) => {
  try {
    const trucks = await Truck.find().populate('Worker'); // Populate the 'Worker' field to get worker details
    res.json(trucks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create a new truck
router.post('/trucks', async (req, res) => {
  const { Area, TruckCategory, Worker } = req.body;

  try {
    const newTruck = new Truck({
      Area,
      TruckCategory,
      Worker,
    });

    await newTruck.save();
    res.status(201).json(newTruck);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
