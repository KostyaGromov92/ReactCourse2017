import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ArticlesChart extends Component {
  static propsType = {

  };

  componentDidMount() {
    //external library works with this.ref.container
  }

  componentWillReceiveProps(nextProps) {
    //update container
  }

  render() {
    return (
        <div ref="container">

        </div>
    )
  }

  componentWillMount() {
    //do some cleanup
  }

}

export default ArticlesChart