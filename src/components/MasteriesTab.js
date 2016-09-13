
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class MasteriesTab extends Component {

  getDdragonUrl(mid) {
    return `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/62${mid}.png`
  }

  render() {

    return(
      <div className="tab masteries-tab">
        <div className="masteries-tree">
          <div className="masteries-tree-title">Ferocity</div>
          <div className="mrow row-1">
            <div className="m m-11">
              <img src={this.getDdragonUrl(11)} />
              <div className="number-overlay">
                5
              </div>
            </div>
            <div className="m m-filler"></div>
            <div className="m m-14">14</div>
          </div>
          <div className="mrow row-2">
            <div className="m m-21">21</div>
            <div className="m m-22">22</div>
            <div className="m m-23">23</div>
          </div>
          <div className="mrow row-3">
            <div className="m m-31">31</div>
            <div className="m m-filler"></div>
            <div className="m m-34">34</div>
          </div>
          <div className="mrow row-4">
            <div className="m m-41">41</div>
            <div className="m m-42">42</div>
          </div>
          <div className="mrow row-5">
            <div className="m m-51">51</div>
            <div className="m m-filler"></div>
            <div className="m m-54">54</div>
          </div>
          <div className="mrow row-6">
            <div className="m m-61">61</div>
            <div className="m m-62">62</div>
            <div className="m m-64">64</div>
          </div>
        </div>
        <div className="masteries-tree">hello there</div>
        <div className="masteries-tree">hello there</div>
      </div>
    )
  }
}

export default MasteriesTab
