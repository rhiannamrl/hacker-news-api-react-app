import React, { Component } from 'react'

import './navbar.css'
import SURElogo from './assets/SURElogo.png'

class Navbar extends Component {
  render() {
    return (
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
    )
  }
}

export default Navbar
