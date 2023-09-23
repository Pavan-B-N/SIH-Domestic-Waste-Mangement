const express = require('express');
const router = express.Router();
const DustbinInstaller = require('../models/DustbinInstallmodel'); // Import the DustbinInstaller model

// GET all dustbin installers
router.get('/dustbin-installers', async (req, res) => {
  try {
    const dustbinInstallers = await DustbinInstaller.find();
    res.json(dustbinInstallers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new dustbin installer
router.post('/dustbin-installers', async (req, res) => {
  const {
    Emoji,
    Position,
    IconName,
    Area,
    Notes,
    Condition,
    Icon,
    Distance,
    Id,
  } = req.body;

  try {
    const newDustbinInstaller = new DustbinInstaller({
      Emoji,
      Position,
      IconName,
      Area,
      Notes,
      Condition,
      Icon,
      Distance,
      Id,
    });

    await newDustbinInstaller.save();
    res.status(201).json(newDustbinInstaller);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
