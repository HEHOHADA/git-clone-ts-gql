import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const github = require("../../static/github.png");

export default function SearchAppBar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.title}>
            <img src={github} className={classes.icon} alt="" />
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: any) => ({
  navbar: {
    backgroundColor: "#2b3137",
    marginBottom: "3%",
  },
  icon: {
    width: "150px",
    display: "flex",
    marginLeft: "5%",
  },
  title: {
    flexGrow: 1,

    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    padding: theme.spacing(0.6, 0.7),
    height: "100%",
    marginRight: "7%",
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));
