import React, { Component } from 'react';
import dbService from '../../services/dbApi';
import NewsItem from '../../Components/News/NewsItem';
import NewsForm from '../../Components/News/NewsForm';
import { connect } from 'react-redux';

class News extends Component {
    constructor(props){
        super(props)

        this.state = {
            jobs: []

        }
    }

    componentDidMount () {
        this.loadData();
    }
    loadData = async () => {
        try{
            const jobs = await dbService.getContent('newjobs')
            this.setState({jobs})
        }catch(error){
            console.error(error);
        }
    }

    render() {
        const { jobs } = this.state;
        const { user } = this.props
        console.log('render', jobs)
        return (
            <div className="news">
                <h1>Outcome News</h1>
                {jobs.map((document) => {
                    return <NewsItem key={document.id} newJobInfo={document}/>
                    && user.profile==='admin' && <div><NewsForm /></div>
                })}
            </div>
        );
    }
}
                

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
  }

export default connect(mapStateToProps)(News);