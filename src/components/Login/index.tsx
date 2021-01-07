import React from 'react'
import { Container, Grid, Link, makeStyles } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import { githubClientKeys } from '../../utils'
import { Header } from '../ui/Header'

export const LoginItem = () => {
  const classes = useStyles()
  const {clientId} = githubClientKeys
  return (
    <Container className={ classes.container }>
      <Grid className={ classes.loginForm }>
        <Link
          href={ `https://github.com/login/oauth/authorize?client_id=${ clientId }` }
        >
          <Header size={ 'small' } className={ classes.loginForm }
                  title={ <>Sign in with GitHub <GitHubIcon/></> }/>
        </Link>
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles(() => ({
  container: {
    paddingBottom: '3%',
    padding: '7%',
    width: '500px',
    borderRadius: '15px',
    backgroundColor: '#fafbfc',
  },
  loginForm: {
    textAlign: 'center',
    padding: '10px',
    borderRadius: '3px',
    border: '1px solid'
  },
  field: {
    width: '90%',
  },
  button: {
    width: '90%',
    fontSize: '184%',
    fontWeight: 'bold',
  },
}))
