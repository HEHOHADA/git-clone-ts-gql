import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Repository } from '../../generated/graphql'
import { yellow } from '@material-ui/core/colors'

interface RepositoryProps {
  data: Repository
}

export const ShortRepository: React.FC<RepositoryProps> = ({
  data: { name, owner }
}) => {
  const classes = useStyles()
  const repoFullName=`${owner.login}/${name}`
  return (
    <Container className={classes.repContainer}>
      <Link to={repoFullName} className={classes.link}>
        {repoFullName}
      </Link>
    </Container>
  )
}

const useStyles = makeStyles(() => ({
  repContainer: {
    borderRadius: '7px',
    marginLeft: '10%',
    marginTop: '5px',
    marginBottom: '1%',
    paddingLeft: '0'
  },
  starButton: {
    verticalAlign: 'baseline',
    color: yellow[500]
  },
  link: {
    verticalAlign: 'super',
    color: '#0366d6',
    outline: 'none',
    fontSize: '14px'
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
