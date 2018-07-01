import React from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends React.Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({ text }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddTweet(this.state.text, this.props.replyingTo))

    // history.push to '/'
  }
  render() {
    return (
      <form className='new-tweet' onSubmit={this.handleSubmit}>
        <h2 className='page-title'>Compose new Tweet</h2>
        <textarea
          className='new-tweet__text'
          placeholder="What's happening?"
          onChange={this.handleChange}
        />
        <button className='new-tweet__btn'>Submit</button>
      </form>
    )
  }
}


  export default connect()(NewTweet)

