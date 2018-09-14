import React, { Component } from 'react'
import RentalCard from './RentalCard';
import { connect } from 'react-redux';

class RentalList extends Component {

   displayRentalList = () => {
    return this.props.rentals.map((rental, i) => {
      return (
        <RentalCard key={i} rental={rental}/>
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

const mapStateToProps = (state) => {
  return {
    rentals: state.rentals
  }
}



export default connect(mapStateToProps)(RentalList);
