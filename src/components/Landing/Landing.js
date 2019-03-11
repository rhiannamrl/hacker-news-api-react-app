import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Policies from '../Policies/Policies.js'
import ContactForm from '../ContactForm.js/ContactForm.js'
import Footer from '../Footer/Footer.js'
import Solutions from '../Solutions/Solutions.js'
import Partners from '../Partners/Partners.js'
import Navbar from '../Navbar/Navbar.js'

import './landing.css'
import Computer from './assets/Computer.png'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="Top-blue-hero">
          <Navbar />
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
