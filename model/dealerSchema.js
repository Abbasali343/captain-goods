const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  officeNumber: {
    type: Number,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },

  officeAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const dealer = mongoose.model("DEALER", dealerSchema);

module.exports = dealer;
