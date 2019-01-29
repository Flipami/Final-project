import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../services/dbApi';
import NewsItem from '../../Components/NewsList/NewsItem';
import NewsForm from '../../Components/NewsList/NewsForm';
import {setJobInfo} from '../../redux/actions/jobActions';
import { connect } from 'react-redux';

class News extends Component {
    constructor(props){
        super(props)

        this.state = {
            job: []
        }
    }

    async componentDidMount () {
        const responseData = await this.loadData();
        //console.log('test in componentDidMount -->', responseData, this.props.user)
        //const filterData = this.filterData(responseData)
        this.props.setJob(responseData);
        this.setState({job: responseData, loading: false});
    }


    loadData = async () => {
        let jobData = null;
        try{
            jobData = await DatabaseApi.getCollection('newjobs')
            //console.log('jobData in News in loadData -->', jobData)
        } catch(error) {
            console.error(error);
        }
        return jobData;
    }

    render() {
        const { job } = this.state
        const { user } = this.props
        //console.log('News -->', user)
        //console.log('jobs in News page -->', job)
        return (
            <div>
                <h1>List of all the published jobs</h1>
                <div className="newsListClient">
                    {job && job.map(job => <NewsItem key={job.id} newJobInfo={job} reserved={job.reserved} booked={this.makeBook} user={user} /> )}
                </div>
                <NewsForm />
            </div>
            )
    }
}           

const mapDispatchToProps =(dispatch) => {
    return { setJob: (jobInfo) => { dispatch(setJobInfo(jobInfo))}}
  }

export default connect(null, mapDispatchToProps)(News);

/*  crear el sign up --> función de Cristiam
coger el id y crear el usuario, 
añadir a favoritos --> campo de reservado a true en la coleccion, bloquear click en CSS
                --> array de trabajos asignados*/