
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import * as _ from 'lodash'

class GeneralTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: this.props.fromObserver,
      stats: {}
    }
  }

  componentWillMount() {
    const summonerId = this.state.data.summonerId
    var getRankedData = this.getRankedData(summonerId)
  }

  getRankedData(summonerId) {
    const apiKey = '20439faa-7bb2-480d-80de-8f9db165f083'
    const champId = this.state.data.championId
    axios.get(`https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/${summonerId}/ranked?api_key=${apiKey}`)
      .then((response) => {
        const champions = response.data.champions
        const hasPlayedChamp = _.find(champions, (champ) => {
          if (champ.id == champId) return champ
        })
        var stats
        if (!hasPlayedChamp) {
          stats = { stats: {} }
        } else {
          stats = { stats: hasPlayedChamp.stats }
        }
        this.setState(stats)
        // console.log(`${champId} has played ${hasPlayedChamp}`)
      })
      .catch((err) => {
        console.log('there was an error!!!', err)
      })
  }

  render() {
    const data = this.state.data
    const championImage = this.props.championImage
    const summSpell1url = this.props.spell1
    const summSpell2url = this.props.spell2

    const stats = this.state.stats
    console.log(stats)
    // const totalGamesWon = stats.totalSessionsWon
    // const totalGamesLost = stats.totalGameLost
    // const totalChampKills = stats.totalChampionKills
    // // divide champkills / games
    // const totalChampDeaths = stats.totalDeathsPerSession
    // // divide champ deaths / games
    // const totalChampAssists = stats.totalAssists
    // // divide champ assists / games
    // const totalMinionsKilled = stats.totalMinionsKilled
    // // divide champ cs / games

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
