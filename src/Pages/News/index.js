import React, { Component } from 'react';
import NewsForm from '../../Components/News/NewsForm';
import { connect } from 'react-redux';

class News extends Component {
    constructor(props){
        super(props)

        this.state = {
            news: []

        }
    }

    componentDidMount () {
        this.loadData();
    }
    loadData = async () => {
        try{
            const news = await dbService.getContent('news')
            this.setState({news})
        }catch(error){
            console.error(error);
        }
    }

    render() {
        const { news } = this.state;
        const { user } = this.props
        console.log('render', news)
        return (
            <div className="news">
                <h1>Outcome News</h1>
                {news.map((document) => {
                    return <NewsItem key={document.id} newJobInfo={document}/>
                    && user.profile==='admin' && <div><NewsForm /></div>
                })}
            </div>
        );
}

                

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
  }

export default connect(mapStateToProps)(News);