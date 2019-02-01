import React, { Component } from 'react';
import './index.scss';
//import NewsItem from '../../Components/NewsList/NewsItem';
import {setJobInfo} from '../../redux/actions/jobActions';
import { connect } from 'react-redux';

class HomeUser extends Component {

    render() {
        const { job } = this.props
        console.log('from home_user -->', job)
        return (
            <div className="admin_home">
                <h1>Your Home page</h1>
                <div className="home-container">
                <div className="home_offers">
                    <h1>OFFERS</h1>
                    <p>In the section <strong>Offers</strong> you´ll see all the jobs that had been publish in the last month. We could see the ones that had been booked already and those that are still pending.
                    <br/>If the job has been booked you´ll be able to see and download the original document that need to be translated.
                    <br/>If you see available the "Book" button, you could get the job if it fits you.</p>
                </div>
                <div className="home_jobs">
                    <h1>JOBS</h1>
                    <p>In <strong>Jobs</strong> section you´d find the jobs that you had booked in the last month, and you are able to upload your translated file with the link in the jobs that you have assingned.
                    <br/>You´ll see the title Done if the delivery date is earlier than today´s date, and Ongoing in the rest of the jobs.</p>
                </div>
                <div className="home_contact">
                    <h1>CONTACT</h1>
                    <p>Section <strong>Contact</strong> is for you to contact us anytime, and check any doubt that you might have.</p>
                </div>
                <div className="home_profile">
                    <h1>PROFILE</h1>
                    <p>In section <strong>Profile</strong> you could keep your personal information and your skills up to date, even upload your CV for your convenience.</p>
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