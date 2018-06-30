import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Dashboard from './Dashboard'
import NewTweet from './NewTweet'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar />
        {
          this.props.loading
          ? null
          : <NewTweet />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: !authedUser
  }
}

export default connect(mapStateToProps)(App)