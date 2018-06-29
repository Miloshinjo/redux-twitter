import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'



const Dashboard = ({ tweetIds }) => (
  <div className='dashboard'>
    <h1 className='dashboard__title'>Your Timeline</h1>
    <ul className='dashboard__tweets'>
      {tweetIds.map((tweetId) => ( <li key={tweetId}><Tweet id={tweetId}/></li> ))}
    </ul>
  </div>

)

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}
export default connect(mapStateToProps)(Dashboard)