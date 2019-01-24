import React, { Component } from 'react';
import NewsForm from '../../Components/News/NewsForm';

class News extends Component {
    render() {
        return (
            <div>
                <h1>News page</h1>
                <NewsForm />
            </div>
        );
    }
}

export default News;