import React, { PropsWithChildren } from 'react'
import { Navbar } from '../shared/navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { getTokenValue } from '../../lib/localStorage'
import { useRedirect } from '../../hooks/useRedirect'
import { Box } from '@material-ui/core'

export const MainLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const classes = useStyles()
  const {onLogout, goHome} = useRedirect()
  const isAuth = !!getTokenValue()

  return (
    <Box className={ classes.container }>
      <Navbar goHome={ goHome } isAuth={ isAuth } onLogout={ onLogout }/>
      <Box className={ classes.childContainer }>{ children }</Box>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh'
  },
  childContainer: {
    height: 'calc(100% - 64px)'
  }
}))
