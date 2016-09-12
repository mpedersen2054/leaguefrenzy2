
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class GeneralTab extends Component {
  render() {
    return(
      <div className="tab general-tab" style={{backgroundColor: '#fff'}}>
        <div className="visual-data">
            <img className="champion-image" src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Aatrox.png" />
            <img className="summoner-spell spell1" src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerDot.png" />
            <img className="summoner-spell spell2" src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png" />
            <img className="summoner-keystone" src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6362.png" />
        </div>

        <div className="info-data">
          <Row>
            <Col xs={6} md={4}>
              <div>W/L</div>
              <div>kills</div>
              <div>deaths</div>
              <div>assists</div>
              <div>cs</div>
            </Col>
            <Col xs={6} md={8}>
              <div>W/L</div>
              <div>kills</div>
              <div>deaths</div>
              <div>assists</div>
              <div>cs</div>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default GeneralTab
