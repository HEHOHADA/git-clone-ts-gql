import React from "react";
import Layout from "../components/layout/MainLayout";
import { makeStyles } from "@material-ui/core";
import Log from "../components/Login/Login";
export default function Login() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Layout>
        <Log />
      </Layout>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    backgroundColor: "#2b3137",
  },
}));
