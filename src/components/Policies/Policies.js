import React, { Component } from 'react'

import './policies.css'
import Pet from './assets/Pet.png'
import Property from './assets/Property.png'
import Home from './assets/Home.png'
import Travel from './assets/Travel.png'
import Event from './assets/Event.png'

class Policies extends Component {
  render() {
    return (
      <div className="Policy-hero">
        <div className="Policy-hero-wrapper">
          <div />
          <h1>
            Our partners come in all shapes and sizes, just like our policies
          </h1>

          <div className="Policy-Coverage">
            <div>
              <img src={Pet} alt={'pet'} />
              <body>
                <h4>PetCoverage</h4>
                <p>Includes preventative, accident, and comprehensive</p>
              </body>
            </div>

            <div>
              <img src={Travel} alt={'travel'} />
              <body>
                <h4>Travel Coverage</h4>
                <p>
                  Includes baggage, car, rental, leisure, and flight policies
                </p>
              </body>
            </div>
          </div>

          <div className="Policy-Coverage">
            <div>
              <img src={Property} alt={'property'} />
              <body>
                <h4>Property Coverage</h4>
                <p>Includes jewelry, collectibles, and smartphones policies</p>
              </body>
            </div>

            <div>
              <img src={Event} alt={'event'} />
              <body>
                <h4>Catastrophic Event Coverage</h4>
                <p>Includes wedding, and special events policies</p>
              </body>
            </div>
          </div>

          <div className="Policy-Coverage">
            <div>
              <img src={Home} alt={'home'} />
              <body>
                <h4>Home Coverage</h4>
                <p>Includes renters, eviction, and homeowners policies</p>
              </body>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Policies
