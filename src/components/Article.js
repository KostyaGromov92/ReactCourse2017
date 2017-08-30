import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends PureComponent {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  state = {
    updateIndex: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isOpen !== this.props.isOpen;
  }

  render() {
    const {article, isOpen, toggleOpen} = this.props;
    return (
        <div ref = {this.setContainerRef}>
          <h3>{article.title}</h3>
          <button onClick={toggleOpen}>
            {isOpen ? 'close' : 'Open'}
          </button>
          {this.getBody()}
        </div>
    )
  }

  setContainerRef = ref => {
    //this.container = ref;
    console.log('-----', ref);
  };

  componentDidMount() {
    console.log("-----", 'mounted');
  }

  getBody () {
    const {article, isOpen} = this.props;
    if (isOpen)
      return null;
    return (
      <section>
        {article.text}
        <button onClick={() => this.setState({updateIndex: this.state.updateIndex +1})}>Click update</button>
        <CommentList comments = {article.comments} ref={this.setCommentsRef} key={this.state.updateIndex} />
      </section>
    )
  }
  setCommentsRef = ref => {
    console.log('-----', ref);
  }
}

export default Article