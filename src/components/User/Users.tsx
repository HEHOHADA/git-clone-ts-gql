import React, { FC } from 'react'
import { ShortUser } from './ShortUser'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { UserInfoFragment } from '../../generated/graphql'
import { useHistory } from 'react-router-dom'
import { useRedirect } from '../../hooks/useRedirect'


type PropsType = {
  users: Array<UserInfoFragment>
}

export const Users: FC<PropsType> = ({users}) => {
  const classes = useStyles()
  const {historyPush} = useRedirect()
  return (
    <Container className={ classes.container }>
      { users.filter(user => user.login).map((user) => (
        <ShortUser onClick={historyPush} key={ user.login } { ...user }/>
      )) }
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
