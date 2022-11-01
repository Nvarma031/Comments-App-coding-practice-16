import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    commentsList: [],
    inputName: '',
    inputComment: '',
  }

  onAddButton = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state

    const newComment = {
      id: uuidv4(),
      inputName,
      inputComment,
      currentTime: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      inputName: '',
      inputComment: '',
      isLiked: false,
    }))
  }

  onInputName = event => {
    this.setState({inputName: event.target.value})
  }

  onInputComment = event => {
    this.setState({inputComment: event.target.value})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const updatedList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: updatedList})
  }

  onToggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {commentsList, inputName, inputComment} = this.state
    const numberOfComments = commentsList.length
    return (
      <div className="comments-bcg-container">
        <div className="add-comment-container">
          <form className="add-comment-card" onSubmit={this.onAddButton}>
            <h1> Comments</h1>
            <p> Say something about 4.0 technologies </p>
            <input
              type="text"
              value={inputName}
              placeholder="Your Name"
              className="name-input"
              onChange={this.onInputName}
            />
            <textarea
              cols="50"
              rows="10"
              value={inputComment}
              placeholder="Your Comment"
              className="comment-input"
              onChange={this.onInputComment}
            />
            <button
              className="add-comment-button"
              type="button"
              onClick={this.onAddButton}
            >
              {' '}
              Add Comment{' '}
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
        </div>
        <hr className="horizontal-line" />

        <ul className="comments-container">
          <div className="no-of-comments-container">
            <p className="number-of-comments"> {numberOfComments} </p>
            <p className="number-of-comments-text"> Comments</p>
          </div>
          {commentsList.map(eachComment => (
            <CommentItem
              eachComment={eachComment}
              deleteComment={this.deleteComment}
              onToggleLike={this.onToggleLike}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
