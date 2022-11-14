const express = require("express");
const path = require("path");
require("dotenv").config();
const router = require("./routes/index");
const fileuplod = require("express-fileupload");
const cors = require("cors");
const sequelize = require("./db/models/index");
const webpush = require("web-push");

const app = express();
const PORT = process.env.PORT || 5000;
const publicVapidKey =
  "BJlPTPnoI4EYanuVyKh6bcWXFOdvLJTbO819-lMsIY-j5m9igc2WxxhNPayvqMZRcPHXAyG8Xt6lotEgaMrO9_U";
const privateVapidKey = "5V_C7k4dy3cT7ahBRo-gYJAZIrCRTxgiWGgWOXp7kPg";

webpush.setVapidDetails(
  "milto:test1@test.com",
  publicVapidKey,
  privateVapidKey
);

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");
  res.setHeader("X-Total-Count", `1`);
  next();
});
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));

app.use("/api", router);

const start = async () => {
  try {
    // await sequelize.authenticate()
    // await sequelize.sync()
    app.listen(PORT, () => {
      console.log(`Server started! Port: ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();

// ./node_modules/.bin/web-push generate-vapid-keys
