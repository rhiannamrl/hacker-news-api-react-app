import React, { Component } from 'react'
import './landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="NavBar-menu">
            <div className="NavBar-section">
              <li className="NavBar-item">
                <span>Insurance</span>
                <i class="fas fa-caret-down" />
              </li>
              <li className="NavBar-item">Products</li>
              <li className="NavBar-item">Support</li>

              <li className="NavBar-item">Claims</li>
            </div>
            <div className="NavBar-section">
              <li className="NavBar-item">Download App</li>
              <li className="NavBar-item">Login</li>
              <li className="NavBar-item">
                <button>Sign Up</button>
              </li>
            </div>
          </ul>
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

        <div className="Policy-hero">
          <div className="Container">
            <h1>
              Our partners come in all shapes and sizes, just like our policies
            </h1>
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
              <li className="Footer-item">SURE.</li>
              <li className="Footer-item">Privacy Policy</li>
              <li className="Footer-item">Terms of Service</li>
              <li className="Footer-item">Licenses</li>
              <li className="Footer-item">Products</li>
              <li className="Footer-item">Support</li>
              <li className="Footer-item">Contact Us</li>
            </ul>
            <ul className="Footer-social">
              <li className="Footer-social-item">
                <i class="fab fa-twitter" />
              </li>
              <li className="Footer-social-item">
                <i class="fab fa-facebook-f" />
              </li>
              <li className="Footer-social-item">
                <i class="fab fa-instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
