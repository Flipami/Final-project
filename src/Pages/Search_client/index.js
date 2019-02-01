import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../services/dbApi';
import Loading from '../../Components/Loading';
import { setJobInfo } from '../../redux/actions/jobActions';
import { setUserInfo } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        resultJobData:null,
        resultUserData:null,
        loading: true,
    }

    async componentDidMount() {
        const responseJobData = await this.searchingjobData();
        const responseUserData = await this.searchingUserData()
        console.log('test in search -->', responseJobData)
        console.log('test in search -->', responseUserData)
        //this.props.setJob(responseData);
        this.setState({loading:false, resultData: responseJobData})
    }

    searchingjobData = async () => {
        let jobData = null;
        try {
            jobData= await DatabaseApi.getDocument('newjobs', 'file_type', 'Transtool')    
        } catch (error) {
            console.error(error);
        }
        return jobData;
    }

    searchingUserData = async () => {
        let userData = null;
        try {
            userData = await DatabaseApi.getDocument('users', 'name', 'Silvia')    
        } catch (error) {
            console.error(error);
        }
        return userData;
    }

    render() {
        return (
            <div ClassName="Search-page">
                WORK IN PROGRESS ...
                <Loading />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      job: state.jobReducer.job,
      user: state.userReducer.job
    }
}

const mapDispatchToProps = (dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo))}, 
             setUser: (userInfo) => { dispatch(setUserInfo(userInfo))}
            } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)