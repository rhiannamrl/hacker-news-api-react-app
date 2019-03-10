import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import HackerNews from './HackerNews/HackerNews'
import Bookmarks from './HackerNews/Bookmarks'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/hacker-news" component={HackerNews} />
          <Route path="/bookmarks" component={Bookmarks} />
        </Switch>
      </div>
    )
  }
}

export default App
