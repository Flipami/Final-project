import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../services/dbApi';
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
        }
    }

  async componentDidMount(){
    //sacar la información de redux y conseguir el ID
    const { id, name, surname, email, /*phone, address, country, motherlang, combinations, jobs */} = this.props.user
    this.setState({ id, name, surname, email, /*phone, address, country, motherlang, combinations, jobs*/})
    console.log("componentDidMount --- user",this.props.user);

  }

  //onSubmitForm cogeremos del state todas las variables, crearemos el objeto y lo enviamos a la base de datos con el update
  async onSubmitForm (e){
    e.preventDefault();

    const { id, name, surname, email, /*phone, address, country, motherlang, combinations, jobs */} = this.state;
    DatabaseApi.updateDocument('users', {name, surname, email, /*phone, address, country, motherlang, combinations, jobs*/}, id)
    this.setState({name, surname, email, /*phone, address, country, motherlang, combinations, jobs*/});
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

  resetInput = () => {
    this.setState({ value: '' });
    } 

  render() {
    const {name, surname, email, phone, address, country, motherlang, combinationsItems, combinations, jobsItems, jobs } = this.state;

    return (
      <div className="profile_form">
        <form onSubmit={this.onSubmitForm}>
    
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
              /*required*//>
            <textarea name="address"
              type="text" 
              value={address} 
              placeholder="Address" 
              onChange={(event) => this.handleUserInput(event)}
              /*required*//>
            <input name="country"
              type="text" 
              value={country}  
              placeholder="Country" 
              onChange={(event) => this.handleUserInput(event)}
              /*required*//>
            <input name="motherlang"
              type="text" 
              value={motherlang}  
              placeholder="Mother language" 
              onChange={(event) => this.handleUserInput(event)}
              /*required*//>
            <label htmlFor="combinationL">Language combinations</label>
            <MultiSelect name="combinations"
              items={combinationsItems}
              selectedItems={combinations}
              onChange={(combinations) =>{this.handleMultiChange(combinations, 'combinations')}}
              />
              {/*{this.props.combinations.map((item, index) => (
                <option key={index} value={item}>{item.name}</option>
                <option key={'EN>FR'} value="EN>FR">EN>FR</option>
                <option key={'EN>DE'} value="EN>DE">EN>DE</option>
                <option key={'EN>SE'} value="EN>SE">EN>SE</option>
                <option key={'EN>PT'} value="EN>PT">EN>PT</option>
                <option key={'EN>IT'} value="EN>IT">EN>IT</option>
                <option key={'EN>ES'} value="EN>ES">EN>ES</option>
                <option key={'EN>NO'} value="EN>NO">EN>NO</option>
                <option key={'EN>DA'} value="EN>DA">EN>DA</option>
                )
              )}
           <p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>*/}

            <label htmlFor="jobs">Types of jobs</label>
            <MultiSelect name="jobs"
              items={jobsItems}
              selectedItems={jobs}
              onChange={(jobs) =>{this.handleMultiChange(jobs, 'jobs')}}
              />
                {/*<option value="technical">Technical jobs</option>
                <option value="marketing">Marketing jobs</option>
                <option value="medical">Medical jobs</option>
                <option value="legal">Legal jobs</option>
                <option value="mt">Machine Translation</option>
                <option value="sworn">Sworn Translation</option>
            <p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>*/}

            <textarea name="comments" 
            placeholder="Write your comments here..."></textarea>

            <button type="submit_profile" 
            value="Submit"
            onClick={this.resetInput}>Submit</button>
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