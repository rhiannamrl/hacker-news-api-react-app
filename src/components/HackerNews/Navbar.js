import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './hackernews.css'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <ul>
            <Link to="/hacker-news">
              <li>Hacker News</li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul>
            <Link to="/bookmarks">
              <li>Bookmarks</li>
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
