import React, { Component } from 'react'
import actions from '../../store/reducers/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from './Navbar.js'

import './hackernews.css'

class HackerNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: [],
      isBookmarked: false
    }
  }

  componentDidMount() {
    this.props.fetchStories()
    this.hydrateStateWithLocalStorage()

    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
    this.saveStateToLocalStorage()
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key)
        try {
          value = JSON.parse(value)
          this.setState({ [key]: value })
        } catch (e) {
          this.setState({ [key]: value })
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }


  addBookmark(bookmark) {
    const bookmarks = [...this.state.bookmarks]
    bookmarks.push(bookmark)
    this.setState(
      {
        bookmarks,
        isBookmarked: true
      },
      function() {
        console.log(this.state)
      }
    )
  }
  deleteBookmark(id) {
    const bookmarks = [...this.state.bookmarks]
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)

    this.setState({ list: updatedBookmarks })
  }

  render() {
    return (
      <div className="Hacker-news">
        <Navbar />
        <div className="Container">
          <h1>Hacker News</h1>
          <Link
            to={{
              pathname: '/bookmarks',
              state: {
                bookmarks: this.state.bookmarks,
                isBookmarked: this.state.isBookmarked
              },
              params: {
                deleteBookmark: this.deleteBookmark
              }
            }}
          >
            <h3>
              <i class="far fa-star" />
              Bookmarks
            </h3>
          </Link>
          <section>
            {this.props.stories.map(story => (
              <ul key={story.id} {...story}>
                <a href={story.url}>
                  <b>
                    <li>{story.title}</li>
                  </b>
                  <li>author: {story.by}</li>
                  <li>score: {story.score}</li>
                </a>
                <li>
                  <button
                    type="button"
                    onClick={
                      !this.state.bookmarks.includes(story.id)
                        ? () => this.addBookmark(story)
                        : () => this.deleteBookmark(story.id)
                    }
                  >
                    <i class="far fa-star" />
                  </button>
                </li>
              </ul>
            ))}
          </section>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    stories: state.stories.stories,
    page: state.stories.page,
    storyIds: state.stories.storyIds,
    isFetching: state.stories.isFetching
  }
}

const mapDispatch = dispatch => {
  return {
    fetchStories: () => dispatch(actions.fetchStoryIds())
  }
}

export default connect(
  mapState,
  mapDispatch
)(HackerNews)
