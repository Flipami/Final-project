import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './index.scss';
import AuthApi from '../../services/authApi';
import { connect } from 'react-redux';


class Nav extends Component {

  logout = () => {
    const error = AuthApi.logout();
    if(!error){
      alert("Has salido de la aplicación");
    }
  }

  render() {
    const { user } = this.props

    return(
        <React.Fragment>
          <div className="menu">
            {this.props.shouldDisplayNav && (user.profile === 'user') && <div className="nav_bar">
              <Link className="offer_nav" to="/offers"><span><i className="fas fa-newspaper"></i></span>Offers</Link>
              <Link className="jobs_nav" to="/jobs"><span><i className="fas fa-book-open"></i></span>Jobs</Link>
              <Link className="contact_nav" to="/contact"><span><i className="fas fa-envelope"></i></span>Contact</Link>
              <Link className="profile_nav" to="/profile"><span><i className="fas fa-id-card"></i></span>Profile</Link>
              {user && <a href="/" className="logout" onClick={this.logout}><span><i className="fas fa-lock"></i></span>Log me out</a>}
            </div>}
            {this.props.shouldDisplayNav && (user.profile ==='admin') && <div className="nav_bar">
              <Link className="offer_nav" to="/offers"><span><i className="far fa-newspaper"></i></span>Offers</Link>
              {/*<Link className="jobs_nav" to="/jobs"><span><i className="fas fa-book-open"></i></span>Jobs</Link>*/}
              <Link className="notif_nav" to="/notifications"><span><i className="fas fa-inbox"></i></span>Notifications</Link>
              <Link className="search_nav" to="/search"><span><i className="fas fa-search"></i></span>Search</Link>
              {/*<Link className="create_nav" to="/create"><span><i className="fas fa-edit"></i></span>New User</Link>*/}
              {user && <a href="/" className="logout" onClick={this.logout}><span><i className="fas fa-lock"></i></span>Log me out</a>}
            </div>}
          </div>
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
