import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state ={
            loginEmail: ' ',
            loginPassword: ' ',
        }
    }

    

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <Link to="/contact"><span>Lost your password</span></Link>
                <form className="login_form" onSubmit={(event) => this.props.submit(event, this.state)}>
                        <img src={require('./login.png')} className="login_pic"/>
                        <h1>Login here</h1>
                        <div className="login_box">
                            <label htmlFor="email">Email address</label>
                            <input 
                            name="loginEmail"
                            type="email" 
                            className="userName" 
                            placeholder="@UserName"
                            value={email}
                            onChange={(event) => this.handleUserInput(event)}/>
                        </div>
                        <div className="login_box">
                            <label /*htmlFor="password"*/>Password</label>
                            <input 
                            name="loginPassword"
                            type="password" 
                            className="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(event) => this.handleUserInput(event)}/>
                        </div>
                        <button type="submit" className="submit">Log in</button>
                </form>
            </div>
        );
    }
}

export default LogIn;