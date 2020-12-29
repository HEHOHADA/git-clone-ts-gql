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
  return (
    <div className={ classes.container }>
      <Navbar isAuth={isAuth} onLogout={onLogout}/>
      <div>{ children }</div>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh'
  }
}))
