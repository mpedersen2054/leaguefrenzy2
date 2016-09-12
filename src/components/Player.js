
import React, { Component } from 'react'
import { Row, Col, Accordian, Panel, PanelGroup } from 'react-bootstrap'

import GeneralTab from './GeneralTab'
import MasteriesTab from './MasteriesTab'
import RunesTab from './RunesTab'

class Team extends Component {

  constructor() {
    super()

    this.state = {
      activeKey: '1'
    }
  }

  handleSelect(activeKey) {
    this.setState({ activeKey })
  }

  // rune : http://ddragon.leagueoflegends.com/cdn/6.18.1/img/rune/8001.png
  // mastery : http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/6111.png
  // sum spell : http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/SummonerFlash.png

  render() {
    return(
      <div className="col-md-15">
        <div className="player">
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
            <Panel header="playerName" eventKey="1">
              <GeneralTab />
            </Panel>
            <Panel header="Runes" eventKey="2">
              <RunesTab />
            </Panel>
            <Panel header="Masteries" eventKey="3">
              <MasteriesTab />
            </Panel>
          </PanelGroup>
        </div>
      </div>
    )
  }
}

export default Team
