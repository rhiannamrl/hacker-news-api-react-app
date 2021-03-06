import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing/Landing'
import HackerNews from './HackerNews/HackerNews'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/hacker-news" component={HackerNews} />
        </Switch>
      </div>
    )
  }
}

export default App
