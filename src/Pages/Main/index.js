import React, { Component } from 'react';
import './index.scss';
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

        this.allowRedirect = true;
    }

    componentDidMount(){
        AuthApi.registerAuthObserver(async (user) => {
            if (user && this.allowRedirect) {
                this.allowRedirect = false;
                this.props.history.push('/home');
            }
        });
    }

    async login(e, userdata){
        e.preventDefault();

       this.setState({loginError: ''});
    
        const { loginEmail, loginPassword } = userdata;
        const result = await AuthApi.login(loginEmail, loginPassword);
            console.log("​Signup -> login -> result", result)
    
        if(result === 'auth/wrong-password') {
          this.setState({loginError: 'Usuario y/o contraseña no válidos'})
        } 
      }
    render() {

        return (
            <div className="main">
                <h1 className="title">
                    Translation Jobs
                </h1>
                <p>In this App you would be able to show your interest for the translations that we publish, so if you are available and has experience in the field, you would be able to accept the job with a simple click.
                <br/>So please log in and add your details, your language combinations and your rates. <br/>Keep your profile up to date.
                </p>             
                <LogIn submitEvent={this.login.bind(this)}/>
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