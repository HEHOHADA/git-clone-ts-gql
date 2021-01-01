import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { RepositoryCard } from './RepositoryCard'
import { RepositoryEdge } from '../../generated/graphql'


type PropsType = {
  data: Array<RepositoryEdge>
}
export const RepositoriesCard: FC<PropsType> = ({data}) => {
  const classes = useStyles()
  return (
    <Container className={ classes.container }>
      { data.filter(({node}) => node).map(({node}: RepositoryEdge) => {
        return (
          node && <RepositoryCard { ...node } key={ node.name }/>
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
