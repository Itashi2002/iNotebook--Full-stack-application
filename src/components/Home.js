import React from "react";
//import noteContext from "../context/notes/noteContext";
import Notes from "./Notes";

const Home = () => {
  // const context = useContext(noteContext);
  // const { notes, setNotes } = context;

  return (
    <>
      {/* <h1>Your Notes</h1>
      {notes.map((note) => {
        return note.title;
      })} */}
      <Notes />
    </>
  );
};

export default Home;
