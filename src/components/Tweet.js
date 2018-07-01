import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { handleLikeTweet } from '../actions/tweets'
import ArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import HeartOutline from 'react-icons/lib/ti/heart-outline'
import HeartFullOutline from 'react-icons/lib/ti/heart-full-outline'

const Tweet = ({
  author,
  text,
  avatarURL,
  date,
  originalAuthor,
  hasLiked,
  numberOfLikes,
  numberOfReplies,
  authedUser,
  id,
  dispatch
}) => {
  const likeTweet = () => dispatch(handleLikeTweet({ id, hasLiked, authedUser} ))
  return (
    <div className='tweet'>
      <div className='tweet__left'>
        <img className='tweet__avatar' src={avatarURL} alt={`Avatar for ${author}`} />
      </div>
      <div className='tweet__right'>
        <h3 className='tweet__author'>{author}</h3>
        <h4 className='tweet__date'>{date}</h4>
        {originalAuthor
          ? <div className='tweet__original-author'>Replying to: @{originalAuthor}</div>
          : null}
        <p className='tweet__text'>{text}</p>
        <div className='tweet__icons'>
          <ArrowBackOutline className='tweet__icon'/>
          <span className='tweet__num-likes'>{numberOfReplies > 0 && numberOfReplies}</span>
          {hasLiked
            ? <HeartFullOutline onClick={likeTweet} className='tweet__icon' style={{color: 'red'}}/>
            : <HeartOutline  onClick={likeTweet} className='tweet__icon'/>}
          <span className='tweet__num-likes'>{numberOfLikes > 0 && numberOfLikes}</span>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ tweets, users, authedUser }, { id }) => {
  const text = tweets[id].text
  const date = moment(tweets[id].timestamp).format("HH:mm | M/D/YYYY")
  const author = users[tweets[id].author].name
  const avatarURL = users[tweets[id].author].avatarURL
  const replyingToTweetId = tweets[id].replyingTo
  const originalAuthor = replyingToTweetId ? tweets[replyingToTweetId].author : null
  const hasLiked = tweets[id].likes.includes(authedUser)
  const numberOfLikes = tweets[id].likes.length
  const numberOfReplies = tweets[id].replies.length

  return {
    author,
    text,
    date,
    avatarURL,
    originalAuthor,
    hasLiked,
    numberOfLikes,
    numberOfReplies,
    authedUser
  }
}

export default connect(mapStateToProps)(Tweet)
