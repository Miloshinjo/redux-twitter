import { RECEIVE_TWEETS, LIKE_TWEET, ADD_TWEET } from '../actions/tweets'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets
      }
    case LIKE_TWEET :
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes: action.hasLiked === true
            ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
            : state[action.id].likes.concat([action.authedUser])
        }
      }
    case ADD_TWEET :
      return {
        ...state,
        [action.tweet.id]: action.tweet
      }
    default :
      return state
  }
}