import React, { Component } from 'react';
import './index.scss';
import StorageApi from '../../../services/storageApi';
import {setJobInfo} from '../../../redux/actions/jobActions';
import { connect } from 'react-redux';



class NewItem extends Component {


    removeDocument = (e) => {
        const {original} = this.state
        StorageApi.deleteFile('original', original, (originalURL) => {
          this.setState({original: ''});
        });
    }
    
    render() {
        const {newJobInfo, reserved, user, booked} = this.props
        const date= new Date(newJobInfo.delivery.seconds*1000)
        const deliveryDate= date.toLocaleDateString()
        
        return (
            <div className="offerContainer">
            <div className={`newsItem ${reserved && 'newItemReserved'}`}>
                <h1><strong>{newJobInfo.language_comb}{reserved && <i className="fas fa-lock"></i>}</strong></h1> 
                <p>A new <strong>{newJobInfo.type}</strong> job to be delivered <strong>{deliveryDate}</strong>, with a word count of <strong>{newJobInfo.wc}</strong> words that is in <strong>{newJobInfo.file_type}</strong> format.</p>
                {reserved && newJobInfo.original && <div className="original-doc">
                <a href={newJobInfo.original} className="original-doc" target="_blank">Get the original documentk</a>
                <i className="far fa-trash-alt" onClick={(original) => {this.removeDocument = original}}></i>
                </div>}
                {(!reserved && user.profile !== 'admin') && <button onClick={() => booked(newJobInfo)}>Book</button>}
            </div>
            </div>

        );
    }
}
const mapDispatchToProps =(dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo))}}
  }

export default connect(mapDispatchToProps)(NewItem);