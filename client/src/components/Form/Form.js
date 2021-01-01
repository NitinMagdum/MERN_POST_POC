import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postAction from "../../store/actions/postAction";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyle from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const initialFormState = {
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  };

  const [formState, setFormState] = useState({ ...initialFormState });
  //   const postState = useSelector((state) => {
  //     return state.postState;
  //   });

  /* if (currentId) {
    const post = postState.find((post) => {
      return currentId == post._id;
    });
    setFormState({
      creator: post.creator,
      title: post.title,
      message: post.message,
      tags: post.tags,
      selectedFile: post.selectedFile,
    });
  } */

  /* const post = useSelector((state) =>
    currentId ? state.postState.find((p) => p.id == currentId) : null
  ); */
  const post = useSelector((state) =>
    currentId
      ? state.postState.find((message) => message._id === currentId)
      : null
  );

  useEffect(() => {
    if (post) setFormState(post);
  }, [post]);
  console.log(post);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    if (!currentId) {
      dispatch(postAction.createPost(formState));
    } else {
      dispatch(postAction.updatePost(currentId, formState));
    }
    clearForm();
  };

  const clearForm = () => {
    console.log(initialFormState);
    setFormState(initialFormState);
    setCurrentId(null);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          className={`${classes.root} ${classes.form}`}
        >
          <TextField
            name="creator"
            fullWidth
            label="Creator"
            variant="outlined"
            value={formState.creator}
            onChange={(e) => {
              setFormState({ ...formState, creator: e.target.value });
            }}
          />
          <TextField
            name="title"
            fullWidth
            label="Title"
            variant="outlined"
            value={formState.title}
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
          />
          <TextField
            name="message"
            fullWidth
            label="Message"
            variant="outlined"
            value={formState.message}
            onChange={(e) => {
              setFormState({ ...formState, message: e.target.value });
            }}
          />
          <TextField
            name="tags"
            fullWidth
            label="Tags"
            variant="outlined"
            value={formState.tags}
            onChange={(e) => {
              setFormState({ ...formState, tags: e.target.value });
            }}
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={(e) => {
                setFormState({ ...formState, selectedFile: e.base64 });
              }}
            ></FileBase>
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={clearForm}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </>
  );
};

export default Form;
