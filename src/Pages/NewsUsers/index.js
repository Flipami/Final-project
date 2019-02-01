import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../services/dbApi';
import NewsItem from '../../Components/NewsList/NewsItem';
import Loading from '../../Components/Loading';
import { setJobInfo } from '../../redux/actions/jobActions';
import { connect } from 'react-redux';

class News extends Component {

    state = {
        filterData:null,
        loading: true,
    }

    async componentDidMount() {
        const responseData = await this.loadData();
        const filterData = this.filterData(responseData)
        this.props.setJob(responseData);
        this.setState({loading:false, filterData})
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

    filterData = (responseData) => {
        const userCombinations = this.props.user.combinations
        let allowedCombinations = []
        for (let i = 0; i < userCombinations.length; i++) {
            allowedCombinations.push(userCombinations[i].label);
        }
        const displayCombinations = responseData.filter((offer) => allowedCombinations.includes(offer.language_comb))
        return displayCombinations
    }

    makeBook = async (job) => {
        const { user }= this.props
        const allJobs = this.props.job
        const jobToUpdate = allJobs.find((offer) => offer.id === job.id)
        jobToUpdate.reserved = !jobToUpdate.reserved
        jobToUpdate.reservedBy = user.id
        await DatabaseApi.updateDocument('newjobs', jobToUpdate, jobToUpdate.id)    
        const updateJobs = allJobs.map(j => j.id === jobToUpdate.id ? jobToUpdate : j)
        this.props.setJob(updateJobs)
    }

    render() {
        const { filterData } = this.state
        const { user } = this.props

        return (
            <div className="newsList">
                {filterData ? filterData.map(job => <NewsItem key={job.id} newJobInfo={job} reserved={job.reserved} booked={this.makeBook} user={user} />) : <Loading/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      job: state.jobReducer.job
    }
  }

const mapDispatchToProps = (dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);