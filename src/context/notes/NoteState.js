import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  //   const s1 = {
  //     name: "itashi",
  //     class: "12b",
  //   };
  //   const [state, setState] = useState(s1);
  //   const update = () => {
  //     setTimeout(() => {
  //       setState({
  //         name: "manik",
  //         class: "10b",
  //       });
  //     }, 1000);
  //   };
  const notesInitial = [
    {
      _id: "67840c637f48fadfe7688da5",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test3",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:39:31.473Z",
      __v: 0,
    },
    {
      _id: "67840c987f48fadfe7688daa",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
      __v: 0,
    },
    {
      _id: "67840c987f48fadfe7688da78",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
      __v: 0,
    },
    {
      _id: "67840c987f48fadfe7688da77a",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
      __v: 0,
    },

    {
      _id: "67840c987f48fadfe768856daa",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  //addnote
  //all other things will get automatically generated in the database
  const addNote = (title, description, tag) => {
    console.log("Adding a new Note");
    const note = {
      _id: "67840c637f48fadfe7688da5",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: title,
      description: description,
      tag: tag,
      date: "2025-01-12T18:39:31.473Z",
      __v: 0,
    };
    //setNotes(notes.push(note));
    setNotes(notes.concat(note));
    //concat returns an array while push updates an array.
  };

  //delete note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit note
  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
