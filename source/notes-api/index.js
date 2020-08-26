const express = require("express");
const app = express();
const apiRoutes = require("./api.routes");
const mongoose = require("mongoose");

const mongoUri = "mongodb://localhost:27017/notes-db";
mongoose.connect(mongoUri, {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

app.use("/api", apiRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Notes app listening at http://localhost:${port}`);
});
