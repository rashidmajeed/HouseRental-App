import * as redux from 'redux';
import { rentalReducer, selectedRentalReducer } from './RentalReducer';

export const init = () => {
  const rootReducer = redux.combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });
  const store = redux.createStore(rootReducer);
  return store;
}