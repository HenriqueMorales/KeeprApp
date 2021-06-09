import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addItem(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
  console.log(notes);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onClick={addItem} />
      {notes.map((note, index) => {
        return <Note key={index} id={index} note={note} onClick={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
