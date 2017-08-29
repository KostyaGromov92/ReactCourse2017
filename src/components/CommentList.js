import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {

  static defaulProps = {
    comments : []
  };

  state = {
    isOpen : false
  };

  render () {
    const text = this.state.isOpen ? 'hide comments' : 'show comments';
    return (
      <div>
        <button onClick={this.props.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    );
  }

  getBody() {
    const {comments, isOpen} = this.props;
    if(!isOpen) {
      return null;
    }
    if(!comments) return <p>No comments</p>;

    return(
        <ul>
          {comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    )
  }
}

export default toggleOpen(CommentList)