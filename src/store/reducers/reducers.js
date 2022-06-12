import { combineReducers } from 'redux';
import bookReducer from '../book/reducer';
import booksReducer from '../books/reducer';

const reducers = combineReducers({
  books: booksReducer,
  book: bookReducer,
});

export default reducers;
