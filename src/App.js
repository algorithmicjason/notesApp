import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer.js";
import Note from "./Components/Note";
import FormArea from "./Components/FormArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }
  function delNote(id) {
    setNotes((preNotes) => {
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div style={{ background: "#FFFACD" }}>
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          id={index}
          key={index + note}
          delNote={delNote}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
