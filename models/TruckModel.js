const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  truckCategory: {
    type: String,
    required: true,
  },
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Worker', // refers to workermodel
    required: true,
  },
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;

