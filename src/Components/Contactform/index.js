import React, { Component } from 'react';
import './index.scss';


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="contact_form">
         <form>
            <input type="text" id="name" name="name" placeholder="Name" required/>
            <input type="text" id="surname" name="surname" placeholder="Surname" required/>
            <input type="mail" id="mail" name="mail" placeholder="Mail" required/>
            <input type="text" id="phone" name="phone" placeholder="Contact phone if you would like to be contacted by phone"/>

            <textarea id="message" name="message" placeholder="Write your message here..." required></textarea>

            <button className="submit_contact" type="submit" value="Submit">Submit</button>
          </form>
      </div>
    )
  }
}

ContactForm.displayName = ContactForm

ContactForm.propTypes = {}

ContactForm.contextTypes = {}

export default ContactForm
