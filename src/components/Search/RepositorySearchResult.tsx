import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { RepositoryCard } from '../Repository/RepositoryCard'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { RepoInfoFragment } from '../../generated/graphql'
import { useRedirect } from '../../hooks/useRedirect'


type PropsType = {
  data: Array<RepoInfoFragment>
}

export const RepositorySearchResult: FC<PropsType> = ({data}) => {
  const classes = useStyles()
  const {historyPush} = useRedirect()
  return (
    <Container className={ classes.container }>
      { data.filter((node: RepoInfoFragment) => node).map((node: RepoInfoFragment) => {
        return (
          node && <RepositoryCard onClick={ historyPush }
                                  size={ 'large' } { ...node }
                                  key={ `${ node.name }_${ node.openGraphImageUrl }` }/>
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
    }
  }),
)
