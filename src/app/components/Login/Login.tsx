import React from "react";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  makeStyles,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Login() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid className={classes.loginForm}>
        <Grid item>
          <TextField
            className={classes.field}
            label="Token"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Button className={classes.button}>Login</Button>
        </Grid>
      </Grid>
      <a href="https://github.com/login/oauth/authorize?client_id=507bcc6256587963e456&redirect_uri=http://localhost:3000/login">
        <h3 className={classes.loginForm}>
          Sign in with GitHub <GitHubIcon />
        </h3>
      </a>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    paddingBottom: "3%",
    padding: "7%",
    width: "500px",
    borderRadius: "15px",
    backgroundColor: "#fafbfc",
  },
  loginForm: {
    textAlign: "center",
  },
  field: {
    width: "90%",
  },
  button: {
    width: "90%",
    fontSize: "184%",
    fontWeight: "bold",
  },
}));
