import React, { Component } from 'react';
import './index.scss';
import Header from '../Header'
import Main from '../../Pages/Main';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
