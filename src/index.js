
import React from 'react'
import ReactDOM from 'react-dom'
import css from './Main.styl'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './components/App'
import Match from './components/Match'
import SearchPage from './components/SearchPage'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchPage} />
      <Route path="/match" component={Match}></Route>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))
