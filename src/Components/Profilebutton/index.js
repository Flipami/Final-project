import React, {Component} from 'react';
import './index.scss';


class ProfileButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div>
        Profile
        <img src={require('./login.png')} className="profile_img" alt="ProfileButton" />
      </div>
    )
  }
}

ProfileButton.displayName = ProfileButton

export default ProfileButton

