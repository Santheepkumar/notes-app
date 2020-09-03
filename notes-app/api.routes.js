const express = require("express");
const router = express.Router();
const notesRoutes = require("./routes/notes.route");
const authRoutes = require("./routes/auth.route");

router.get("/start", (req, res) => res.send("Hello Notes!!"));
router.use("/notes", notesRoutes);
router.use("/auth", authRoutes);

module.exports = router;
