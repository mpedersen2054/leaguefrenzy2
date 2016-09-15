
import React, { Component } from 'react'
import { Row, Col, Accordian, Panel, PanelGroup } from 'react-bootstrap'


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
    const info = this.state.info
    const jsonData = this.props.jsonData
    const champions = jsonData.champions
    console.log(champions)
    // const summonerIcon = champions.map((champ) => {
    //   return champ.key
    // })

    // console.log(summonerIcon)

  }

  handleSelect(activeKey) {
    this.setState({ activeKey })
  }

  render() {
    const general = this.state.info
    const masteries = this.state.info.masteries
    const runes = this.state.info.runes

    return(
      <div className="col-md-15">
        <div className="player">
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
            <Panel header={general.summonerName} eventKey="1">
              <GeneralTab fromObserver={general} />
            </Panel>
            <Panel header="Runes" eventKey="2">
              <RunesTab runes={runes} />
            </Panel>
            <Panel header="Masteries" eventKey="3">
              <MasteriesTab masteries={masteries} />
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
