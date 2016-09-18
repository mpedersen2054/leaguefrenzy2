
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

    const dummyStats = { maxChampionsKilled: 0, maxNumDeaths: 0, mostChampionKillsPerSession: 0, mostSpellsCast: 0, totalAssists: 0, totalChampionKills: 0, totalDamageDealt: 0, totalDamageTaken: 0, totalDeathsPerSession: 0, totalDoubleKills: 0, totalFirstBlood: 0, totalGoldEarned: 0, totalMagicDamageDealt: 0, totalMinionKills: 0, totalPentaKills: 0, totalPhysicalDamageDealt: 0, totalQuadraKills: 0, totalSessionsLost: 0, totalSessionsPlayed: 0, totalSessionsWon: 0, totalTripleKills: 0, totalTurretsKilled: 0, totalUnrealKills: 0 }

    axios.get(`https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/${summonerId}/ranked?api_key=${apiKey}`)
      .then((response) => {
        const champions = response.data.champions
        const hasPlayedChamp = _.find(champions, (champ) => {
          if (champ.id == champId) return champ
        })
        var stats
        if (!hasPlayedChamp) {
          console.log('hello no hasPlayedChamp', hasPlayedChamps)
          stats = dummyStats
        } else {
          stats = { stats: hasPlayedChamp.stats }
        }
        this.setState(stats)
      })
      .catch((err) => {
        this.setState({ stats: dummyStats })
      })
  }

  getWinPercentage(wins, loses) {
    const winPercentCalc = (wins / (wins + loses)) * 100
    if (!!winPercentCalc) { // if winPercentCalc !== NaN
      return Math.round(winPercentCalc)
    } else {
      return 0
    }
  }

  getPerGameAverage(stat) {
    const stats = this.state.stats
    const wins = stats.totalSessionsWon
    const loses = stats.totalSessionsLost
    const totalGames = wins + loses
    if (!!totalGames) { // if wins/loses === NaN
      return Math.round(stat / totalGames)
    } else {
      return 0
    }
  }

  render() {
    const data = this.state.data
    const championImage = this.props.championImage
    const summSpell1url = this.props.spell1
    const summSpell2url = this.props.spell2
    const stats = this.state.stats
    // console.log(stats)

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
              <div className="wins-loses">
                <span className="orig-num">
                  <span className="wins">
                    {stats.totalSessionsWon}
                  </span>
                  /<span className="loses">
                    {stats.totalSessionsLost}
                  </span>
                </span>
                <span className="win-percent">
                   ( {this.getWinPercentage(stats.totalSessionsWon, stats.totalSessionsLost)} % )
                </span>
              </div>
              <div className="kills">
                <span className="orig-num">{stats.totalChampionKills}</span>
                 ( {this.getPerGameAverage(stats.totalChampionKills)} <span className="per-game">pga</span> )
              </div>
              <div className="deaths">
                <span className="orig-num">{stats.totalDeathsPerSession}</span>
                 ( {this.getPerGameAverage(stats.totalDeathsPerSession)} <span className="per-game">pga</span> )
              </div>
              <div className="assists">
                <span className="orig-num">{stats.totalAssists}</span>
                 ( {this.getPerGameAverage(stats.totalAssists)} <span className="per-game">pga</span> )
              </div>
              <div className="cs">
                <span className="orig-num">{stats.totalMinionKills}</span>
                 ( {this.getPerGameAverage(stats.totalMinionKills)} <span className="per-game">pga</span> )
              </div>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default GeneralTab
