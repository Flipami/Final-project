import React, { Component } from 'react';
import DatabaseApi from '../../servicies/dbApi';
import Nav from '../../Components/Nav';
import LogIn from '../../Components/Log_in'

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        DatabaseApi.getContent();
    }
    render() {
        return (
            <div>
                <Nav />
                <h3> Esta será la página que se vea cuando se cargué mi página.</h3>
                <LogIn />
            </div>
        );
    }
}

export default Main;