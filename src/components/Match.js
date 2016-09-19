
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { browserHistory, Link } from 'react-router'

import Team from './Team'

const apiKey = 'a85d0753-6824-4725-a76f-23be84110e08'

import champions from '../jsonData/champions.json'
import summonerSpells from '../jsonData/summonerSpells.json'
import masteries from '../jsonData/masteries.json'
import runes from '../jsonData/runes.json'

class Match extends Component {

  constructor(props) {
    super(props)

    this.state = {
      summonerName: this.props.location.query.summonerName, // ?summonerName=XXX
      useStatic: this.props.location.query.useStatic, // &useStatic=T/F
      players: [],
      isError: true,
      isLoading: false
    }
  }

  componentWillMount() {
    const summonerName  = this.state.summonerName
    const useStatic     = this.state.useStatic == 'true'

    this.getMatchData(summonerName, useStatic)
  }

  // requests summonerId using submitted summonerName,
  // then requests current-match data using summonerId
  getMatchData(summonerName, isStatic) {
    this.setState({ isLoading: true })
    // request the summonerObject which requests a string (the name)
    this.serverRequest = axios.get(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${apiKey}`)
      .then((response) => {
        // response.data = { yolomcbrolo: { ... } } so had to get the first prop
        const summonerKey = Object.keys(response.data)[0]
        const summonerObj = response.data[summonerKey]
        console.log(`summonerName: ${summonerObj.name} // summonerId: ${summonerObj.id}`)

        // if isStatic = true ( render json from local directory )
        // else use 'localhost:XXXX/getInfo/:summonerId'
        var searchFile = isStatic ? '../jsonData/spectatorInformation.json' : `/getInfo/${summonerObj.id}`
        axios.get(searchFile)
          .then((response) => {
            const matchData = response.data
            this.setState({
              players: [...matchData.participants],
              isError: false,
              isLoading: false
            })
          })
          .catch((err) => {
            console.log('error getting spectator info', err)
            this.setState({ isError: true, isLoading: false })
          })
      })
      .catch((err) => {
        console.log('error getting summonerId', err)
        this.setState({ isError: true, isLoading: false })
      })
  }

  // to be called in Player
  // get info on summoner & summonerSpells
  getSummonerGeneral(summonerInfo) {
    const info = summonerInfo
    const jsonData = runes

    // get champion
    const champion = _.find(champions, (champ) => {
      if (champ.key == info.championId) {
        return champ
      }
    })
    // champions thumbnail image url
    const championImage = `//ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/${champion.name.replace(' ', '')}.png`

    // get summonerSpell 1
    const spell1 = _.find(summonerSpells, (spell) => {
      if (spell.key == info.spell1Id) return spell
    })
    // get summonerSpell 2
    const spell2 = _.find(summonerSpells, (spell) => {
      if (spell.key == info.spell2Id) return spell
    })

    // summonerSpell's image urls
    const sumSpellImg1 = `//ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/${spell1.id}.png`
    const sumSpellImg2 = `//ddragon.leagueoflegends.com/cdn/6.18.1/img/spell/${spell2.id}.png`

    // return object that will be set to the state in PlayerTab
    return {
      championImage:     championImage,
      summonerSpell1Url: sumSpellImg1,
      summonerSpell2Url: sumSpellImg2
    }
  }

  // to be called in RunesTab
  // only give rune# and count, need to use the json file to get more rune data
  getRuneInfo(runez) {
    const newArr = []
    for (var i in runez) {
      var rune = runez[i]
      newArr.push({ runeInfo: runes[rune.runeId], count: rune.count})
    }
    return newArr
  }

  // renders either a loading tmpl, error tmpl, or the match tmpl
  renderTmpl() {
    const players = this.state.players
    const teamA = players.slice(0, 5)
    const teamB = players.slice(5, 10)
    const jsonData = {
      champions: champions,
      masteries: masteries,
      runes: runes,
      summonerSpells: summonerSpells
    }

    if (!this.state.isError) {
      // Teams TMPL
      return (
        <div className="teams-container">
          <Team
            members={teamA}
            teamNum={100}
            jsonData={jsonData}
            getSummonerGeneral={this.getSummonerGeneral}
            getRuneInfo={this.getRuneInfo}
            useStaticData={this.useStaticData} />

          <Team
            members={teamB}
            teamNum={200}
            jsonData={jsonData}
            getSummonerGeneral={this.getSummonerGeneral}
            getRuneInfo={this.getRuneInfo}
            useStaticData={this.useStaticData} />
        </div>
      )
    } else if (this.state.isLoading) {
      // Loading TMPL
      return (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )
    // Error TMPL
    } else {
      return (
        <div className="error-container">
          <div className="container">
            <div className="sad-teemo pull-left"></div>
            <h1>Sorry</h1>
            <h3>there was an error</h3>
            <div className="description">
              Either the summoner you entered doesn't exist, or they are <b>not currently in a game.</b> It is also possible we are having problems with our server.
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="top-section">
          <Link to="/" className="btn btn-link">Back to Search</Link>
          <div className="pull-right">
            Current search: <b>{this.state.summonerName}</b>
          </div>
        </div>
        {this.renderTmpl()}
      </div>
    )
  }
}

export default Match
