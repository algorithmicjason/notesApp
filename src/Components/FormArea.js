import React from "react";
import { Fab, Paper, TextField } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function FormArea({ addNote }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function clickHandler() {
    addNote(note);
    //clear the input
  }

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setNote((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };

  return (
    <Paper style={{ margin: "10px 10%", padding: "25px 50px" }}>
      <form>
        <TextField
          onChange={changeHandler}
          name="title"
          label="Title"
          fullWidth
          autoComplete="off"
        />
        <TextField
          onChange={changeHandler}
          name="content"
          label="Content"
          multiline
          rows={4}
          fullWidth
          autoComplete="off"
        />
        <Fab onClick={clickHandler} style={{ marginTop: "20px" }}>
          <AddIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default FormArea;
