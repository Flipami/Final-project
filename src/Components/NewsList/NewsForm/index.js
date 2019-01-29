import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../../services/dbApi';
import {setJobInfo} from '../../../redux/actions/jobActions';
import { connect } from 'react-redux';

class NewsForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
          language_comb: '',
          wc: '',
          type: '',
          delivery: '',
          file_type: '',
          job: null,
          loading: true,
        }
      }

    newJobToBePublished= (e) =>{
        e.preventDefault();
        const { language_comb, wc, type, delivery, file_type } = this.state;
    
        const success = DatabaseApi.addDocument('newjobs', {language_comb, wc, type, delivery, file_type });
        success && this.resetInput()
        success && alert('The info had been save correctly');
    }
    resetInput = () => {
    this.setState({ language_comb: '',
    wc: '',
    type: '',
    delivery: '',
    file_type: '' });
    }

    render() {
        const { language_comb, wc, type, delivery, file_type } = this.state
        return (
            <div className="news_form">
                <h1>Create a new job from this form</h1>
                <form className="news_form" onSubmit={this.newJobToBePublished}>
                    <input type="text" value={language_comb} onChange={(e) => this.setState({language_comb:e.target.value})} placeholder="Language combination" required/>
                    <input type="text" value={wc} onChange={(e) => this.setState({wc:e.target.value})} placeholder="Word count for the job" required/>
                    <input type="text" value={type} onChange={(e) => this.setState({type:e.target.value})} placeholder="Type of job" required/>
                    <input type="text" value={delivery} onChange={(e) => this.setState({delivery:e.target.value})} placeholder="Delivery date"/>
                    <input type="text" value={file_type} onChange={(e) => this.setState({file_type:e.target.value})} placeholder="File format"/>

                    <button className="submit_new" type="submit" value="Submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo))}}
  }

export default connect(mapDispatchToProps)(NewsForm);