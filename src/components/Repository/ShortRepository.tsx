import React from 'react'
import { Container, IconButton, makeStyles } from '@material-ui/core'
import StarIcon from './Star'
import { yellow } from '@material-ui/core/colors'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom'
const ShortRepository = ({ repository }: { repository: any }) => {
  const classes = useStyles()
  return (
    <Container className={classes.repContainer}>
      {repository.isLock ? (
        <LockOutlinedIcon style={{ paddingRight: '3%' }} />
      ) : (
        <LockOpenOutlinedIcon style={{ paddingRight: '3%' }} />
      )}
      <Link to={`${repository.owner.login}/${repository.name}`} className={classes.link}>
        {repository.name}
      </Link>
      {repository.isStarred ? (
        <IconButton className={classes.starButton}>
          <StarIcon style={{ color: 'white' }} />
        </IconButton>
      ) : (
        <IconButton className={classes.starButton}>
          <StarIcon style={{ color: yellow[500] }} />
        </IconButton>
      )}
    </Container>
  )
}
const useStyles = makeStyles(() => ({
  repContainer: {
    width: '80%',
    border: '1px solid #0000005e',
    borderRadius: '7px',
    marginLeft: '10%',
    marginBottom: '1%'
  },
  starButton: {
    verticalAlign: 'baseline',
    color: yellow[500]
  },
  link: {
    verticalAlign: 'super'
  }
}))
export default ShortRepository
