import React, { Component } from 'react';
import './index.scss';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={require('./pencil.gif')} className="loading" alt="loading" /> 
            </div>
        );
    }
}

export default Loading;