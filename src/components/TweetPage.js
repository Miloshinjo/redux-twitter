import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import NewTweet from './NewTweet'


const TweetPage = (props) => (
  <div className='tweet-page'>
    <Tweet id={props.match.params.id}/>
    <NewTweet replyingTo={props.match.params.id}/>
    {props.replies.map((reply) => <Tweet key={reply} id={reply} />)}
  </div>
)

const mapStateToProps = ({ tweets }, props) => {
  return {
    replies: tweets[props.match.params.id].replies
  }
}
export default connect(mapStateToProps)(TweetPage)