import React, { Component } from 'react'

import './navbar.css'
import SURElogo from './assets/SURElogo.png'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="Desktop-menu">
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
          <div className="Desktop-menu">
            <ul>
              <li>Download App</li>
              <li>Login</li>
              <li>Sign Up</li>
            </ul>
          </div>
        </nav>
        <div className="Mobile-menu">
          <div class="Mobile-logo">
            <img src={SURElogo} alt={'logo'} />
          </div>
          <div class="Navbar__Link-toggle Navbar__Link-toggle">
            <i class="fas fa-bars" />
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
