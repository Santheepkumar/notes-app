const express = require("express");
const router = express.Router();
const notesRoutes = require("./routes/notes.route");

router.get("/start", (req, res) => res.send("Hello Notes!!"));
router.use("/notes", notesRoutes);

module.exports = router;
