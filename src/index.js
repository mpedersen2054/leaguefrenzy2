
import React from 'react'
import ReactDOM from 'react-dom'
import css from './Main.styl'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import App from './components/App'
import Match from './components/Match'
import SearchArea from './components/SearchArea'

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/match" component={Match}></Route>
    </Route>
  </Router>
)


ReactDOM.render(routes, document.getElementById('root'))
