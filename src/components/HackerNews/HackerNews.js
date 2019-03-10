import React, { Component } from 'react'
import actions from '../../store/reducers/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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
    localStorage.setItem('bookmarks', JSON.stringify(this.state.bookmarks))
    localStorage.setItem('isBookmarked', false)
  }

  deleteBookmark(id) {
    const bookmarks = [...this.state.bookmarks]
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)

    this.setState({ list: updatedBookmarks, isBookmarked: false })

    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
  }

  render() {
    return (
      <div className="Hacker-news">
        <div className="Container">
          <h1>Hacker News</h1>
          <Link
            to={{
              pathname: '/bookmarks',
              state: {
                bookmarks: this.state.bookmarks,
                isBookmarked: this.state.isBookmarked
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
                      !this.state.isBookmarked
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
