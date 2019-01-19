import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Contactform extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="Contact">
         <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name"/>

            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" placeholder="Surname"/>

            <label htmlFor="email">Email address</label>
            <input type="mail" id="mail" name="mail" placeholder="Mail"/>
            
            <label htmlFor="phone">Contact phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone"/>

            <label htmlFor="paddress">Primary address</label>
            <textarea type="text" id="address" name="address" placeholder="Address"/>

            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" placeholder="country"/>

            <label htmlFor="mlanguage">Mother Languale</label>
            <input type="text" id="language" name="language" placeholder="language"/>

            <label htmlFor="combinationL">Language combinations</label>
            <select id="combinationL" name="combinationL">
              <option value="EN>FR">EN>FR</option>
              <option value="EN>DE">EN>DE</option>
              <option value="EN>SE">EN>SE</option>
              <option value="EN>PT">EN>PT</option>
              <option value="EN>IT">EN>IT</option>
              <option value="EN>ES">EN>ES</option>
              <option value="EN>NO">EN>NO</option>
              <option value="EN>DA">EN>DA</option>
            </select>

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

            <input type="submit" value="Submit">

            </form>
        Hello world from Contactform
      </div>
    )
  }
}

Contactform.displayName = Contactform

Contactform.propTypes = {}

Contactform.contextTypes = {}

export default Contactform

