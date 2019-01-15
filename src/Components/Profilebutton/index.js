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
        Hello world from ProfileButton
      </div>
    )
  }
}

ProfileButton.displayName = ProfileButton

export default ProfileButton

