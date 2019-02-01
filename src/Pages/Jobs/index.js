import React, { Component } from 'react';
import DatabaseApi from '../../services/dbApi';
import FilterJobs from '../../Components/JobsItem';
import Loading from '../../Components/Loading';
import { setJobInfo } from '../../redux/actions/jobActions';
import { connect } from 'react-redux';
import './index.scss'


class Jobs extends Component {
    state = {
        filterJobs: null,
        loading: true,
    }

    async componentDidMount() {
        const responseData = await this.loadData();
        const filterJobs = await this.filterJobs(responseData)
        console.log('test in componentDidMount -->', filterJobs)
        this.props.setJob(responseData);
        this.setState({loading:false, filterJobs})
    }

    loadData = async () => {
        let jobData = null;
        try {
            jobData = await DatabaseApi.getCollection('newjobs')
        } catch (error) {
            console.error(error);
        }
        return jobData;
    }

    filterJobs = async (responseData) => {
        const {user} = this.props
        const displayJobs = await responseData.filter((p) => p.reservedBy === user.id)
        return displayJobs
    }
    
    render() {
        const { filterJobs } = this.state
        
        return (
            <div className="jobsListWrapper">
            <div className="jobsList">
                {filterJobs ? filterJobs.map(as => <FilterJobs key={as.id} myJobsInfo={as} />) : <Loading />}
            </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      job: state.jobReducer.job,
      user: state.userReducer.user
    }
  }

const mapDispatchToProps = (dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo)) } }
}
export default connect(mapStateToProps, mapDispatchToProps)(Jobs);