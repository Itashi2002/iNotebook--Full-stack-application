const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");
//Route 1:Fetch all the notes
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("some error occurred");
  }
});

//Route 2:Post the notes

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid Description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({ title, description, tag, user: req.user.id });
      const savedNote = await note.save();
      console.log(savedNote);
      res.json(savedNote);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("some error occurred");
    }
  }
);

//Route 3:Update the notes

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  //Create a new note object
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  //Find the note that needs to be updated and update it

  //We want to check the user -->that is requesting the note belongs to that person only.
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not found");
  }

  if (note.user.toString() != req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});
module.exports = router;

//Route 4:Delete an existing note using the delete

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  //Find the note that needs to be updated and deleted and delete it

  //We want to check the user -->that is requesting the note belongs to that person only.
  let note = await Note.findById(req.params.id);
  if (!note) {
    return res.status(404).send("Not found");
  }

  //Allow deletetion if user owns this note
  if (note.user.toString() != req.user.id) {
    return res.status(401).send("Not Allowed");
  }

  note = await Note.findByIdAndDelete(req.params.id);
  res.json({ Success: "Note has been deleted", note: note });
});
module.exports = router;
