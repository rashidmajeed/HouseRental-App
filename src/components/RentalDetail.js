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
        return (
            <div>
            <h2>House Rental details are below</h2>
            <h3>{rental.title}</h3>
            <h3>{rental.city}</h3>
            <h3>{rental.description}</h3>
            <h3>{rental.dailyRates}</h3>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      rental: state.rental.data
    }
  }
  
  
  export default connect(mapStateToProps)(RentalDetail);
