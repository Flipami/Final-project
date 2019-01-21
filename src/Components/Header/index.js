import React, {Component} from 'react'
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
      console.log("You have successfully log out from your account!");
    }
  }

  render() {
    const { user } = this.state

    return(
      <header className="header">
        <div className="logo">
          <img src={require('./mylogo.gif')} className="logo" alt="logo" />
        </div>
        <Nav shouldDisplayNav={this.props.displayNav} />
        {user && <a href="/" onClick={this.logout}>Log me out</a>}
      </header>
    )
  }
}

export default Header

