const mongoose = require("mongoose");
const complaintSchema = new mongoose.Schema({
  complaintType: {
    type: String,
    required: true,
    enum: ['citizen-careless', 'garbage-on-road', 'dustbin-full', 'others'],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURl: {
    type: String,
  },
})

module.exports = mongoose.model("Compalint", complaintSchema)