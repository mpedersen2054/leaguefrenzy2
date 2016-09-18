
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
      summonerName: this.props.location.query.summonerName,
      players: []
    }
  }

  componentWillMount() {
    var summonerName  = this.state.summonerName
    var serverRequest = this.getMatchData(summonerName)
  }

  // https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
  // https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/39774795?api_key=a85d0753-6824-4725-a76f-23be84110e08

  getMatchData(summonerName) {
    // request the summonerObject which requests a string (the name)
    axios.get(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${apiKey}`)
      .then((response) => {
        // response.data = { yolomcbrolo: { ... } } so had to get the first prop
        const summonerKey = Object.keys(response.data)[0]
        const summonerObj = response.data[summonerKey]
        console.log(`summonerName: ${summonerObj.name} // summonerId: ${summonerObj.id}`)
        // since if you search a playerName and they are not in a current game it
        // will throw 404, use a static.json file for the time being
        // axios.get(`https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/${summonerObj.id}?api_key=${apiKey}`)
        axios.get('./jsonData/spectatorInformation.json')
          .then((response) => {
            const matchData = response.data
            this.setState({
              players: [...matchData.participants]
            })
          })
          .catch((err) => {
            console.log('error getting spectator info', err)
          })
      })
      .catch((err) => {
        console.log('error!', err)
      })
  }

  render() {
    const players = this.state.players
    const teamA = players.slice(0, 5)
    const teamB = players.slice(5, 10)
    const jsonData = {
      champions: champions,
      masteries: masteries,
      runes: runes,
      summonerSpells: summonerSpells
    }

    return(
      <div className="container-fluid">
        <div className="top-section">
          <Link to="/" className="btn btn-link">Back to Search</Link>
          <div className="pull-right">
            Current search: <b>{this.state.summonerName}</b>
          </div>
        </div>

        <Team members={teamA} teamNum={100} jsonData={jsonData} />
        <Team members={teamB} teamNum={200} jsonData={jsonData} />

      </div>
    )
  }
}

// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/47682701/ranked?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v2.4/team/by-summoner/42733402,21066307,67169698,59667857,70520692,65529523,52609925,52315500,49639860,64099838?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/47682701?api_key=a85d0753-6824-4725-a76f-23be84110e08

export default Match
