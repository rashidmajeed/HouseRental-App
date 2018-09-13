import React, { Component } from 'react';
import Header from './shared/Header';
import Rentallist from './components/Rental_list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <Rentallist />
        </div>

      </div>
    );
  }
}

export default App;
