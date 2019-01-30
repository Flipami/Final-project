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
            <Link className="news_nav" to="/news"><span><i class="fas fa-newspaper"></i></span>News</Link>
            <Link className="jobs_nav" to="/jobs"><span><i class="fas fa-book-open"></i></span>Jobs</Link>
            <Link className="contact_nav" to="/contact"><span><i class="fas fa-envelope"></i></span>Contact</Link>
            <Link className="profile_nav" to="/profile"><span><i class="fas fa-id-card"></i></span>Profile</Link>
            {user && <a href="/" onClick={this.logout}><span><i class="fas fa-lock"></i></span>Log me out</a>}
          </div>}
          {this.props.shouldDisplayNav && user.profile==='admin' && <div className="nav_bar">
            <Link className="news_nav" to="/news"><span><i class="far fa-newspaper"></i></span>News</Link>
            <Link className="jobs_nav" to="/jobs"><span><i class="fas fa-book-open"></i></span>Jobs</Link>
            <Link className="notif_nav" to="/notifications"><span><i class="fas fa-inbox"></i></span>Notifications</Link>
            <Link className="search_nav" to="/search"><span><i class="fas fa-search"></i></span>Search</Link>
            <Link className="create_nav" to="/create"><span><i class="fas fa-edit"></i></span>New User</Link>
            {user && <a href="/" onClick={this.logout}><span><i class="fas fa-lock"></i></span>Log me out</a>}
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
