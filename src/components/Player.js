
import React, { Component } from 'react'
import { Row, Col, Accordian, Panel, PanelGroup } from 'react-bootstrap'
import * as _ from 'lodash'

import GeneralTab from './GeneralTab'
import MasteriesTab from './MasteriesTab'
import RunesTab from './RunesTab'

class Team extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeKey: '1',
      info: this.props.info
    }
  }

  componentWillMount() {
    // from Match, where all the json files are loaded
    var gsg = this.props.getSummonerGeneral(this.state.info)
    this.setState(gsg)
  }

  getMasteryKeystone() {
    const masteries = this.state.info.masteries
    const whichKeystone = _.find(masteries, (mastery) => {
      const mid = mastery.masteryId
      if (mid == '6161') return mastery // warlords
      if (mid == '6162') return mastery // ferver
      if (mid == '6164') return mastery // deathfire
      if (mid == '6361') return mastery // spiritwalker
      if (mid == '6362') return mastery // thunderlords
      if (mid == '6363') return mastery // windspeakers
      if (mid == '6261') return mastery // grasp of undying
      if (mid == '6262') return mastery // strength of ages
      if (mid == '6263') return mastery // bond of stone
      // need to handle no keystone case
    })
    return whichKeystone
  }

  handleSelect(activeKey) {
    this.setState({ activeKey })
  }

  render() {
    const general   = this.state.info
    const masteries = this.state.info.masteries
    const runes     = this.state.info.runes
    const keystone  = this.getMasteryKeystone()

    return(
      <div className="col-md-15">
        <div className="player">
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
            <Panel header={general.summonerName} eventKey="1">
              <GeneralTab
                generalData={general}
                championImage={this.state.championImage}
                spell1={this.state.summonerSpell1Url}
                spell2={this.state.summonerSpell2Url}
                keystone={keystone.masteryId} />
            </Panel>

            <Panel header="Runes" eventKey="2">
              <RunesTab
                runes={runes}
                getRuneInfo={this.props.getRuneInfo} />
            </Panel>

            <Panel header="Masteries" eventKey="3">
              <MasteriesTab
                masteries={masteries} />
            </Panel>
          </PanelGroup>
        </div>
      </div>
    )
  }
}

export default Team

// rune : http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/8001.png
// mastery : http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6111.png
// sum spell : http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png
