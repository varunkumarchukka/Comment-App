// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachObjDetails, toggleIsLiked, onDelete} = props
  const {name, comment, id, isLiked, letterBgColor} = eachObjDetails
  const letter = name.slice(0, 1)
  const time = formatDistanceToNow(new Date())

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const changeLikeImg = () => {
    toggleIsLiked(id)
  }

  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="comment-container">
        <p className={`${letterBgColor} letter`}>{letter}</p>
        <div>
          <div className="time-name-container">
            <p className="name">{name}</p>
            <p className="time">{time}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={likeImgUrl} alt="like" className="like-img" />
          <button className="like-button" onClick={changeLikeImg} type="button">
            Like
          </button>
        </div>

        <button
          data-testId="delete"
          type="button"
          className="delete-btn"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
      <hr className="comment-separator" />
    </li>
  )
}

export default CommentItem
