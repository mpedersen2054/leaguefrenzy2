
import React, { Component } from 'react'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

class SearchPage extends Component {

  constructor() {
    super()

    this.state = {
      summonerNameValue: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const summonerName = this.state.summonerNameValue
    if (summonerName.length <= 0) {
      console.log('throw error!')
    } else {
      browserHistory.push(`/match?summonerName=${summonerName}`)
    }
  }

  handleInputChange(e) {
    this.setState({ summonerNameValue: e.target.value })
  }

  render() {
    return(
      <div className="search-page">
        <div className="container">
          <form
            id="search-summoner"
            onSubmit={this.handleSubmit} >
            <FormGroup>
              <FormControl
                type="text"
                name="summonerName"
                onChange={this.handleInputChange}
                value={this.state.summonerNameValue}
                placeholder="Enter summoner name..." />
            </FormGroup>
            <Button>Search</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchPage
