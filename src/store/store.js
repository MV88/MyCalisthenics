import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import progress from '../reducers/progress';

const store = createStore(
  combineReducers({
    progress
  }),
  applyMiddleware(
    thunk
  )
);

export default store;
