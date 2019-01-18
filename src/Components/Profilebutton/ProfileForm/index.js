import React, { Component } from 'react';
import DatabaseApi from '../services/dbApi';

class ProfileForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            desc: ''
        }
    }

  async componentDidMount(){
    const content = await DatabaseApi.getDocument('content', 'page', 'signup');
    const {title, desc} = content;
    this.setState({title, desc});
  }

  render() {
    const {title, desc} = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    )
  } 
            
}

export default ProfileForm;