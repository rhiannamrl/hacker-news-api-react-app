import React, { Component } from 'react'

import './footer.css'
import AllRights from './Assets/AllRights.png'
import SURElogoBlue from './Assets/SURElogoBlue.png'

class Footer extends Component {
  render() {
    return (
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
    )
  }
}

export default Footer
