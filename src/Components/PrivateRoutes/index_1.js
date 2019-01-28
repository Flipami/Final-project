import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import HomeUser from '../../Pages/Home_users';


class PrivateRouteHome extends Component {
  render() {
    const { user, componentAdmin, componentUser } = this.props;
    const ComponentUser = componentUser;
    const ComponentAdmin = componentAdmin;

    return (
      <Route render={(props) => (
        user ? 
          (user.profile === "admin" ? <ComponentAdmin {...this.props} /> : <ComponentUser {...this.props} />): 
          <Redirect to='/home_user' component={HomeUser} />
      )} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps)(PrivateRouteHome);

/*const {
    authenticated,
  } = this.state
  
  const public = (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  )
  const private = (
    <Switch>
      <Route exact path='/invoices' component={Invoices} />
    </Switch>
  )
  
  return (authenticated) ? private : public*/