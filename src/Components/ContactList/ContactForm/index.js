import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../../services/dbApi';


class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  sendContact = (e) =>{
    e.preventDefault();
    const { name, surname, email, phone, message } = this.state;

    const success = DatabaseApi.addDocument('contacts', {name, surname, email, phone, message});
    success && this.resetInput()
    success && alert('The info had been save correctly');
  }

  resetInput = () => {
    this.setState({ name: '',
    surname: '',
    email: '',
    phone: '',
    message: ''});
  } 

  render() {
    const { name, surname, email, phone, message } = this.state;
    return(
      <div className="contact_form">
         <form className="contact_form" onSubmit={this.sendContact}>
            <input type="text" 
              value={name} 
              onChange={(e) => this.setState({name:e.target.value})} 
              placeholder="Name" 
              required/>
            <input type="text" 
              value={surname} 
              onChange={(e) => this.setState({surname:e.target.value})} 
              placeholder="Surname" 
              required/>
            <input type="email" 
              value={email} 
              onChange={(e) => this.setState({email:e.target.value})} 
              placeholder="Email" 
              required/>
            <input type="text" 
              value={phone} 
              onChange={(e) => this.setState({phone:e.target.value})} 
              placeholder="Contact phone if you would like to be contacted by phone"/>
            <textarea value={message} 
              onChange={(e) => this.setState({message:e.target.value})} 
              placeholder="Write your message here..." 
              required></textarea>
            <button className="submit_contact"
              type="submit" 
              value="Submit">
              Submit</button>
          </form>
      </div>
    )
  }
}

export default ContactForm;
