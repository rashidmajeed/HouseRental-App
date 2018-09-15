import React, { Component } from 'react'
import RentalCard from './RentalCard';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RentalList extends Component {

   displayRentalList = () => {
    return this.props.rentals.map((rental, i) => {
      return (
        <RentalCard key={i} rental={rental}/>
      )
    });
  }
// Dispatch action
  componentWillMount = () => {
    this.props.dispatch(actions.getAllRentals());
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
    rentals: state.rentals.data
  }
}

export default connect(mapStateToProps)(RentalList);
