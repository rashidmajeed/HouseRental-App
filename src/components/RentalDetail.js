import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class RentalDetail extends Component {

  componentWillMount = () => {
    const rentalId = this.props.match.params.id;
    // Dispatch action
    this.props.dispatch(actions.getRentalById(rentalId));
  }
  render() {
    const rental = this.props.rental;
    console.log(rental);
    if (rental.id) {
      return (
        <div>
          <h3>{rental.title}</h3>
          <h3>{rental.city}</h3>
          <h3>{rental.description}</h3>
          <h3>{rental.dailyRate}$</h3>
        </div>
      );
    } 
    else {
      return (
      <h1>Loading...</h1>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    rental: state.rental.data
  }
}


export default connect(mapStateToProps)(RentalDetail);
