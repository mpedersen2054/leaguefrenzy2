
import React, { Component } from 'react'
import { Row, Col, FormGroup, FormControl, Button, Checkbox } from 'react-bootstrap'
import { browserHistory } from 'react-router'

class SearchPage extends Component {

  constructor() {
    super()

    this.state = {
      summonerNameValue: '',
      status: 'off'
      // useStaticDataInpVal: 'off'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.useStaticData = this.useStaticData.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const summonerName = this.state.summonerNameValue.replace(/\s+/g, '')

    console.log('heyy', status)

    if (summonerName.length <= 0) {
      console.log('throw error!')
    } else {
      browserHistory.push(`/match?summonerName=${summonerName}&useStatic=false`)
    }
  }

  handleInputChange(e) {
    this.setState({ summonerNameValue: e.target.value })
  }

  useStaticData() {
    browserHistory.push(`/match?summonerName=yolomcbrolo&useStatic=true`)
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
                <Button block bsSize="large" bsStyle="info" className="search-btn">Search</Button>
              </form>
            </Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={3} className="second-col well well-sm">
              <div className="pull-left">
                <Button onClick={this.useStaticData} bsStyle="default">Use static</Button>
              </div>
              <p>if you don't have an account or aren't current playing, click me</p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default SearchPage
