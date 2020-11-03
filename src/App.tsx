import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import withApollo from './lib/withApollo'
import { GithubCodePage } from './pages/GithubCodePage'
import Login from './pages/login'
import Search from './pages/Search'

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Search} path="/search" />
        <Route component={GithubCodePage} path="/login/oauth2/code/github" />
      </Switch>
    </Router>
  )
}

export default withApollo(App)
