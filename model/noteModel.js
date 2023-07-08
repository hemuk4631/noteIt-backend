import mongoose from "mongoose";

// Create a schema for notes
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Note = mongoose.model("Note", noteSchema);

export default Note;
