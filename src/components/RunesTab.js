
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class RunesTab extends Component {
  render() {
    return(
      <div className="tab runes-tab">
        <Row>
          <Col xs={3} sm={2} md={4}>
            <div className="rune">
              <img src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/10002.png" />
              <div>+1.5% movement speed</div>
            </div>
          </Col>
          <Col xs={3} sm={2} md={4}>
            <div className="rune">
              <img src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/10002.png" />
              <div>+1.5% movement speed</div>
            </div>
          </Col>
          <Col xs={3} sm={2} md={4}>
            <div className="rune">
              <img src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/10002.png" />
              <div>+1.5% movement speed</div>
            </div>
          </Col>
          <Col xs={3} sm={2} md={4}>
            <div className="rune">
              <img src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/10002.png" />
              <div>+1.5% movement speed</div>
            </div>
          </Col>
          <Col xs={3} sm={2} md={4}>
            <div className="rune">
              <img src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/10002.png" />
              <div>+1.5% movement speed</div>
            </div>
          </Col>
          <Col xs={3} sm={2} md={4}>
            <div className="rune">
              <img src="http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/10002.png" />
              <div>+1.5% movement speed</div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default RunesTab
