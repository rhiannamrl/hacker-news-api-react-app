import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Policies from './Policies/Policies.js'
import ContactForm from './ContactForm.js/ContactForm.js'
import Footer from './Footer/Footer.js'
import Solutions from './Solutions/Solutions.js'
import Partners from './Partners/Partners.js'

import '../css/landing.css'
import SURElogo from '../images/SURElogo.png'
import Computer from '../images/Computer.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
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
            <img src={Computer} alt={'comp'} />
          </div>
        </div>
        <Partners />
        <Solutions />
        <Policies />
        <ContactForm />
        <Footer />
      </div>
    )
  }
}
