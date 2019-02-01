import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route} from 'react-router-dom';


class PrivateRouteHome extends Component {
  render() {
    const { user, componentAdmin, componentUser } = this.props;
    const ComponentUser = componentUser;
    const ComponentAdmin = componentAdmin;
    
    return (
      <Route render={(props) => (
        user ? 
          (user.profile === "admin" ? <ComponentAdmin {...this.props} /> : <ComponentUser {...this.props} />): 
          <div>Necesita estar autenticado para ver esta página</div>
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