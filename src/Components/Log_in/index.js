import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.scss';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state ={
            loginEmail: ' ',
            loginPassword: ' ',
        }
    }
    
    handleUserInput (e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }
      resetInput = () => {
        this.setState({ name: '' });
      }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <form className="login_form" onSubmit={(event) => this.props.submitEvent(event, this.state)}>
                        <img src={require('./login.png')} className="login_pic" alt="login"/> 
                        <h1>Login here</h1>
                        <input 
                            name="loginEmail"
                            type="email" 
                            className="loginEmail" 
                            placeholder="Email address"
                            value={email}
                            onChange={(event) => this.handleUserInput(event)}/>
                        
                        <input 
                            name="loginPassword"
                            type="password" 
                            className="loginPassword"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => this.handleUserInput(event)}/>
                       
                        <button type="submit" className="submit_login" onClick={this.resetInput}>Log in</button>
                        
                        <Link to="/contact" className="login-link">Lost your password</Link>
                </form>
            </div>
        );
    }
}

export default LogIn;