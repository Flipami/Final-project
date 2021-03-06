import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import DatabaseApi from './services/dbApi';
import reducers from './redux/reducers';



DatabaseApi.iniDatabase();
const store = createStore(reducers);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
