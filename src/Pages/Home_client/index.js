import React, { Component } from 'react';
import './index.scss';


class HomeAdmin extends Component {
    render() {

        return (
            <div className="admin_home">
                <h1>Admin Home page</h1>
                <div className="home-container">
                <div className="home_offers">
                    <h1>OFFERS</h1>
                    <p>In the section <strong>Offers</strong> you´ll see all the jobs that had been publish in the last month. We could see the ones that had been booked already and those that are still pending.
                    <br/>If the job has been booked you´ll be able to see and download the original document that need to be translated.</p>
                </div>
                <div className="home_notif">
                    <h1>NOTIFICATIONS</h1>
                    <p>In <strong>Notifications</strong> you´ll see the contact form that you have received during the last month and we need to implement a way to discharged those queries that had been answered yet.</p>
                </div>
                <div className="home_search">
                    <h1>SEARCH</h1>
                    <p>Section <strong>Search</strong> is under construction, but would allow you to search the jobs assigned to a translator, the jobs that should be delivered today and some other usefull data.</p>
                </div>
                </div>
            </div>
        );
    }
}

export default HomeAdmin;