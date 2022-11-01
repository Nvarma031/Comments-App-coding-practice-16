import './index.css'

const CommentItem = props => {
  const {eachComment, deleteComment, onToggleLike} = props
  const {inputName, inputComment, currentTime, id, isLiked} = eachComment

  const onDeleteComment = () => {
    deleteComment(id)
  }

  const onLikeClick = () => {
    onToggleLike(id)
  }

  return (
    <li className="each-comments-container">
      <div className="each-comment-card">
        <div className="profile-pic">
          <p> {inputName[0].toUpperCase()} </p>
        </div>
        <div className="name-comment-time-container">
          <div className="name-time-container">
            <p className="comment-name"> {inputName} </p>
            <p className="comment-time"> {currentTime} </p>
          </div>
          <label className="comment-text"> {inputComment} </label>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          {!isLiked ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="like-image"
              onClick={onLikeClick}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              className="like-image"
              alt="liked"
              onClick={onLikeClick}
            />
          )}

          {isLiked ? (
            <button
              type="button"
              className="like-liked-button"
              onClick={onLikeClick}
            >
              {' '}
              Liked{' '}
            </button>
          ) : (
            <button
              type="button"
              className="like-liked-button"
              onClick={onLikeClick}
            >
              {' '}
              Like{' '}
            </button>
          )}
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
          className="delete-image"
          onClick={onDeleteComment}
          testid="delete"
        />
      </div>
      <hr className="horizontal-line-comment" />
    </li>
  )
}

export default CommentItem
