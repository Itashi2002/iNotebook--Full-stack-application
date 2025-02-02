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
      _id: "67840c987f48fadfe7688daa",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
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
      _id: "67840c987f48fadfe7688daa",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
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
      _id: "67840c987f48fadfe7688daa",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
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
      _id: "67840c987f48fadfe7688daa",
      user: "6782ba3bd1a1b33ee1adecd6",
      title: "test4",
      description: "test 1 the first description updated",
      tag: "123dim",
      date: "2025-01-12T18:40:24.070Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
