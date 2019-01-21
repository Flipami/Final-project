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
      <div className="profile">
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} id="name" name="name" placeholder="Name"/>

            <label htmlFor="surname">Surname</label>
            <input type="text" value={surname} id="surname" name="surname" placeholder="Surname"/>

            <label htmlFor="email">Email address</label>
            <input type="mail" value={email} id="mail" name="mail" placeholder="Mail"/>
            
            <label htmlFor="phone">Contact phone</label>
            <input type="text" value={phone} id="phone" name="phone" placeholder="Phone"/>

            <label htmlFor="paddress">Primary address</label>
            <textarea type="text" value={address} id="address" name="address" placeholder="Address"/>

            <label htmlFor="country">Country</label>
            <input type="text" value={country} id="country" name="country" placeholder="country"/>

            <label htmlFor="mlanguage">Mother Languale</label>
            <input type="text" value={motherlang} id="language" name="language" placeholder="language"/>

            <label htmlFor="combinationL">Language combinations</label>
            <select multiple value={combinations} id="combinationL" name="combinationL">
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
            <select multiple value={jobs} id="jobs" name="jobs">
              <option value="technical">Technical jobs</option>
              <option value="marketing">Marketing jobs</option>
              <option value="medical">Medical jobs</option>
              <option value="legal">Legal jobs</option>
              <option value="mt">Machine Translation</option>
              <option value="swan">Sworn Translation</option>
            </select>
            <p>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</p>

            <label htmlFor="comments">Comments</label>
            <textarea id="comments" name="comments" placeholder="Write your comments here..."></textarea>

            <input type="submit" value="Submit" />

            </form>
      </div>
    )
  } 
            
}

export default ProfileForm;