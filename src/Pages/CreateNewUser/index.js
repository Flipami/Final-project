import React, { Component } from 'react';
import DatabaseApi from '../../services/dbApi';
import AuthApi from '../../services/authApi';
import ProfileForm from '../../Components/ProfileForm'
import './index.scss';
import {setUserInfo} from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class CreateNewUsers extends Component {
   constructor (props){
       super(props)
       this.state = {
        id: '',
        name: '',
        surname: '',
        email:'',
       }
   } 
   async componentDidMount(){
    //sacar la información de redux y conseguir el ID
    const { id, name, surname, email } = this.props.user
    this.setState({ id, 
      name: name || '', 
      surname: surname || '', 
      email: email || '', 
     })
    console.log("componentDidMount ---> createUser",this.props.user);

  }

  //onSubmitForm cogeremos del state todas las variables, crearemos el objeto y lo enviamos a la base de datos con el update
  onSubmitForm = async (e) => {
    e.preventDefault();

    const { id, name, surname, email } = this.state;
    const success = DatabaseApi.updateDocument('users', {name, surname, email }, id)
    success && this.resetInput()
    success && alert('The info had been save correctly');
  }

   loadData = async () => {
    let userData = null;
    try{
        userData = await DatabaseApi.getCollection('newusers')
        console.log('userData in News in loadData -->', userData)
    } catch(error) {
        console.error(error);
    }
    return userData;
}
    render() {
        return (
            <div>
                <ProfileForm />
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch) => {
    return { setUser: (userInfo) => { dispatch(setUserInfo(userInfo))}}
  }
export default connect(null, mapDispatchToProps)(CreateNewUsers);