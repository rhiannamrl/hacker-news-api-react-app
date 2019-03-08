import React, { Component } from 'react'
import { getCurrentStories } from '../store/reducers/reducer'
import { connect } from 'react-redux'

class HackerNews extends Component {
  componentDidMount() {
    if (this.props.getStories) return this.props.getStories()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>stories go here</h1>
      </div>
    )
  }
}

const mapState = state => {
  return {
    stories: state.stories
  }
}

const mapDispatch = dispatch => {
  return {
    getStories: () => dispatch(getCurrentStories())
  }
}

export default connect(
  mapState,
  mapDispatch
)(HackerNews)
