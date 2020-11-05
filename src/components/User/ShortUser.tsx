import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { User } from '../../models/user'

interface UserProps {
  data: User
}
const ShortUser: React.FC<UserProps> = ({ data: { avatar, name } }) => {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <img src={avatar} className={classes.avatar} />
      <Link to={`/${name}`} className={classes.link}>
        {name}
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
export default ShortUser
