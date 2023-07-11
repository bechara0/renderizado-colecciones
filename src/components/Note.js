import React from "react";

const Note = ({ note }) => {
  console.log("notas", note);
  return <li>{note.content}</li>;
};

export default Note;
