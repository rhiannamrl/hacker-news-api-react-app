import React, { Component } from 'react'
import './landing.css'

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="Contact-hero">
          <h1 className="Contact-hero-heading">
            Contact our partnerships team today.
          </h1>
          <form>
            <div className="Contact-form">
              <label>
                First Name
                <input type="text" name="firstName" />
              </label>
              <label>
                Last Name
                <input type="text" name="lastName" />
              </label>
              <label>
                Company
                <input type="company" company="company" />
              </label>
              <label>
                Email
                <input type="email" email="email" />
              </label>
              <label>
                Email
                <input type="company" company="company" />
              </label>
              <button>Submit</button>
            </div>
          </form>
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
