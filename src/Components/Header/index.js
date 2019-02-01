import React, {Component} from 'react';
import './index.scss';
import AuthApi from '../../services/authApi'
import Nav from '../Nav';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      user:'userData'
    }
  }

  logout = () => {
    const error = AuthApi.logout();

    if(!error){
      alert("There is an error in the log out process!");
    }
  }

  render() {

    return(
      <header className="header">
        {/*<img src={require('./mylogo.gif')} className="logo" alt="logo" />*/}
        <Nav shouldDisplayNav={this.props.displayNav} />
      </header>
    )
  }
}

export default Header

