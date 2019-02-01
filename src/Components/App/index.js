import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthApi from '../../services/authApi';
import DatabaseApi from '../../services/dbApi';
import './index.scss';
import Header from '../Header';
import Loading from '../Loading';
import PrivateRoute from '../PrivateRoutes';
import Footer from '../Footer';
import Main from '../../Pages/Main';
import HomeUser from '../../Pages/Home_users';
import HomeAdmin from '../../Pages/Home_client';
import NewsUsers from '../../Pages/NewsUsers';
import NewsClient from '../../Pages/NewsClient';
//import CreateNewUsers from '../../Pages/CreateNewUser';
import Jobs from '../../Pages/Jobs';
import Contact from '../../Pages/Contact';
import Profile from '../../Pages/Profile';
import Search from '../../Pages/Search_client';
import Notifications from '../../Pages/Notifications';
import {setUserInfo} from '../../redux/actions/userActions';
import { connect } from 'react-redux';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: null,
      loading: true,
    }
  }

  componentDidMount(){
    AuthApi.registerAuthObserver(async (user) => {
      let userData = null;
      if (user) {
        userData = await DatabaseApi.getDocumentById('users', user.uid);
        if(!userData){ 
          console.log("CUIDADO!! algo raro ha pasado con el usuario!!");
        }
      } 

      this.props.setUser(userData);
      this.setState({user:userData, loading: false});
    });
  }

  render() {

    const { user, loading } = this.state
   

    return (
      <Router>
      <div className="App">
          {loading ? <Loading/> : ''}
          <Header displayNav={user!== null} />
            <Switch>
              <Route exact path='/' component={Main}/>
              <PrivateRoute exact path="/home" componentAdmin={HomeAdmin} componentUser={HomeUser}/>}
              <PrivateRoute exact path="/offers" componentAdmin={NewsClient} componentUser={NewsUsers}/>}
              <PrivateRoute exact path="/jobs" /*componentAdmin={Jobs}*/ componentUser={Jobs}/>}
              <PrivateRoute exact path="/profile" componentUser={Profile}/>}
              <PrivateRoute exact path="/contact" componentUser={Contact}/>}
              <PrivateRoute exact path="/notifications" componentAdmin={Notifications} />}
              <PrivateRoute exact path="/search" componentAdmin={Search}/>
              {/*<PrivateRoute exact path="/create" componentAdmin={CreateNewUsers}/>*/}
              <Redirect to='/'/>
            </Switch>
            <Footer/>
        </div>
      </Router>
      
    );
  }
}
const mapDispatchToProps =(dispatch) => {
  return { setUser: (userInfo) => { dispatch(setUserInfo(userInfo))}}
}

export default connect(null, mapDispatchToProps)(App);