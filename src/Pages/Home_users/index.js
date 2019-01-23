import React, { Component } from 'react';
import './index.scss';

class HomeUser extends Component {
    render() {
        return (
            <div className="user_home">
                <h1>Admin Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                    <p>Aqui veremos las noticias y dispondremos de un botón que nos permita crear noticias nuevas</p>
                </div>
                <div className="home_jobs">
                    <div className="home_done">
                        <h1>JOBS DONE</h1>
                        <p>Aqui veremos los trabajos realizados</p>
                    </div>
                    <div className="home_ongoing">
                        <h1>JOBS ONGOING</h1>
                        <p>Aqui veremos los trabajos en curso</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeUser;