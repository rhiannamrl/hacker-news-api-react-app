import React, { Component } from 'react'

import './solutions.css'
import API from './assets/API.png'
import WhiteLabel from './assets/WhiteLabel.png'
import iFrame from './assets/iFrame.png'

class Solutions extends Component {
  render() {
    return (
      <div className="Solution">
        <div className="Solution-header">
          <h1>Choose the solution that's right for your business</h1>
        </div>
        <div className="Solutions">
          <aside>
            <h4>
              <img src={API} alt={'api'} />
              API
            </h4>
            <h5>
              The Sure API is a set of RESTul enpoints that allow you to
              customize the look and feel for a truly native experience
            </h5>
          </aside>
          <aside>
            <h4>
              <img src={iFrame} alt={'iFrame'} />
              iFrame
            </h4>
            <h5>
              The iFrame solution allows for easy integration - imply a place a
              line of code to embed an insurance form anywhere on your sight.
            </h5>
          </aside>
          <aside>
            <h4>
              <img src={WhiteLabel} alt={'white label'} />
              White Label
            </h4>
            <h5>
              Sure will build and host a branded page, which you can link to
              from a webpage or an email.
            </h5>
          </aside>
        </div>
      </div>
    )
  }
}

export default Solutions
