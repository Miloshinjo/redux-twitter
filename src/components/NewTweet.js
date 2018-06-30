import React from 'react'

class NewTweet extends React.Component {
  render() {
    return (
      <form className='new-tweet'>
        <h2 className='page-title'>Compose new Tweet</h2>
        <textarea
          className='new-tweet__text'
          placeholder="What's happening?"
        />
        <button className='new-tweet__btn'>Submit</button>
      </form>
    )
  }
}


  export default NewTweet

