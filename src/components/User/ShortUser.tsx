import React from "react";
import { Container, IconButton, Link, makeStyles } from "@material-ui/core";
import AvatarEx from "../../static/profile.png";
import { Height } from "@material-ui/icons";
const ShortRepository = ({ user }: { user: any }) => {
  user.avatar = AvatarEx;
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <img src={user.avatar} className={classes.avatar} />
      <Link href={user.url} className={classes.link}>
        {user.name}
      </Link>
    </Container>
  );
};
const useStyles = makeStyles(() => ({
  container: {
    width: "80%",
    border: "1px solid #0000005e",
    borderRadius: "7px",
    marginLeft: "10%",
    marginBottom: "1%",
    padding: "1%",
  },
  link: {
    verticalAlign: "super",
  },
  avatar: {
    width: "30px",
    height: "30px",
    paddingRight: "2%",
  },
}));
export default ShortRepository;
