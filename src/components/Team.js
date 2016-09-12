
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Player from './Player'

class Team extends Component {
  render() {
    return(
      <div className="team-container">
        <Row>
          <Player />
          <Player />
          <Player />
          <Player />
          <Player />
        </Row>
      </div>
    )
  }
}

export default Team
