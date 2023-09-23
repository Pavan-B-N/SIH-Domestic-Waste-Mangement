const mongoose = require('mongoose');

const WorkerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: { //truckdriver cleaner
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  area: {
    type: String,
    required: true,
  },

});

const Worker= mongoose.model('Worker', WorkerSchema);

module.exports = Worker;
