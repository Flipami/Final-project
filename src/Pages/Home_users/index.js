import React, { Component } from 'react';
import './index.scss';

class HomeUser extends Component {
    render() {
        return (
            <div className="user_home">
                <h1>User Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                    <p>Aqui veremos las noticias que se han publicado</p>
                </div>
                <div className="home_jobs">
                    <div className="home_done">
                        <h1>JOBS DONE</h1>
                        <p>Aqui veras los trabajos que has realizado</p>
                    </div>
                    <div className="home_ongoing">
                        <h1>JOBS ONGOING</h1>
                        <p>Aqui se veran los trabajos que tienes en curso</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeUser;