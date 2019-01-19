import React, { Component } from 'react';
import './index.scss';
//import DatabaseApi from '../../services/dbApi';
import AuthApi from '../../services/authApi'
import LogIn from '../../Components/Log_in';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props){
        super(props);

        this.state={
            loginEmail: '',
            loginPassword: '',
            loginError: ''
        }
    }

    login = async (e, userdata) => {
        e.preventDefault();

       this.setState({loginError: ''});
    
        const { loginEmail, loginPassword } = userdata;
    
        const result = await AuthApi.login(loginEmail, loginPassword);
            console.log("​Signup -> login -> result", result)
    
        if(result === 'auth/wrong-password') {
          this.setState({loginError: 'Usuario y/o contraseña no válidos'})
        } else {
            this.props.history.push('/home');
            console.log('Main --> redirect')
        }
      }
    render() {
        return (
            <div>
                <h1 className="title">
                    Translation auction
                </h1>
                <p>In this App you would be able to show your interest for the translations that we publish, so if you are available and has experience in the field, you would be able to accept the job with a simple click.
                <br/>So please log in and add your details, your language combinations and your rates. <br/>Keep your profile up to date.
                </p>             
                <LogIn submit={this.login}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
  }

export default withRouter(connect(mapStateToProps)(Main));