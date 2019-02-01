import React, { Component } from 'react';
import DatabaseApi from '../../services/dbApi'
import {setContactInfo} from '../../redux/actions/contactActions';
import { connect } from 'react-redux';
import ContactItem from '../../Components/ContactList/ContactItem';

class Notifications extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: []
        }
    }

    async componentDidMount () {
        const contactData = await this.loadData();
        console.log('test in componentDidMount -->', contactData, this.props.user)
        this.props.setContact(contactData);
        this.setState({message: contactData, loading: false});
    }


    loadData = async () => {
        let contactData = null;
        try{
            contactData = await DatabaseApi.getCollection('contacts')
            console.log('contactData in Notifications in loadData -->', contactData)
        } catch(error) {
            console.error(error);
        }
        return contactData;
    }

    render() {
        const { message } = this.state
        const { user } = this.props
        //console.log('Notifications -->', user)
        //console.log('message in Notifications page -->', message)
        return (
            <div className="ContactList">
            {message && message.map(message => <ContactItem key={message.id} newContactInfo={message} user={user} /> )}
            </div>
            )
    }
}  
const mapDispatchToProps =(dispatch) => {
    return { setContact: (contactInfo) => { dispatch(setContactInfo(contactInfo))}}
  }

export default connect(null, mapDispatchToProps)(Notifications);
