import React, { Component } from 'react';
import './index.scss';
import NewsItem from '../../Components/NewsList/NewsItem';
import {setJobInfo} from '../../redux/actions/jobActions';
import { connect } from 'react-redux';

class HomeUser extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { newJobInfo, reserved, user, booked, job  } = this.props
        console.log('from home_user -->', job, user)
        return (
            <div className="user_home">
                <h1>User Home page</h1>
                <div className="home_news">
                    <h1>NEWS</h1>
                    <NewsItem  key={job.id} newJobInfo={job} reserved={job.reserved} booked={this.makeBook} user={user} />
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
const mapDispatchToProps =(dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo))}}
}
export default connect(null, mapDispatchToProps)(HomeUser);