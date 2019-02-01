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
        <React.Fragment className="nav">
          {user && <div className="navMenu"><span><i class="fas fa-bars"></i></span></div>}
          {this.props.shouldDisplayNav && user.profile === 'user' && <nav className="nav_bar">
            <ul>
              <li><Link className="news_nav" to="/news"><span><i class="far fa-newspaper"></i></span>News</Link></li>
              <li><Link className="jobs_nav" to="/jobs"><span><i class="fas fa-book-open"></i></span>Jobs</Link></li>
              <li><Link className="contact_nav" to="/contact"><span><i class="fas fa-envelope"></i></span>Contact</Link></li>
              <li><Link className="profile_nav" to="/profile"><span><i class="fas fa-id-card"></i></span>Profile</Link></li>
              <li>{user && <a href="/" onClick={this.logout}><span><i class="fas fa-lock"></i></span>Log me out</a>}</li>
            </ul>
          </nav>}
          {this.props.shouldDisplayNav && user.profile==='admin' && <nav className="nav_bar">
            <ul>
              <li><Link className="news_nav" to="/news"><span><i class="far fa-newspaper"></i></span>News</Link></li>
              <li><Link className="jobs_nav" to="/jobs"><span><i class="fas fa-handshake"></i></span>Jobs</Link></li>
              <li><Link className="notif_nav" to="/notifications"><span><i class="fas fa-inbox"></i></span>Notifications</Link></li>
              <li><Link className="search_nav" to="/search"><span><i class="fas fa-search"></i></span>Search</Link></li>
              <li>{user && <a href="/" onClick={this.logout}><span><i class="fas fa-lock"></i></span>Log me out</a>}</li>
            </ul>
          </nav>}
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



