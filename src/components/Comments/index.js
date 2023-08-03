import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachObj => {
        if (eachObj.id === id) {
          return {...eachObj, isLiked: !eachObj.isLiked}
        }
        return eachObj
      }),
    }))
  }

  onDelete = id => {
    const {commentList} = this.state

    const upDatedList = commentList.filter(eachItem => eachItem.id !== id)

    this.setState({commentList: upDatedList})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const letterBgColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      letterBgColor,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state
    const listLength = commentList.length
    return (
      <div className="bg-container">
        <div className="comment-img-container">
          <div>
            <h1 className="title">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.addComment}>
              <input
                className="input"
                placeholder="Your Name"
                onChange={this.getName}
                value={name}
              />
              <textarea
                className="textarea"
                placeholder="Your Comment"
                onChange={this.getComment}
                value={comment}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comment-img"
          />
        </div>

        <hr className="separator" />

        <div className="comment-count-container">
          <p className="comment-count">{listLength}</p>
          <p className="comment-name">Comments</p>
        </div>

        <ul className="list-items-container">
          {commentList.map(eachObj => (
            <CommentItem
              eachObjDetails={eachObj}
              key={eachObj.id}
              toggleIsLiked={this.toggleIsLiked}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
