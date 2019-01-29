import React, { Component } from 'react';
import './index.scss';


class ContactItem extends Component {

    render() {
        const { newContactInfo } = this.props
        //console.log('contactItem -->', newContactInfo)
        return (
            <div className="contactItem">
                <h1><strong>{newContactInfo.name}</strong></h1> 
                <div className="body">
                    <p>From <strong>{newContactInfo.email}</strong> send you a new message: <br/>"{newContactInfo.message}", 
                    and has left her/his contact <strong>{newContactInfo.phone}</strong>.</p>
                </div>
            </div>
        );
    }
}

export default ContactItem;