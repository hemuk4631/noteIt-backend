import Note from "../model/noteModel.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ message: "Notes Fetched Successfuly!", notes });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const note = await Note.create({ title, content });
    res.status(200).json({ message: `Note: ${title} Created`, note });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  try {
    const note = await Note.findById(noteId);
    await note.deleteOne();
    res.status(202).send(`${note.title} Deleted Successfuly`);
  } catch (error) {
    res.status(500).send(error);
  }
};
