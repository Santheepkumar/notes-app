const express = require("express");
const router = express.Router();
const controller = require("../controllers/notes.controller");

router.post("", controller.createNotes);
router.get("/:id", controller.getNotes);
router.get("", controller.getAllNotes);
router.delete("/:id", controller.removeNotes);
router.put("/:id", controller.updateNotes);

module.exports = router;
