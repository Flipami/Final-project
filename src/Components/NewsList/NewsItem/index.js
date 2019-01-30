import React, { Component } from 'react';
import './index.scss';


class NewItem extends Component {
    
    render() {
        const {newJobInfo, reserved, user, booked} = this.props
        //console.log('in NewItem -->', newJobInfo)
        return (
            <div className={`newsItem ${reserved && 'newItemReserved'}`}>
                <h1><strong>{newJobInfo.language_comb}{reserved && <i class="fas fa-lock"></i>}</strong></h1> 
                <p>A new <strong>{newJobInfo.type}</strong> job to be delivered <strong>{newJobInfo.delivery}</strong>, with a word count of <strong>{newJobInfo.wc}</strong> words that is in <strong>{newJobInfo.file_type}</strong> format.</p>
                {(!reserved || user.profile === 'admin') && <button onClick={() => booked(newJobInfo)}>Book</button>}
            </div>
        );
    }
}

export default NewItem;