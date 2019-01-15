import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.scss';


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Router>
        <div className="nav_bar">
            <Link className="news" to="News">News</Link>
            <Link className="jobs" to="Jobs">Jobs</Link>
            <Link className="contact" to="Contact">Contact</Link>
        </div>
      </Router>
    )
  }
}

Nav.displayName = Nav

export default Nav

