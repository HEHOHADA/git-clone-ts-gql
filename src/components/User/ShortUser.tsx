import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
const ShortRepository = ({ user }: { user: any }) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <img src={user.avatar} className={classes.avatar} />
      <Link to={`/${user.name}`} className={classes.link}>
        {user.name}
      </Link>
    </Container>
  )
}
const useStyles = makeStyles(() => ({
  container: {
    width: '80%',
    border: '1px solid #0000005e',
    borderRadius: '7px',
    marginLeft: '10%',
    marginBottom: '1%',
    padding: '1%'
  },
  link: {
    verticalAlign: 'super'
  },
  avatar: {
    width: '30px',
    height: '30px',
    paddingRight: '2%'
  }
}))
export default ShortRepository
