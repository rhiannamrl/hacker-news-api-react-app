import React, { Component } from 'react'
import actions from '../store/reducers/actions'
import { connect } from 'react-redux'

class HackerNews extends Component {
  constructor() {
    super()
    this.state = {
      bookmarks: []
    }
  }
  componentDidMount() {
    this.props.fetchStories()
  }
  render() {
    return (
      <div>
        <h1>stories go here</h1>
        {this.props.stories.map(story => (
          <ul key={story.id} {...story}>
            <li>{story.title}</li>
            <li>{story.by}</li>
            <li>{story.score}</li>
            <button>bookmark</button>
          </ul>
        ))}
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
