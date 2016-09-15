
import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { Alert } from 'react-bootstrap'
import * as _ from 'lodash'

import $champions from '../jsonData/champions.json'
import $summonerSpells from '../jsonData/summonerSpells.json'
import $masteries from '../jsonData/masteries.json'
import $runes from '../jsonData/runes.json'

class App extends Component {

  sendToRootWithMessage(msg) {
    console.log('hello there...', msg)
  }

  // getChampionImage(championId) {
  //   const champion = _.find($champions, (champ) => {
  //     if (champ.key == championId) {
  //       return champ
  //     }
  //   })
  //   return `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/champion/${champion.name.replace(' ', '')}.png`
  // }

  render() {
    return(
      <div>
        {React.cloneElement(this.props.children, {
          sendToRootWithMessage: this.sendToRootWithMessage,
          // getChampionImage: this.getChampionImage
        })}
      </div>
    )
  }
}

// https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/47682701/ranked?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/unclerodgers?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/api/lol/na/v2.4/team/by-summoner/42733402,21066307,67169698,59667857,70520692,65529523,52609925,52315500,49639860,64099838?api_key=a85d0753-6824-4725-a76f-23be84110e08
// https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/47682701?api_key=a85d0753-6824-4725-a76f-23be84110e08

export default App
