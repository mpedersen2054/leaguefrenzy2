
import React, { Component } from 'react'
import { Row, Col, Accordian, Panel, PanelGroup } from 'react-bootstrap'

class Team extends Component {

  constructor() {
    super()

    this.state = {
      activeKey: '1'
    }
  }

  handleSelect(activeKey) {
    this.setState({ activeKey })
  }

  render() {
    return(
      <div className="col-md-15">
        <div className="player">
          <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
            <Panel header="playerName" eventKey="1">
              <div className="tab general-tab" style={{backgroundColor: '#aaa'}}>
                <div className="overlay"></div>
                hello there frieds!
              </div>
            </Panel>
            <Panel header="Runes" eventKey="2">
              <div className="tab runes-tab"></div>
            </Panel>
            <Panel header="Masteries" eventKey="3">
              <div className="tab masteries-tab"></div>
            </Panel>
          </PanelGroup>
        </div>
      </div>
    )
  }
}

export default Team
