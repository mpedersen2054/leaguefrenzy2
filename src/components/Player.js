
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
            <Panel header="Panel 1" eventKey="1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non totam corporis ex ea quaerat ut voluptates, tenetur impedit itaque velit, magnam incidunt quos obcaecati? Esse saepe blanditiis consequuntur corporis a? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non totam corporis ex ea quaerat ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non totam corporis ex ea quaerat ut voluptates, tenetur impedit itaque velit, magnam incidunt quos obcaecati? Esse saepe blanditiis consequuntur corporis a?
            </Panel>
            <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
            <Panel header="Panel 3" eventKey="3">Panel 3 content</Panel>
          </PanelGroup>
        </div>
      </div>
    )
  }
}

export default Team
