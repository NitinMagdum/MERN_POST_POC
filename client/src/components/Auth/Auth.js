import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  TextField,
  Grid,
  Container,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import useStyle from "./styles";
import * as action from "../../store/actions/authActions";
import { useHistory } from "react-router";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormState);
  const [isSignUp, setIsSignUp] = useState(true);
  const history = useHistory();

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    if (isSignUp) {
      dispatch(action.register(formData, history));
    } else {
      dispatch(action.login(formData, history));
    }
  };

  const toggleIsSignUp = () => {
    setFormData(initialFormState);
    setIsSignUp((prev) => {
      return !prev;
    });
  };

  return (
    <Container maxWidth="xs" component="main">
      <Paper className={classes.paper}>
        <Typography>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form onSubmit={onSubmitHandler} className={classes.form}>
          <Grid container spacing={2}>
            {isSignUp && (
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={formData.email}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={formData.password}
                onChange={(e) => {
                  onChangeHandler(e);
                }}
              />
            </Grid>
            {isSignUp && (
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                />
              </Grid>
            )}
          </Grid>
          <Grid item>
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              fullWidth
              variant="contained"
              onClick={toggleIsSignUp}
            >
              {isSignUp
                ? "ALready Have an Account Sign In"
                : "Dont have an account sign up"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
