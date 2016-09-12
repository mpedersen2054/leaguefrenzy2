
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

// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/47682701/ranked?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v2.4/team/by-summoner/42733402,21066307,67169698,59667857,70520692,65529523,52609925,52315500,49639860,64099838?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/47682701?api_key=a85d0753-6824-4725-a76f-23be84110e08

export default Team