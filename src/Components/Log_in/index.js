import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

class LogIn extends Component {
    constructor(props){
        super(props);
       /* state ={
            email:'',
            password:'',
        }*/
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      }

    render() {
        //const { email, password } = this.state;

        return (
            {/*<form className="login_form">
                <img src={Login.png} className="login_pic"/>
                <h1>Login here</h1>
                <div className="login_box">
                    <label htmlFor="email">Email address</label>
                    <input 
                    type="email" 
                    name="email" 
                    className="userName" 
                    placeholder="@UserName"
                    value={email}
                    onChange={(event) => this.handleUserInput(event)}>
                </div>
                <div className="login_box">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    className="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(event) => this.handleUserInput(event)}>
                </div>
                <button type=”submit” className="submit">Sign up</button>
                <Link className="contact" to="Contact">Lost your password</Link>
        </form>*/}
        );
    }
}

export default LogIn;