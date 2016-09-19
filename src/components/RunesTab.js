
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import * as _ from 'lodash'

class RunesTab extends Component {
  constructor() {
    super()

    this.state = {
      runes: []
    }
  }

  componentWillMount() {
    const runes = this.props.runes
    const runesJson = this.props.runesJson
    const newArr = []
    for (var i in runes) {
      var rune = runes[i]
      newArr.push({ runeInfo: runesJson[rune.runeId], count: rune.count})
    }
    this.setState({ runes: [...newArr] })
  }

  render() {
    const runes = this.state.runes

    // for each type of rune, filter the summoners runes
    // array and extract each rune by its type

    const marks = _.filter(runes, (rune) => {
      if (rune.runeInfo.rune.type === 'red') return rune
    })
    const glyphs = _.filter(runes, (rune) => {
      if (rune.runeInfo.rune.type === 'blue') return rune
    })
    const seals = _.filter(runes, (rune) => {
      if (rune.runeInfo.rune.type === 'yellow') return rune
    })
    const quints = _.filter(runes, (rune) => {
      if (rune.runeInfo.rune.type === 'black') return rune
    })

    return(
      <div className="tab runes-tab">
        <div className="marks">
          <p>marks</p>
          {marks.map((mark) => {
            return(
              <div key={_.random(0, 10000)} className="mark rune">
                <span className="count">x{mark.count}</span>
                <span className="description">{mark.runeInfo.description}</span>
              </div>
            )
          })}
        </div>
        <div className="glyphs">
          <p>glyphs</p>
          {glyphs.map((glyph) => {
            return(
              <div key={_.random(0, 10000)} className="glyph rune">
                <span className="count">x{glyph.count}</span>
                <span className="description">{glyph.runeInfo.description}</span>
              </div>
            )
          })}
        </div>
        <div className="seals">
          <p>seals</p>
          {seals.map((seal) => {
            return(
              <div key={_.random(0, 10000)} className="seal rune">
                <span className="count">x{seal.count}</span>
                <span className="description">{seal.runeInfo.description}</span>
              </div>
            )
          })}
        </div>
        <div className="quints">
          <p>quints</p>
          {quints.map((quint) => {
            return(
              <div key={_.random(0, 10000)} className="quint rune">
                <span className="count">x{quint.count}</span>
                <span className="description">{quint.runeInfo.description}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default RunesTab
