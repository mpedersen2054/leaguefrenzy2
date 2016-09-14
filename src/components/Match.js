
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

import Team from './Team'

const apiKey = 'a85d0753-6824-4725-a76f-23be84110e08'

class Match extends Component {

  componentWillMount() {
    var serverRequest = this.getMatchData('yolomcbrolo')
  }

  // https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
  // https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/39774795?api_key=a85d0753-6824-4725-a76f-23be84110e08

  getMatchData(summonerName) {
    // request the summonerObject which requests a string (the name)
    axios.get(`https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${apiKey}`)
      .then((response) => {
        // response.data = { yolomcbrolo: { ... } } so had to get the first prop
        const summonerObj = Object.keys(response.data)[0]
        const summonerId  = summonerObj.id
        // request spectator information, will fail if the user isnt currently in a game
        axios.get(`https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/${summonerId}?api_key=${apiKey}`)
          .then((response2) => {
            console.log('from response2: ', response2)
          })
          .catch((err2) => {
            // is being called because the summoner being searched
            // for isnt currently in a game
            console.log('from err2: ', err2)
          })
      })
      .catch((err) => {
        console.log('error!', err)
      })
  }

  render() {
    var sid = this.props.location.query.summonerName

    return(
      <div className="container-fluid">
        <div className="top-section">
          hello there friends!!!
        </div>
        <Team members={[1,2,3,4,5]} />
        <Team members={[6,7,8,9,10]} />
      </div>
    )
  }
}

// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/47682701/ranked?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v2.4/team/by-summoner/42733402,21066307,67169698,59667857,70520692,65529523,52609925,52315500,49639860,64099838?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/47682701?api_key=a85d0753-6824-4725-a76f-23be84110e08

export default Match
