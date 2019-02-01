import React, { Component } from 'react';
//import DatabaseApi from '../../services/dbApi';
import StorageApi from '../../services/storageApi';
import { setJobInfo } from '../../redux/actions/jobActions';
import { connect } from 'react-redux';
import './index.scss';

class FilterJobs extends Component {
    constructor(props){
        super(props)
        this.state = {
            file: '',
            jobDone: '',
        }
    }
    async componentDidMount () {
        await this.compareDates();
    }
    compareDates = () => {
        const {myJobsInfo} = this.props
        var jobDone = '';
        var d1 = myJobsInfo.delivery.seconds*1000;
        //console.log('multiplicado por 1000', d1)
        var d2 = Date.parse((new Date()));
        //console.log('todays date', d2)
        if (d1 < d2) {
            jobDone = 'Done';
        } else {
            jobDone = 'Ongoing';
        }
        this.setState({jobDone})
    }

    onFileSelected = (e) => {
        const file = e.target.files[0];
        StorageApi.uploadFile('file',file, (fileURL) => {
          this.setState({file: fileURL});
        });
      }

    render() {
        const {myJobsInfo} = this.props
        const {jobDone} = this.state
        const date= new Date(myJobsInfo.delivery.seconds*1000)
        const deliveryDate= date.toLocaleDateString()
        
        return (
            <React.Fragment>
                <div className="jobsItem">
                { (jobDone === 'Done') ? <div className="FilterJobsDone"><h1>Jobs Done</h1>
                    <h3><strong>{myJobsInfo.language_comb}</strong><i className="fas fa-lock"></i></h3> 
                    <p>A <strong>{myJobsInfo.type}</strong> job that was delivered <strong>{deliveryDate}</strong>, with a word count of <strong>{myJobsInfo.wc}</strong> words that was in <strong>{myJobsInfo.file_type}</strong> format.</p>
                </div> : <div className="FilterJobsOngoing">
                    <h1>Jobs Ongoing</h1>
                    <h3><strong>{myJobsInfo.language_comb}</strong><i className="fas fa-lock"></i></h3>
                    <p>A new <strong>{myJobsInfo.type}</strong> job to be delivered <strong>{deliveryDate}</strong>, with a word count of <strong>{myJobsInfo.wc}</strong> words that is in <strong>{myJobsInfo.file_type}</strong> format.</p>
                </div>}
                </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      job: state.jobReducer.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo)) } }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(FilterJobs);