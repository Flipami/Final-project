import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../services/dbApi';
import StorageApi from '../../services/storageApi';
import MultiSelect from "@kenshooui/react-multi-select";
import { withRouter } from "react-router";
import { connect } from 'react-redux';


class ProfileForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            surname: '',
            email:'',
            phone:'',
            address:'',
            country:'',
            motherlang:'',
            combinationsItems:[ 
              { id: 0, label: "EN>FR"},
              { id: 1, label: "EN>DE"},
              { id: 2, label: "EN>SE"},
              { id: 3, label: "EN>PT"},
              { id: 4, label: "EN>IT"},
              { id: 5, label: "EN>ES"},
              { id: 6, label: "EN>NO"},
              { id: 7, label: "EN>DA"}
            ],
            combinations: [],
            jobsItems:[
              { id: 0, label: "Technical"},
              { id: 1, label: "Marketing"},
              { id: 2, label: "Medical"},
              { id: 3, label: "Legal"},
              { id: 4, label: "Machine Translations"},
              { id: 5, label: "Sworn Translations"}
            ],
            jobs:[ ],
            file:'',
            comments:'',
        }
    }

  async componentDidMount(){
    //sacar la información de redux y conseguir el ID
    const { id, name, surname, email, phone, address, country, motherlang, combinations, jobs, file, comments } = this.props.user
    this.setState({ id, 
      name: name || '', 
      surname: surname || '', 
      email: email || '', 
      phone: phone || '', 
      address: address || '', 
      country: country || '', 
      motherlang: motherlang || '', 
      combinations: combinations || [], 
      jobs: jobs || [],
      file: file || '',
      comments: comments || '' })
    console.log("componentDidMount --- user",this.props.user);

  }

  //onSubmitForm cogeremos del state todas las variables, crearemos el objeto y lo enviamos a la base de datos con el update
  onSubmitForm = async (e) => {
    e.preventDefault();

    const { id, name, surname, email, phone, address, country, motherlang, combinations, jobs, file, comments} = this.state;
    const success = DatabaseApi.updateDocument('users', {name, surname, email, phone, address, country, motherlang, combinations, jobs, file, comments}, id)
    //this.setState({name, surname, email, phone, address, country, motherlang, combinations, jobs});
    success && this.resetInput()
    success && alert('The info had been save correctly');
  }

  handleUserInput (e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  handleMultiChange = (selectedItems, name) => {
    this.setState({[name]: selectedItems })
  };

  onFileSelected = (e) => {
    const file = e.target.files[0];
    StorageApi.uploadFile('file',file, (fileURL) => {
      this.setState({file: fileURL});
    });
  }

  resetInput = () => {
    this.setState({ name: '', 
    surname: '', 
    email: '', 
    phone: '', 
    address: '', 
    country: '', 
    motherlang: '', 
    combinations: [], 
    jobs: [],
    file: '',
    comments: ''});
    } 
  removeDocument = (e) => {
    const {file} = this.state
    StorageApi.deleteFile('file', file, (fileURL) => {
      this.setState({file: ''});
    });
  }

  render() {
    const {name, surname, email, phone, address, country, motherlang, combinationsItems, combinations, jobsItems, jobs, file } = this.state;

    return (
      <div className="profile_form">
        <form className="profile_form" onSubmit={this.onSubmitForm}>  
            <input name="name"
              type="text" 
              value={name} 
              placeholder="Name" 
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <input name="surname"
              type="text" 
              value={surname} 
              placeholder="Surname" 
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <input name="email"
              type="email" 
              value={email} 
              placeholder="Email address" 
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <input name="phone"
              type="text" 
              value={phone}
              placeholder="Contact phone"
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <textarea name="address"
              type="text" 
              value={address} 
              placeholder="Address" 
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <input name="country"
              type="text" 
              value={country}  
              placeholder="Country" 
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <input name="motherlang"
              type="text" 
              value={motherlang}  
              placeholder="Mother language" 
              onChange={(event) => this.handleUserInput(event)}
              required/>
            <label htmlFor="combinationL">Language combinations</label>
            <MultiSelect name="combinations"
              className="combinations-profile"
              items={combinationsItems}
              selectedItems={combinations}
              onChange={(combinations) =>{this.handleMultiChange(combinations, 'combinations')}}/>  
            <label htmlFor="jobs">Types of jobs</label>
            <MultiSelect name="jobs"
              className="jobs-profile"
              items={jobsItems}
              selectedItems={jobs}
              onChange={(jobs) =>{this.handleMultiChange(jobs, 'jobs')}}/>
            <textarea name="comments" 
            placeholder="Write your comments here..."></textarea>
            <input name="file"
              type="file" 
              value={file.name} 
              placeholder="Add your file here"
              onChange={(e) => { this.onFileSelected(e) }} 
              ref={(ref) => {this.fileInputRef = ref}}/>
            {file && <div className="file-profile">
            <a href={file} className="file-profile" target="_blank">Download CV</a>
            <i className="far fa-trash-alt" onClick={(file) => {this.removeDocument = file}}></i>
            </div>}
            <button type="submit_profile" 
            value="Submit">Submit</button>
          </form>
      </div>
    )
  }            
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default withRouter(connect(mapStateToProps)(ProfileForm))