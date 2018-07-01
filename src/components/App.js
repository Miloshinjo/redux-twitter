import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Dashboard from './Dashboard'
import NavBar from './NavBar'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <NavBar />
          {
            this.props.loading
            ? null
            : <div>
                <Route exact path='/' component={Dashboard} />
                <Route path='/new' component={NewTweet} />
                <Route path='/tweet/:id' component={TweetPage} />
              </div>
          }
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: !authedUser
  }
}

export default connect(mapStateToProps)(App)