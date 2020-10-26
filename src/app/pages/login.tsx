import React from "react";
import Nav from "../components/Navbar/Navbar";
import Log from "../components/Login/Login";
import { makeStyles } from "@material-ui/core";
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Nav></Nav>
      <Log></Log>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    backgroundColor: "#2b3137",
  },
}));
