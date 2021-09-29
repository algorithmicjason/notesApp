import React from "react";
import { Button, Paper } from "@material-ui/core";
// import DeleteIcon from "@material-ui/icons/delete"
import DeleteIcon from "@material-ui/icons/Delete";

function Note({ title, content, id, delNote }) {
  function clickHandler() {
    delNote(id);
  }
  return (
    <Paper
      style={{
        display: "inline-flex",
        minWidth: "200px",
        minHeight: "100px",
        padding: "10px",
        margin: "20px",
      }}
    >
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      <Button onClick={clickHandler} style={{ marginLeft: "120px" }}>
        <DeleteIcon style={{ color: "red" }}></DeleteIcon>
      </Button>
    </Paper>
  );
}

export default Note;
