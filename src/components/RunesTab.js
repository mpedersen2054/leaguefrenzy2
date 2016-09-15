
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class RunesTab extends Component {
  render() {
    const runesJson = this.props.runesJson
    const runes = this.props.runes

    // console.log('summoners runes: ', runes)
    // console.log('runes.json: ', runesJson)

    return(
      <div className="tab runes-tab">
        <Row>
          {this.props.runes.map((rune) => {
            return(
              <Col xs={3} sm={2} md={4} key={rune.runeId}>
                <div className="rune">
                  <img src={`http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/${runesJson[rune.runeId].image.full}`} />
                  <div>{runesJson[rune.runeId].description}</div>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>
    )
  }
}

export default RunesTab
