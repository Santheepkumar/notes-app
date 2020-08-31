const express = require("express");
const app = express();
const apiRoutes = require("./api.routes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", () => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
