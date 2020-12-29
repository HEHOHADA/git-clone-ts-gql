import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import withApollo from './lib/withApollo'
import { GithubCodePage } from './pages/GithubCodePage'
import Login from './pages/LoginPage'
import Search from './pages/Search'
import Index from './pages/Index'
import { getTokenValue } from './lib/localStorage'
import PrivateRoute from './routes/PrivateRoute'
import { ProfilePage } from './pages/ProfilePage'

function App(): JSX.Element {
  const isAuth = !!getTokenValue()
  console.log('isAuth',isAuth)
  return (
    <Router>
      <Switch>
        <Route exact component={ Index } path="/"/>
        <Route exact component={ Login } path="/login"/>
        <Route exact component={ Search } path="/search"/>
        <Route component={ GithubCodePage } path="/login/oauth2/code/github"/>
        <PrivateRoute component={ProfilePage} path="/:username" isAuth={isAuth}/>
        <PrivateRoute component={ProfilePage} path="/:username/:repo" isAuth={isAuth}/>
      </Switch>
    </Router>
  )
}

export default withApollo(App)
