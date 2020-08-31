const express = require("express");
const app = express();
const apiRoutes = require("./api.routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUrl}`);
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
