import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { RepositoryCard } from './RepositoryCard'

export const RepositoriesCard = ({data}: any) => {
  const classes = useStyles()
  return (
    <Container className={ classes.container }>
      { data.map((item: any) => {
        return (
          <RepositoryCard { ...item } key={ item.id }/>
        )
      }) }
    </Container>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      flexWrap: 'wrap',
      display: 'flex',
      maxHeight: '30vh'
    }
  }),
)
