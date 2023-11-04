const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const port = process.env.PORT;

require("./db/conn");

const Dealer = require("./model/dealerSchema");
const Vehicle = require("./model/vehicleSchema");

const Dealers = require("./routes/dealer");
const Vehicles = require("./routes/vehicle");


app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors({ origin: "*" }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/v1/dealers", Dealers);
app.use("/v1/vehicles", Vehicles);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
