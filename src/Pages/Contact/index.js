import React, { Component } from 'react';
import './index.scss';
import ContactForm from '../../Components/ContactList/ContactForm';

class Contact extends Component {
    
    render() {
        return (
            <div className="contactPage">
                <h1>Contact Page</h1>
                <ContactForm />
            </div>
        );
    }
}

export default Contact;