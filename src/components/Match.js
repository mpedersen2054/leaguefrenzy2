
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
      useStatic: this.props.location.query.useStatic,
      players: [],
      staticDataCheckboxVal: 'off',
      isError: true,
      isLoading: false
    }
  }

  componentWillMount() {
    var summonerName  = this.state.summonerName
    var useStatic = this.state.useStatic
    var useStaticToF = useStatic == 'true'
    // var serverRequest = this.getMatchData(summonerName)
    if (useStaticToF) {
      console.log('using static!')
      var serverRequest = this.useStaticData(summonerName)
    } else {
      console.log('not using static!')
      var serverRequest = this.getMatchData(summonerName)
    }
  }

  componentWillUnmount() {}

  // https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
  // https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/39774795?api_key=a85d0753-6824-4725-a76f-23be84110e08

  getMatchData(summonerName) {
    console.log('hello get match data')
    // request the summonerObject which requests a string (the name)
    axios.get(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${apiKey}`)
      .then((response) => {
        // response.data = { yolomcbrolo: { ... } } so had to get the first prop
        const summonerKey = Object.keys(response.data)[0]
        const summonerObj = response.data[summonerKey]
        console.log(`summonerName: ${summonerObj.name} // summonerId: ${summonerObj.id}`)
        // since if you search a playerName and they are not in a current game it
        // will throw 404, use a static.json file for the time being
        const searchFile = `/getInfo/${summonerObj.id}`
        axios.get(searchFile)
          .then((response) => {
            const matchData = response.data
            console.log(response, 'hello rezponze')
            this.setState({
              players: [...matchData.participants],
              isError: false
            })
          })
          .catch((err) => {
            // throw error here
            console.log('error getting spectator info', err)
            this.setState({ isError: true })
          })
      })
      .catch((err) => {
        console.log('error!', err, this.state.isError)
        this.setState({ isError: true })
      })
  }

  getSummonerRuneInfo(runez) {
    console.log('hello from getSummonerRuneInfo in Match::::', runez)
  }

  useStaticData(e) {
    const staticFile = '../jsonData/spectatorInformation.json'
    this.setState({ isLoading: true })

    // request the summonerObject which requests a string (the name)
    axios.get(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/yolomcbrolo?api_key=${apiKey}`)
      .then((response) => {
        // response.data = { yolomcbrolo: { ... } } so had to get the first prop
        const summonerKey = Object.keys(response.data)[0]
        const summonerObj = response.data[summonerKey]
        // since if you search a playerName and they are not in a current game it
        // will throw 404, use a static.json file for the time being
        axios.get(staticFile)
          .then((response) => {
            const matchData = response.data
            console.log(response, 'hello rezponze')
            this.setState({
              players: [...matchData.participants],
              isError: false
            })
          })
          .catch((err) => {
            console.log('error getting static spectator info', err)
            this.setState({ isError: true })
          })
      })
      .catch((err) => {
        console.log('error from useStaticData!', err)
        this.setState({ isError: true })
      })
  }

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

    console.log('in renderTmpl: ', this.state.isError)

    // if isError = false
    if (!this.state.isError) {
      return (
        <div className="teams-container">
          <Team members={teamA} teamNum={100} jsonData={jsonData} useStaticData={this.useStaticData} />
          <Team members={teamB} teamNum={200} jsonData={jsonData} useStaticData={this.useStaticData} />
        </div>
      )
    } else if (this.state.isLoading) {
      return (
        <div className="loading-container"><h1>LOADING>>>>>>>>>............</h1></div>
      )
    } else {
      return (
        <div className="error-container"><h1>THERE IS AN ERROR!</h1></div>
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

// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/47682701/ranked?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v2.4/team/by-summoner/42733402,21066307,67169698,59667857,70520692,65529523,52609925,52315500,49639860,64099838?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/47682701?api_key=a85d0753-6824-4725-a76f-23be84110e08

export default Match
