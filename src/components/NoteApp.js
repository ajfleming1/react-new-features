import React, { useEffect, useReducer } from 'react';
import notesReducer from "../reducers/notes";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = (props) => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  )
};

export { NoteApp as default }