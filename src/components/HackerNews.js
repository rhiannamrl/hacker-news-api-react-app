import React, { Component } from 'react'
import actions from '../store/reducers/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/hackernews.css'

class HackerNews extends Component {
  constructor() {
    super()
    this.state = {
      bookmarks: ['test story', 'test story 2']
    }
  }
  componentDidMount() {
    this.props.fetchStories()
  }
  render() {
    return (
      <div className="Hacker-news">
        <div className="Container">
          <h1>Hacker News</h1>
          <Link to={{ pathname: '/Bookmarks', state: { bookmarks: [] } }}>
            <h3>
              <i class="far fa-star" />
              Bookmarks
            </h3>
          </Link>
          <section>
            {this.props.stories.map(story => (
              <ul key={story.id} {...story}>
                <b>
                  <li>{story.title}</li>
                </b>
                <li>author: {story.by}</li>
                <li>score: {story.score}</li>
                <li>
                  <button>
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
