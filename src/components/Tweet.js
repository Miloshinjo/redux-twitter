import React from 'react'
import { connect } from 'react-redux'

const Tweet = ({ author, text, avatarURL, timestamp, replyingTo }) => (
  <div className='tweet'>
    <img src={avatarURL} alt={`Avatar for ${author}`} />
    <h3 className='tweet__author'>{author}</h3>
    <h4 className='tweet__timestamp'>{timestamp}</h4>
    {replyingTo
      ? <div className='tweet__replyingTo'>Replying to: @{replyingTo}</div>
      : null}
  </div>
)

const mapStateToProps = ({ tweets, users }, { id }) => {
  const text = tweets[id].text
  const timestamp = tweets[id].timestamp
  const author = tweets[id].author
  const avatarURL = users[author].avatarURL
  const replyingTo = tweets[id].replyingTo
  return {
    author,
    text,
    timestamp,
    avatarURL,
    replyingTo
  }
}

export default connect(mapStateToProps)(Tweet)
