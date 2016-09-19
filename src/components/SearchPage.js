
import React, { Component } from 'react'
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap'
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
    const summonerName = this.state.summonerNameValue.replace(/\s+/g, '')
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
          <Row>
            <Col md={6} mdOffset={3} className="main-col well">
              <h1>Leaguefrenzy 2.0</h1>
              <h3>get ranked stats, runes, and masteries for players of a game-in-progress</h3>
              <form
                id="search-summoner"
                onSubmit={this.handleSubmit} >
                <FormGroup bsSize="large">
                  <FormControl
                    type="text"
                    name="summonerName"
                    onChange={this.handleInputChange}
                    value={this.state.summonerNameValue}
                    placeholder="Enter summoner name..." />
                </FormGroup>
                <Button block bsSize="large" bsStyle="info">Search</Button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default SearchPage
