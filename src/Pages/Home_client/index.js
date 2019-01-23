import React, { Component } from 'react';
import './index.scss';

class HomeAdmin extends Component {
    render() {
        return (
            <div className="user_home">
                <h1>User Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                    <p>Aqui veremos las noticias</p>
                </div>
                <div className="home_jobs">
                    <div className="home_done">
                        <h1>JOBS DONE</h1>
                        <p>Aqui veremos los trabajos que ya he realizados</p>
                    </div>
                    <div className="home_ongoing">
                        <h1>JOBS ONGOING</h1>
                        <p>Aqui veremos los trabajos que tengo en curso</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeAdmin;