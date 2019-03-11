import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './hackernews.css'

class HackerNavbar extends Component {
  render() {
    return (
      <nav className="Hacker-news-nav">
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
          </ul>
        </div>
        <div />
      </nav>
    )
  }
}

export default HackerNavbar
