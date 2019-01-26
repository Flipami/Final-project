import React, { Component } from 'react';
import './index.scss';


class NewItem extends Component {

    render() {
        const {newJobInfo} = this.props
        return (
            <div className="newsItem">
                <h1><strong>{newJobInfo.language_comb}</strong></h1> 
                <p>A new <strong>{newJobInfo.type}</strong> job to be delivered <strong>{newJobInfo.delivery}</strong>, with a word count of <strong>{newJobInfo.wc}</strong> words that is in <strong>{newJobInfo.file_type}</strong> format.</p>
            </div>
        );
    }
}

export default NewItem;