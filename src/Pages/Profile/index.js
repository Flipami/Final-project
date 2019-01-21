import React, { Component } from 'react';
import ProfileForm from '../../Components/ProfileForm';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile form</h1>
                <h2>Fill it up</h2>
                <p>You should complete all the information required before you start receiving the information regarding the new jobs, that would be link to your language combinations and to your jobs type profile.</p>
                <ProfileForm />
            </div>
        );
    }
}

export default Profile;