
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Alert } from 'react-bootstrap'
import * as _ from 'lodash'

class App extends Component {

  render() {

    return(
      <div>
        {React.cloneElement(this.props.children, {
        })}
      </div>
    )
  }
}

export default App
