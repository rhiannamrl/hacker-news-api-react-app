import React, { Component } from 'react'

import './partners.css'
import chub from './assets/chub.png'
import Nationwide from './assets/Nationwide.png'
import qbe from './assets/qbe.png'
import Assurant from './assets/Assurant.png'

class Partners extends Component {
  render() {
    return (
      <div className="Partners-wrapper">
        <div className="Partners">
          <img src={chub} alt={'chub'} />
          <img src={Nationwide} alt={'nationwide'} />
          <img src={qbe} alt={'qbe'} />
          <img src={Assurant} alt={'assurant'} />
        </div>
      </div>
    )
  }
}

export default Partners
