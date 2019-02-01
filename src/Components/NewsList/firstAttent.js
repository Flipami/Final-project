import React, { Component } from 'react';
import DatabaseApi from '../../services/dbApi';
import NewsItem from '../../Components/NewsList/NewsItem';
//import NewsForm from '../../Components/NewsLists/NewsForm';
import {setJobInfo} from '../../redux/actions/jobActions';
import { connect } from 'react-redux';

class NewsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            job: []
        }
    }

    async componentDidMount () {
        const responseData = await this.loadData();
        console.log('test', responseData, this.props.user)
        const filterData = this.filterData(responseData)
        this.props.setJob(responseData);
        this.setState({job: filterData, loading: false});
    }

    loadData = async () => {
        let jobData = null;
        try{
            jobData = await DatabaseApi.getCollection('newjobs')
            console.log('jobData in News -->', jobData)
        } catch(error) {
            console.error(error);
        }
        return jobData;
    }

    filterData = (responseData) => {
        const userCombinations = this.props.user.combinations
        let allowedCombinations=[]
        for (let i = 0; i < userCombinations.length; i++) {
           allowedCombinations.push(userCombinations[i].label);
        }
        const displayCombinations = responseData.filter((offer) => allowedCombinations.includes(offer.language_comb))
        return displayCombinations 
    }

    makeBook = (job) => { 
        const allJobs = this.state.job
        const updatedAllJobs = allJobs.map((offer) => { 
            if(offer.id === job.id) {
             offer.reserved = !offer.reserved
             //console.log( 'offer', offer)
            }
             return offer
        })
        this.setState({jobData: updatedAllJobs})
    }

    render() {
        const { job } = this.state
        const { user } = this.props
        console.log('News -->', user)
        console.log('News -->', job)
        return (
            <div className="newsList">
            {job && job.map(job => <NewsItem key={job.id} newJobInfo={job}  reserved={job.reserved} booked={this.makeBook} user={user} /> )}

           {/*{user.profile==='admin' && <NewsForm />}*/}
            </div>
            )
    }
}           

const mapDispatchToProps =(dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo))}}
  }

export default connect(null, mapDispatchToProps)(NewsList);

/*  crear el sign up --> función de Cristiam
coger el id y crear el usuario, 
añadir a favoritos --> campo de reservado a true en la coleccion, bloquear click en CSS
                --> array de trabajos asignados*/
