import React, { Component } from 'react'
import actions from '../../store/reducers/actions'
import { connect } from 'react-redux'
import HackerNavbar from './HackerNavbar'
import Bookmarks from './Bookmarks'

import './hackernews.css'

class HackerNews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookmarks: []
    }
    this.deleteBookmark = this.deleteBookmark.bind(this)
    this.addBookmark = this.addBookmark.bind(this)
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

    this.setState({
      bookmarks,
      isBookmarked: true
    })
  }
  deleteBookmark(id) {
    this.setState({
      bookmarks: this.state.bookmarks.filter(bookmark => bookmark.id !== id)
    })
  }

  render() {
    return (
      <div className="Hacker-news">
        <HackerNavbar />
        <div className="row">
          <div className="news-panel">
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
                  <button type="button" onClick={() => this.addBookmark(story)}>
                    <i class="far fa-star" />
                  </button>
                </li>
              </ul>
            ))}
          </div>
          <div className="bookmarks-panel">
            <Bookmarks
              bookmarks={this.state.bookmarks}
              deleteBookmark={this.deleteBookmark}
            />
          </div>
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
