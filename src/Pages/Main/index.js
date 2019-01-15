import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../servicies/dbApi';
import LogIn from '../../Components/Log_in';


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
                <h3> Esta será la página que se vea cuando se cargué mi página.</h3>
                <LogIn />
            </div>
        );
    }
}

export default Main;