import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login } from './pages/Login'
import withApollo from './lib/withApollo'
import { GithubCodePage } from './pages/GithubCodePage'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact component={ Login } path="/login" />
        <Route component={ GithubCodePage } path="/login/oauth2/code/github" />
      </Switch>
    </Router>
  )
}

export default withApollo(App)
