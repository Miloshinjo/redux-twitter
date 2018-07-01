import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const LIKE_TWEET = 'LIKE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}

const likeTweet = ({ id, hasLiked, authedUser }) => {
  return {
    type: LIKE_TWEET,
    id,
    hasLiked,
    authedUser
  }
}

export const handleLikeTweet = (likeData) => {
  return (dispatch) => {
    dispatch(likeTweet(likeData))

    return saveLikeToggle(likeData)
      .catch((e) => {
        console.warn('Error in handleLikeTweet: ', e)
        dispatch(likeTweet(likeData))
        alert('There was an error liking the tweet. Try again')
      })
  }
}

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet
  }
}
export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
    .then((tweet) => dispatch(addTweet(tweet)))
    .then(() => dispatch(hideLoading()))
  }
}


