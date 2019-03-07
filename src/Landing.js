import React, { Component } from 'react'
import './landing.css'

export default class Landing extends Component {
  render() {
    return (
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
    )
  }
}
