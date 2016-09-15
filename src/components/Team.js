
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Player from './Player'

class Team extends Component {
  render() {
    return(
      <div className={`team-container team-container-${this.props.teamNum} clearfix`}>
        {this.props.members.map((member) => {
          return(
            <Player
              key={member.summonerId}
              info={member}
              jsonData={this.props.jsonData} />
          )
        })}
      </div>
    )
  }
}

export default Team
