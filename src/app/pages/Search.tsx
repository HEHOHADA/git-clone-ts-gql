import React from "react";
import Nav from "../components/navbar";
import SearchForm from "../components/Search";
import { makeStyles } from "@material-ui/core";
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Nav />
      <SearchForm />
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    background:
      "linear-gradient(180deg, rgba(43,49,55,1) 0%, rgba(105,105,105,1) 100%)",
  },
}));
