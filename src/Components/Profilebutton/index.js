import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import Profile from '../../Pages/Profile';



class ProfileButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="profile">
        <Link to="/" component={Profile}>
        <img src={require('./login.png')} className="profile_img" alt="ProfileButton" />
        </Link>
      </div>
    )
  }
}

export default ProfileButton

