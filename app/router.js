import Constants from './util/constants'
import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { latestVideos } from './videos/actions'

//  Layouts
import MainLayout from './components/main.layout'

//  Pages
import Home from './components/Home/home'
import How from './components/How/how'
import Upload from './components/Upload/upload'
import Watch from './components/Watch/watch'
import Search from './components/Search/result'
import Profile from './components/Profile/profile'

function getLatestVideos (store) {
  store.dispatch(latestVideos())
}

export default (store) => {
  return (
    <Router history={browserHistory}>
      <Route path={`/${Constants.APP_ID}`} component={MainLayout}>
        <IndexRoute component={Home} onEnter={getLatestVideos(store)} />
        <Route path="/upload" component={Upload} />
        <Route path="/how" component={How} />
        <Route path="/watch/:json/:torrentID" component={Watch} />
        <Route path="/search" component={Search} />
        <Route path="/profile/:zeroID" component={Profile} />
        <Route from="*" to="{`/${Constants.APP_ID}`}" />
      </Route>
    </Router>
  )
}
