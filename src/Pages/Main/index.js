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
                <h1 className="title">
                    Translation auction
                </h1>
                <p>In this App you would be able to show your interest for the translations that we publish, so if you are available and has experience in the field, you would be able to accept the job with a simple click.
                <br/>So please log in and add your details, your language combinations and your rates. <br />Keep your profile up to date.
                </p>             
                {/*<LogIn />*/}
            </div>
        );
    }
}

export default Main;