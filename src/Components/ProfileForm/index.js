import React, { Component } from 'react';
import DatabaseApi from '../../services/dbApi';

class ProfileForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            surname: '',
            email:' ',
            phone:' ',
            address:' ',
            country:' ',
            motherlang:' ',
            combinations:[ ],
            jobs:[ ],
        }
    }

  async componentDidMount(){
    const content = await DatabaseApi.getDocument('content', 'page', 'signup');
    const {name, surname, email, phone, address, country, motherlang, combinations, jobs } = content;
    this.setState({name, surname, email, phone, address, country, motherlang, combinations, jobs});
  }

  render() {
    const {name, surname, email, phone, address, country, motherlang, combinations, jobs } = this.state;

    return (
      <div className="profile_form">
        <form>
            <input type="text" value={name} id="name" name="your_name" placeholder="Name" required/>
            <input type="text" value={surname} id="surname" name="surname" placeholder="Surname" required/>
            <input type="mail" value={email} id="mail" name="email" placeholder="Email address" required/>
            <input type="text" value={phone} id="phone" name="phone" placeholder="Contact phone" required/>
            <textarea type="text" value={address} id="address" name="address" placeholder="Address" required/>
            <input type="text" value={country} id="country" name="country" placeholder="Country" required/>
            <input type="text" value={motherlang} id="language" name="language" placeholder="Mother language" required/>

            <label htmlFor="combinationL">Language combinations</label>
            <select multiple value={combinations} id="combinationL" name="combinationL" required>
              <option value="EN>FR">EN>FR</option>
              <option value="EN>DE">EN>DE</option>
              <option value="EN>SE">EN>SE</option>
              <option value="EN>PT">EN>PT</option>
              <option value="EN>IT">EN>IT</option>
              <option value="EN>ES">EN>ES</option>
              <option value="EN>NO">EN>NO</option>
              <option value="EN>DA">EN>DA</option>
            </select>
            <p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>

            <label htmlFor="jobs">Types of jobs</label>
            <select multiple value={jobs} id="jobs" name="jobs" required>
              <option value="technical">Technical jobs</option>
              <option value="marketing">Marketing jobs</option>
              <option value="medical">Medical jobs</option>
              <option value="legal">Legal jobs</option>
              <option value="mt">Machine Translation</option>
              <option value="swan">Sworn Translation</option>
            </select>
            <p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>

            <textarea id="comments" name="comments" placeholder="Write your comments here..."></textarea>

            <button type="submit" value="Submit">Submit</button>

            </form>
      </div>
    )
  } 
            
}

export default ProfileForm;