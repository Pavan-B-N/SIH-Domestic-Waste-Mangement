const mongoose = require('mongoose');

const dustbinInstallerSchema = new mongoose.Schema({
  Emoji: {
    type: String,
    default: "🗑️",
  },
  IconName: {
    type: String,
    default: "bin",
  },
  location: {
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
  },
  area: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  condition: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default:"trashIcon"
  },
  distance: {
    type: Number,
    required: true,
  }
});

const DustbinInstaller = mongoose.model('DustbinInstaller', dustbinInstallerSchema);

module.exports = DustbinInstaller;
