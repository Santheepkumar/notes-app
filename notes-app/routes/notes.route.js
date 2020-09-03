const express = require("express");
const router = express.Router();
const controller = require("../controllers/notes.controller");
const {
  requireAuth,
  checkUser,
  getCurrentUser,
} = require("../middleware/authMiddleware");

router.post("", requireAuth, checkUser, getCurrentUser, controller.createNotes);
router.get("/:id", requireAuth, checkUser, getCurrentUser, controller.getNotes);
router.get("", requireAuth, checkUser, getCurrentUser, controller.getAllNotes);
router.delete(
  "/:id",
  requireAuth,
  checkUser,
  getCurrentUser,
  controller.removeNotes
);
router.put(
  "/:id",
  requireAuth,
  checkUser,
  getCurrentUser,
  controller.updateNotes
);

module.exports = router;
