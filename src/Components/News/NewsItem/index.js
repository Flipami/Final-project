import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../../services/dbApi';

class NewItem extends Component {

    render() {
        const {newJobInfo} = this.props
        return (
            <div className="newsItem">
                <Link to={`/news/${id}`}>
                <div><strong>{newJobInfo.language_comb}</strong></div>
                </Link>
                <p>A new <strong>{newJobInfo.type}</strong> job to be delivered <strong>{newJobInfo.delivery}</strong>, with a word count of <strong>{newJobInfo.wc}</strong> words that is in <strong>{newJobInfo.file_type}</strong> format.</p>

    
            </div>
        );
    }
}

export default NewItem;