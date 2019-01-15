import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PropTypes from 'prop-types'


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Router>
        <div className='Nav_bar'>
          <Link className="News" to="News">News</Link>
          <Link className="Jobs" to="Jobs">Jobs</Link>
        </div>
      </Router>
    )
  }
}

Nav.displayName = Nav

Nav.propTypes = {}

Nav.contextTypes = {}

export default Nav

