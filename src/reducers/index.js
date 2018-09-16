import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import { rentalReducer, selectedRentalReducer } from './RentalReducer';
import thunk from 'redux-thunk';
export const init = () => {
  const rootReducer = combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
}