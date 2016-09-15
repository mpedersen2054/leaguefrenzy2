
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
    const info = this.state.info
    const jsonData = this.props.jsonData
    // http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/Aatrox.png

    /*
    GET CHAMPION ICON URL
     */
    const champion = _.find(jsonData.champions, (champ) => {
      if (champ.key == info.championId) {
        return champ
      }
    })
    const championImage = `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/${champion.name.replace(' ', '')}.png`

    /*
    GET BOTH SUMMONER SPELL ICONS
     */
    const spell1 = _.find(jsonData.summonerSpells, (spell) => {
      if (spell.key == info.spell1Id) return spell
    })

    const spell2 = _.find(jsonData.summonerSpells, (spell) => {
      if (spell.key == info.spell2Id) return spell
    })

    const sumSpellImg1 = `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/${spell1.id}.png`
    const sumSpellImg2 = `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/${spell2.id}.png`

    // console.log(sumSpellImg1, sumSpellImg2)

    this.setState({
      championImage: championImage,
      summonerSpell1Url: sumSpellImg1,
      summonerSpell2Url: sumSpellImg2
    })
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
              <GeneralTab
                fromObserver={general}
                championImage={this.state.championImage}
                spell1={this.state.summonerSpell1Url}
                spell2={this.state.summonerSpell2Url} />
            </Panel>
            <Panel header="Runes" eventKey="2">
              <RunesTab runes={runes} runesJson={this.props.jsonData.runes} />
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
