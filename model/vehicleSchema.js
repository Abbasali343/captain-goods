const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  vehicleNumber: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  driverMobileNumber: {
    type: Number,
    required: true,
  },
  ownerMobileNumber: {
    type: Number,
    required: true,
  },

  addaName: {
    type: String,
    required: true,
  },
  addaAddress: {
    type: String,
    required: true,
  },
  addaMobileNumber: {
    type: Number,
    required: true,
  },
  driverAddress: {
    type: String,
    required: true,
  },
  driverNIC: {
    type: String,
    required: true,
  },
});

const vehicle = mongoose.model("VEHICLE", vehicleSchema);

module.exports = vehicle;
