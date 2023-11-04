const Vehicle = require("../model/vehicleSchema");

exports.addVehicleInfo = async (req, res, next) => {
  try {
    const {
      vehicleNumber,
      ownerName,
      driverName,
      ownerMobileNumber,
      driverMobileNumber,
      addaName,
      addaAddress,
      addaMobileNumber,
      driverNIC,
      driverAddress,
    } = req.body;
    const type = "movie";
    if (
      !vehicleNumber ||
      !ownerName ||
      !driverName ||
      !ownerMobileNumber ||
      !driverMobileNumber ||
      !addaName ||
      !addaAddress ||
      !addaMobileNumber ||
      !driverNIC ||
      !driverAddress
    ) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    Vehicle.findOne({ vehicleNumber: vehicleNumber }).then((vehicleExist) => {
      if (vehicleExist) {
        return res.status(403).json({
          error: "A Vehicle is Already Registered with this Vehicle Number",
        });
      }

      const vehicle = new Vehicle({
        vehicleNumber,
        ownerName,
        driverName,
        ownerMobileNumber,
        driverMobileNumber,
        addaName,
        addaAddress,
        addaMobileNumber,
        driverNIC,
        driverAddress,
      });

      vehicle
        .save()
        .then(() => {
          res.status(201).json({ message: "Vehicle Added Successfully" });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to add Vehicle" })
        );
    });
  } catch (error) {
    next(error);
  }
};
exports.allVehicles = async (req, res, next) => {
  try {
    const data = await Vehicle.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Data Not Found" });
  }
};
exports.deleteVehicle = async (req, res, next) => {
  try {
    const vehicleNumber = req.body.vehicleNumber;
    Vehicle.findOne({ vehicleNumber: vehicleNumber }).then((vehicleExist) => {
      if (!vehicleExist) {
        return res
          .status(403)
          .json({ error: "Vehicle does not exist with this Vehicle Number" });
      }

      Vehicle.findOneAndDelete({ vehicleNumber: vehicleNumber }).then(() => {
        res.send(`Document has been deleted..`);
      });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
