import React, { Component } from 'react'
import '../css/landing.css'
import SURElogo from '../images/SURElogo.png'
import SURElogoBlue from '../images/SURElogoBlue.png'
import AllRights from '../images/AllRights.png'

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
                <li>
                  <button>Sign Up</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="Computer-hero">
          <div className="Container">
            <h1>Computer Image</h1>
          </div>
        </div>

        <div className="Partners">
          <div className="Container">
            <h1>Partners</h1>
          </div>
        </div>

        <div className="Solution">
          <div className="Container">
            <h1>Choose the solution that's right for your business</h1>
          </div>
        </div>

        <div>
          <div className="Policy-hero">
            <div className="Container">
              <div className="Policy-hero-wrapper">
                <h1>
                  Our partners come in all shapes and sizes, just like our
                  policies
                </h1>
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
