import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class LogIn extends Component {
    constructor(props){
        super(props);
        state={
            email:'',
            password:'',
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

            <div className="login_box">
                <img src={Login.png} className="login_pic"/>
                <h1>Login here</h1>
                <p>Enter your username</p>
                <input 
                type="email" 
                name="" 
                className="userName" 
                placeholder="@UserName"
                value={email}
                onChange={(event) => this.handleUserInput(event)}>
                <p>Enter your password</p>
                <input 
                type="password" 
                name="" 
                className="password" 
                placeholder="Password"
                value={password}
                onChange={(event) => this.handleUserInput(event)}>
                <button type="submit" className="LogIn">Log In"</button>
                <Link className="contact" to="Contact">Lost your password</Link>
            </div>
        );
    }
}

export default LogIn;