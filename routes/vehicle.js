const express = require("express");
const router = express.Router();

const controller = require("../controllers/vehicle.controller");

router.route("/addVehicle").post(controller.addVehicleInfo);
router.route("/allVehicles").get(controller.allVehicles);
router.route("/deleteVehicle").delete(controller.deleteVehicle);

module.exports = router;
