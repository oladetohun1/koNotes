import Note from "./Note";
import React from "react";
const NotesList = ({ notes }) => {
  console.log(notes)
  return (
      <div className="notes-list">
        {notes.map(note => {
          return(
            <Note 
            id={note.id}
            text={note.text}
            date={note.date}/>
          )
        })}
      </div>
  );
}

export default NotesList;
