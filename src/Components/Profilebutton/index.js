import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Profilebutton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div>
        Hello world from Profilebutton
      </div>
    )
  }
}

Profilebutton.displayName = Profilebutton

Profilebutton.propTypes = {}

Profilebutton.contextTypes = {}

export default Profilebutton

