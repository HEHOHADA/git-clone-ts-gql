import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import { RepositoryCard } from './RepositoryCard'
import { RepoInfoFragment, RepositoryEdge } from '../../generated/graphql'
import { useRedirect } from '../../hooks/useRedirect'


type PropsType = {
  data: Array<RepositoryEdge>
}

export const RepositoriesCard: FC<PropsType> = ({data}) => {
  const classes = useStyles()
  const {historyPush} = useRedirect()
  return (
    <Container className={ classes.container }>
      { data.filter(({node}) => node).map(({node}: RepositoryEdge) => {
        return (
          node &&
          <RepositoryCard onClick={ historyPush } { ...node as RepoInfoFragment }
                          key={ `${ node.url }_` }/>
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
      overflow: 'auto',
    }
  }),
)
