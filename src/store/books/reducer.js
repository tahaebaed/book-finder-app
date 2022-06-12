import { GET_BOOKS_RESPONSE } from './types';

function booksReducer(initState = null, action) {
  switch (action.type) {
    case GET_BOOKS_RESPONSE:
      return (initState = [...action.payload]);
    default:
      return initState;
  }
}

export default booksReducer;
