import React, { Component } from 'react';
import './index.scss';
import DatabaseApi from '../../../services/dbApi';

class NewItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            language_comb: '',
            wc: '',
            type: '',
            delivery: '',
            file_type: ''
        }
    }
    
    render() {
        const { language_comb, wc, type, delivery, file_type } = this.state
        return (
            <div>
                Aqui mostraremos cada una de las noticias
            </div>
        );
    }
}

export default NewItem;