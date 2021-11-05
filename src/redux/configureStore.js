import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books';

const reducer = combineReducers({
  books,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
