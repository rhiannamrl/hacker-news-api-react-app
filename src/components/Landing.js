import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/landing.css'
import SURElogo from '../images/SURElogo.png'
import SURElogoBlue from '../images/SURElogoBlue.png'
import AllRights from '../images/AllRights.png'
import Computer from '../images/Computer.png'
import chub from '../images/chub.png'
import Nationwide from '../images/Nationwide.png'
import qbe from '../images/qbe.png'
import Assurant from '../images/Assurant.png'
import API from '../images/API.png'
import iFrame from '../images/iFrame.png'
import WhiteLabel from '../images/WhiteLabel.png'
import Event from '../images/Event.png'
import Property from '../images/Property.png'
import Pet from '../images/Pet.png'
import Home from '../images/Home.png'
import Travel from '../images/Travel.png'

export default class Landing extends Component {
  render() {
    return (
      <div id="root">
        <div className="Top-blue-hero">
          <nav>
            <div>
              <ul>
                <li>
                  <img src={SURElogo} alt={'logo'} />
                </li>
                <li>
                  <span>Insurance</span>
                  <i class="fas fa-caret-down" />
                </li>
                <li>Products</li>
                <li>Support</li>
                <li>Claims</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Download App</li>
                <li>Login</li>
                <li>Sign Up</li>
              </ul>
            </div>
          </nav>
          <div className="Get-started">
            <h1>Sure + You</h1>
            <h2>
              Complement your core business and{' '}
              <b>increase customer lifetime value</b> with integrated offers
              from top-tier insurance carriers.
            </h2>
            <Link to="/hacker-news">
              <button>Get Started</button>
            </Link>
          </div>
          <div className="Computer-Image">
            <img src={Computer} alt={'comp'} />
          </div>
          <div />
          <div className="Partners">
            <img src={chub} alt={'chub'} />
            <img src={Nationwide} alt={'nationwide'} />
            <img src={qbe} alt={'qbe'} />
            <img src={Assurant} alt={'assurant'} />
          </div>
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
                  The iFrame solution allows for easy integration - imply a
                  place a line of code to embed an insurance form anywhere on
                  your sight.
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
        </div>

        <div>
          <div className="Policy-hero">
            <div className="Policy-hero-wrapper">
              <h1>
                Our partners come in all shapes and sizes, just like our
                policies
              </h1>
              <div className="Policy-Coverage">
                <div>
                  <img src={Pet} alt={'pet'} />
                  <body>
                    <h4>PetCoverage</h4>
                    Includes preventative, accident, and comprehensive
                  </body>
                </div>
                <div>
                  <img src={Travel} alt={'travel'} />
                  <body>
                    <h4>Travel Coverage</h4>
                    Includes baggage, car, rental, leisure, and flight policies
                  </body>
                </div>
                <div>
                  <img src={Property} alt={'property'} />
                  <body>
                    <h4>Property Coverage</h4>
                    Includes jewelry, collectibles, and smartphones policies
                  </body>
                </div>
                <div>
                  <img src={Event} alt={'event'} />
                  <body>
                    <h4>Catastrophic Event Coverage</h4>
                    Includes wedding, and special events policies
                  </body>
                </div>
                <div>
                  <img src={Home} alt={'home'} />
                  <body>
                    <h4>Home Coverage</h4>
                    Includes renters, eviction, and homeowners policies
                  </body>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="Contact-hero">
            <div className="Contact-hero-wrapper Contact-hero-form">
              <div className="Container">
                <h1 className="Contact-hero-heading">
                  Contact our partnerships team today.
                </h1>
                <form>
                  <div className="Contact-form-inputs">
                    <label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                      />
                    </label>
                    <label>
                      <input type="text" name="company" placeholder="Company" />
                    </label>
                    <label>
                      <input type="text" name="email" placeholder="Email" />
                    </label>
                    <button class="Contact-form-submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="Footer">
          <div className="Container">
            <ul className="Footer-links">
              <li>
                <img src={SURElogoBlue} alt={'logo'} />
              </li>
              <li>
                <img src={AllRights} alt={'logo'} />
              </li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Licenses</li>
              <li>Products</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
            <ul className="Footer-social">
              <li>
                <i class="fab fa-twitter" />
              </li>
              <li>
                <i class="fab fa-facebook-f" />
              </li>
              <li>
                <i class="fab fa-instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
