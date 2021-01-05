import React, { PropsWithChildren } from 'react'
import { Navbar } from '../shared/navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { getTokenValue } from '../../lib/localStorage'
import { useRedirect } from '../../hooks/useRedirect'

export const MainLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const classes = useStyles()
  const {onLogout, goHome} = useRedirect()
  const isAuth = !!getTokenValue()

  return (
    <div className={ classes.container }>
      <Navbar goHome={ goHome } isAuth={ isAuth } onLogout={ onLogout }/>
      <div className={ classes.childContainer }>{ children }</div>
    </div>
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
