import React from 'react'
import { connect } from 'react-redux'



const Dashboard = ({ tweetIds }) => (
  <div>
    <h1>Your Timeline</h1>
    <ul>
      {tweetIds.map((tweetId) => ( <li key={tweetId}>Tweet ID: {tweetId}</li> ))}
    </ul>
  </div>

)

const mapStateToProps = ({ tweets }) => {
  const tweetIds = Object.keys(tweets)
  return {
    tweetIds
  }
}
export default connect(mapStateToProps)(Dashboard)