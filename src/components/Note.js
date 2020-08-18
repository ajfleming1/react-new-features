import React, { useContext, useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import NotesContext from "../context/notes-context";

const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();
  return (
    <div>
      <h3>{note.title}</h3>
      <button onClick={() => dispatch({ type: "REMOVE_NOTE", title: note.title })}>X</button>
      <p>{note.body}</p>
      <p>{position.x}, {position.y}</p>
    </div>
  );
}

export { Note as default }