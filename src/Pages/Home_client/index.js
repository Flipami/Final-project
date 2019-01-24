import React, { Component } from 'react';
import './index.scss';

class HomeAdmin extends Component {
    render() {
        return (
            <div className="user_home">
                <h1>Admin Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                    <p>Aqui veremos las noticias que se han publicado y habrá un botón que nos llevará a la creación de noticias</p>
                </div>
                <div className="home_jobs">
                    <div className="home_done">
                        <h1>JOBS DONE</h1>
                        <p>Aqui veremos los trabajos que ya se han realizados</p>
                    </div>
                    <div className="home_ongoing">
                        <h1>JOBS ONGOING</h1>
                        <p>Aqui veremos los trabajos que están en marcha</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeAdmin;