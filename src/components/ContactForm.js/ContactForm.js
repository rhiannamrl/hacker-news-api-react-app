import React, { Component } from 'react'

import './contact.css'

class ContactForm extends Component {
  render() {
    return (
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
                  <input type="text" name="lastName" placeholder="Last Name" />
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
    )
  }
}

export default ContactForm
