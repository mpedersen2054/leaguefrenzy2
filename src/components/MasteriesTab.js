
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import MasteriesTree from './MasteriesTree'

class MasteriesTab extends Component {

  render() {

    const ferocity = [ 11, 14, 21, 22, 23, 31, 34, 41, 42, 51, 54, 61, 62, 64 ]
    const cunning  = [ 11, 12, 21, 22, 23, 31, 32, 42, 43, 51, 52, 61, 62, 63 ]
    const resolve  = [ 11, 12, 21, 23, 31, 32, 41, 42, 32, 51, 52, 61, 62, 63 ]

    return(
      <div className="tab masteries-tab">
        <MasteriesTree tree="ferocity" talentId={61} talents={ferocity} />
        <MasteriesTree tree="cunning"  talentId={63} talents={cunning} />
        <MasteriesTree tree="resolve"  talentId={62} talents={resolve} />
      </div>
    )
  }
}

export default MasteriesTab
