
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
              getSummonerGeneral={this.props.getSummonerGeneral}
              getRuneInfo={this.props.getRuneInfo} />
          )
        })}
      </div>
    )
  }
}

export default Team
