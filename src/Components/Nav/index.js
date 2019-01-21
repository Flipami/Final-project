import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './index.scss';
import AuthApi from '../../services/authApi';
import ProfileButton from '../ProfileButton';


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'userData',
    }
  }

  logout = () => {
    const error = AuthApi.logout();

    if(!error){
      console.log("Has salido de la aplicación");
    }
  }

  render() {
    const { user } = this.state
    
    return(
        <React.Fragment>
          {this.props.shouldDisplayNav && <div className="nav_bar">
            <Link className="news" to="/news">News</Link>
            <Link className="jobs" to="/jobs">Jobs</Link>
            <Link className="contact" to="/contact">Contact</Link>
            <ProfileButton />
          </div>}
          {/*user.profile==='admin'&& this.props.shouldDisplayNav && <div className="nav_bar">
            <Link className="news" to="/news">News</Link>
            <Link className="jobs" to="/jobs">Jobs</Link>
            <Link className="contact" to="/notifications">Notifications</Link>
            {user && <a href="/" onClick={this.logout}>Log me out</a>}
    </div>*/}
        </React.Fragment>
    )
  }
}

export default Nav

