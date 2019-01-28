import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './index.scss';
import AuthApi from '../../services/authApi';
import { connect } from 'react-redux';


class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  logout = () => {
    const error = AuthApi.logout();

    if(!error){
      console.log("Has salido de la aplicación");
    }
  }

  render() {
    const { user } = this.props
    return(
        <React.Fragment>
          {this.props.shouldDisplayNav && user.profile === 'user'  && <div className="nav_bar">
            <Link className="news_nav" to="/news">News</Link>
            <Link className="jobs_nav" to="/jobs">Jobs</Link>
            <Link className="contact_nav" to="/contact">Contact</Link>
            <Link className="profile_nav" to="/profile">Profile</Link>
            {user && <a href="/" onClick={this.logout}>Log me out</a>}
          </div>}
          {this.props.shouldDisplayNav && user.profile==='admin' && <div className="nav_bar">
            <Link className="news_nav" to="/news">News</Link>
            <Link className="jobs_nav" to="/jobs">Jobs</Link>
            <Link className="notif_nav" to="/notifications">Notifications</Link>
            <Link className="search_nav" to="/search">Search</Link>
            {user && <a href="/" onClick={this.logout}>Log me out</a>}
          </div>}
        </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(Nav);



