import React from 'react'
import { Container, IconButton, makeStyles } from '@material-ui/core'
import StarIcon from './Star'
import { yellow } from '@material-ui/core/colors'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Link } from 'react-router-dom'
import { Repository } from '../../types/repository'

interface RepositoryProps {
  data: Repository
}

export const ShortRepository: React.FC<RepositoryProps> = ({
  data: { name, isLock, isStarred, ownerLogin }
}) => {
  const classes = useStyles()
  return (
    <Container className={classes.repContainer}>
      {isLock ? (
        <LockOutlinedIcon className={classes.lock} />
      ) : (
        <LockOpenOutlinedIcon className={classes.lock} />
      )}
      <Link to={`${ownerLogin}/${name}`} className={classes.link}>
        {name}
      </Link>
      <IconButton className={classes.starButton}>
        <StarIcon className={isStarred ? classes.starred : classes.notStarred} />
      </IconButton>
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
  },
  starred: {
    color: yellow[500]
  },
  notStarred: {
    color: 'white'
  },
  lock: {
    paddingRight: '3%'
  }
}))
