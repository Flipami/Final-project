import React, {Component} from 'react'
import './index.scss';
import Nav from '../Nav';


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <header className="Header">
        <div className="logo">Logo</div>
        <h1 className="title">
          Translation auction
        </h1>
        <Nav />
      </header>
    )
  }
}

//<img src={logo} className="logo" alt="logo" />
Header.displayName = Header

export default Header

