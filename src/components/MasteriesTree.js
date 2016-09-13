
import React, { Component } from 'react'

class MasteriesTree extends Component {

  getDdragonUrl(tree, mid) {
    if (tree === 61) return `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/61${mid}.png`
    if (tree === 63) return `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/63${mid}.png`
    if (tree === 62) return `http://ddragon.leagueoflegends.com/cdn/6.18.1/img/mastery/62${mid}.png`
  }

  render() {

    const tree = this.props.tree
    const talentId = this.props.talentId
    const talents = this.props.talents

    return(
      <div className={`masteries-tree ${tree}`}>
        <div className="title">{tree}</div>
        <div className="mrow row-1">
          <div className={`m m-${talents[0]}`}>
            <img src={this.getDdragonUrl(talentId, talents[0])} />
            <div className="number-overlay">
              5
            </div>
          </div>
          <div className="m m-filler"></div>
          <div className={`m m-${talents[1]}`}>
            <img src={this.getDdragonUrl(talentId, talents[1])} />
            <div className="number-overlay">
              0
            </div>
          </div>
        </div>
        <div className="mrow row-2">
          <div className={`m m-${talents[2]}`}>
            <img src={this.getDdragonUrl(talentId, talents[2])} />
            <div className="number-overlay">
              1
            </div>
          </div>
          <div className={`m m-${talents[3]}`}>
            <img src={this.getDdragonUrl(talentId, talents[3])} />
            <div className="number-overlay">
              0
            </div>
          </div>
          <div className={`m m-${talents[4]}`}>
            <img src={this.getDdragonUrl(talentId, talents[4])} />
            <div className="number-overlay">
              0
            </div>
          </div>
        </div>
        <div className="mrow row-3">
          <div className={`m m-${talents[5]}`}>
            <img src={this.getDdragonUrl(talentId, talents[5])} />
            <div className="number-overlay">
              5
            </div>
          </div>
          <div className="m m-filler"></div>
          <div className={`m m-${talents[6]}`}>
            <img src={this.getDdragonUrl(talentId, talents[6])} />
            <div className="number-overlay">
              0
            </div>
          </div>
        </div>
        <div className="mrow row-4">
          <div className={`m m-${talents[7]}`}>
            <img src={this.getDdragonUrl(talentId, talents[7])} />
            <div className="number-overlay">
              0
            </div>
          </div>
          <div className={`m m-${talents[8]}`}>
            <img src={this.getDdragonUrl(talentId, talents[8])} />
            <div className="number-overlay">
              1
            </div>
          </div>
        </div>
        <div className="mrow row-5">
          <div className={`m m-${talents[9]}`}>
            <img src={this.getDdragonUrl(talentId, talents[9])} />
            <div className="number-overlay">
              5
            </div>
          </div>
          <div className="m m-filler"></div>
          <div className={`m m-${talents[10]}`}>
            <img src={this.getDdragonUrl(talentId, talents[10])} />
            <div className="number-overlay">
              0
            </div>
          </div>
        </div>
        <div className="mrow row-6">
          <div className={`m m-${talents[11]}`}>
            <img src={this.getDdragonUrl(talentId, talents[11])} />
            <div className="number-overlay">
              0
            </div>
          </div>
          <div className={`m m-${talents[12]}`}>
            <img src={this.getDdragonUrl(talentId, talents[12])} />
            <div className="number-overlay">
              1
            </div>
          </div>
          <div className={`m m-${talents[13]}`}>
            <img src={this.getDdragonUrl(talentId, talents[13])} />
            <div className="number-overlay">
              0
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MasteriesTree
