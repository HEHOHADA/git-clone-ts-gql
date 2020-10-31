import { makeStyles } from "@material-ui/core/styles";
import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    background:
      "linear-gradient(180deg, rgba(43,49,55,1) 0%, rgba(105,105,105,1) 100%)",
  },
  body: {
    margin: "auto",
  },
}));

const MainLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const classes = useStyles();
  document.body.className = classes.body;
  return (
    <div className={classes.container}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
export default MainLayout;
