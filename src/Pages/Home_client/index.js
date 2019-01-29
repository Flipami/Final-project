import React, { Component } from 'react';
import './index.scss';
import NewsItem from '../../Components/NewsList/NewsItem';

class HomeAdmin extends Component {
    render() {
        const { user, job  } = this.props
        console.log('from home_client -->', job, user)
        return (
            <div className="user_home">
                <h1>Admin Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                    {/*<NewsItem />*/}
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