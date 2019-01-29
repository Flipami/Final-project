import React, { Component } from 'react';
import './index.scss';
import NewsItem from '../../Components/NewsList/NewsItem';

class HomeUser extends Component {

    render() {
        const { user, job  } = this.props
        console.log('from home_user -->', job, user)
        return (
            <div className="user_home">
                <h1>User Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                   {/*<NewsItem />*/}
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