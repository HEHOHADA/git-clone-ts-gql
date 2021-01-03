import React, { PropsWithChildren } from 'react'
import { Navbar } from '../shared/navbar/Navbar'
import { makeStyles } from '@material-ui/core/styles'
import { getTokenValue, setTokeValue } from '../../lib/localStorage'
import { useHistory } from 'react-router-dom'

export const MainLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const classes = useStyles()
  const isAuth = !!getTokenValue()
  const history = useHistory()
  const onLogout = () => {
    setTokeValue('')
    history.push('/login')
  }

  const goHome = () => {
    history.push('/')
  }

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
