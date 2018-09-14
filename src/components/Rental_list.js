import React, { Component } from 'react'
import RentalCard from './RentalCard';

class Rentallist extends Component {

  displayRentalList = () => {
    return this.state.rentals.map((i) => {
      return (
        <RentalCard key={i} />
      )
    });
  }

   render() {
    return (
      <section id='rentalListing'>
        <h1 className='page-title'>Find Home every place in the world!!</h1>
        <div className='row'>
          {this.displayRentalList()}
        </div>
      </section>
    )
  }
}

export default Rentallist;
