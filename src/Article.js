import React, {Component} from 'react'

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen : false
    }

  }
  render() {
    return (
        <div>
          <h3>{article.title}</h3>
          <button onClick={this.toggleOpen}>Open</button>
          {this.getBody()}
        </div>
    )
  }

  getBody () {
    if (!this.state.isOpen) return null
    const {article} = this.props;
    return <section>{article.text}</section>;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}
