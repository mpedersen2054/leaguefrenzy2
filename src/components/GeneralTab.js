
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class GeneralTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.fromObserver
    }
  }

  render() {
    const data = this.props.fromObserver
    const championImage = this.props.championImage
    const summSpell1url = this.props.spell1
    const summSpell2url = this.props.spell2

    return(
      <div className="tab general-tab" style={{backgroundColor: '#fff'}}>
        <div className="visual-data">
          <img className="champion-image" src={championImage} />
          <img className="summoner-spell spell1" src={summSpell1url} />
          <img className="summoner-spell spell2" src={summSpell2url} />
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
              <div className="wins-loses">27 / 24 ( 54.7% )</div>
              <div className="kills">200 ( 10.4 )</div>
              <div className="deaths">173 ( 8 )</div>
              <div className="assists">263 ( 14.8 )</div>
              <div className="cs">12000 ( 232 )</div>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default GeneralTab
