import React, {Component} from 'react'
import { BrowserRouter as Link } from "react-router-dom";
import './index.scss';


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
        <React.Fragment>
          {this.props.shouldDisplayNav && <div className="nav_bar">
            <Link className="news" to="/news"><span>News</span></Link>
            <Link className="jobs" to="/jobs"><span>Jobs</span></Link>
            <Link className="contact" to="/contact"><span>Contact</span></Link>
          </div>}
        </React.Fragment>
    )
  }
}

export default Nav

