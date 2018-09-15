
import { GET_ALL_RENTALS } from './../actions/types';
import { GET_RENTAL_BY_ID } from './../actions/types';

const InitialState = {
rentals: {
    data : []
},
rental: {
    data: {}
}

}
export const rentalReducer = (state= InitialState.rentals, action) => {
    switch (action.type) {
        case GET_ALL_RENTALS:
        return {...state, data: action.rentals}

        default:
            return state
    }
}
export const selectedRentalReducer = (state= InitialState.rental, action) => {
    switch (action.type) {
        case GET_RENTAL_BY_ID:
        return {...state, data: action.rental}

        default:
            return state
    }
}
