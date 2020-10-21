import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login } from './pages/Login'
import withApollo from './lib/withApollo'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={ Login } path="/login"/>
      </Switch>
    </Router>
  )
}

export default withApollo(App)
