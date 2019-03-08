import React, { Component } from 'react'
import actions from '../store/reducers/actions'
import { connect } from 'react-redux'

class HackerNews extends Component {
  componentDidMount() {
    this.props.fetchStories()
  }
  render() {
    console.log(this.props, 'PROPS')
    return (
      <div>
        <h1>stories go here</h1>
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
