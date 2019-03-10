import React, { Component } from 'react'
import Navbar from './Navbar'

import './hackernews.css'

class Bookmarks extends Component {
  render() {
    const { bookmarks } = this.props.location.state
    return (
      <div className="Hacker-news">
        <Navbar />
        <div className="Container">
          <h1>Bookmarks</h1>
          <section>
            {bookmarks.map(bookmark => (
              <ul key={bookmark.id}>
                <a href={bookmark.url}>
                  <b>
                    <li>{bookmark.title}</li>
                  </b>
                  <li>author: {bookmark.by}</li>
                  <li>score: {bookmark.score}</li>
                </a>
                <button>
                  <i class="fas fa-trash-alt" />
                </button>
              </ul>
            ))}
          </section>
        </div>
      </div>
    )
  }
}

export default Bookmarks
