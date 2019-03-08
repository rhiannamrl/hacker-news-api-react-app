import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import HackerNews from './HackerNews'

class App extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Switch>
          <Route path="/hacker-news" component={HackerNews} />
        </Switch>
      </div>
    )
  }
}

export default App
