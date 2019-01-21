import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthApi from '../../services/authApi';
import DatabaseApi from '../../services/dbApi'
import './index.scss';
import Header from '../Header'
import Main from '../../Pages/Main';
import HomeUser from '../../Pages/Home_users';
import HomeClient from '../../Pages/Home_client';
import News from '../../Pages/News';
import Jobs from '../../Pages/Jobs';
import Profile from '../../Pages/Profile';
import Search_client from '../../Pages/Search_client';
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
      console.log("​App -> componentDidMount -> user", user)
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

    const { user, loading } = this.state;
    console.log('user -->', user)

    if(loading) return <div>Loading</div>;

    return (
      <Router>
      <div className="App">
          <Header displayNav={user!== null} />
            <Switch>
              <Route exact path='/' component={Main}/>
              {user && user.profile==='user' && <Route exact path="/home" component={HomeUser}/>}
              {user && user.profile==='user' && <Route exact path="/news" component={News}/>}
              {user && user.profile==='user' && <Route exact path="/jobs" component={Jobs}/>}
              {user && user.profile==='user' && <Route exact path="/profile" component={Profile}/>}
              {user && user.profile==='admin' && <Route exact path="/home" component={HomeClient}/>}
              {user && user.profile==='admin' && <Route exact path="/news" component={News}/>}
              {user && user.profile==='admin' && <Route exact path="/jobs" component={Jobs}/>}
              {user && user.profile==='admin' && <Route exact path="/search" component={Search_client}/>}
              <Redirect to='/'/>
            </Switch>
        </div>
      </Router>
    );
  }
}
const mapDispatchToProps =(dispatch) => {
  return { setUser: (userInfo) => { dispatch(setUserInfo(userInfo))}}
}


export default connect(null, mapDispatchToProps)(App);
