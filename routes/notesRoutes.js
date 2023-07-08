import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.route("/notes").get(getAllNotes).post(createNote);
router.route("/notes/:id").delete(deleteNote);

export default router;
