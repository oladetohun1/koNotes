import React, { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesLists";

const App = () => {
  const [notes] = useState([
    {
      id: nanoid(),
      text:"This is my first note",
      date:"22/08/2023",
    },
    {
      id: nanoid(),
      text:"This is my second note",
      date:"22/08/2023",
    },
    {
      id: nanoid(),
      text:"This is my third note",
      date:"22/08/2023",
    },
  ]);
  
  return (
    <div className="container">
      <NotesList  notes={notes}/>
    </div>

  );
}

export default App;
