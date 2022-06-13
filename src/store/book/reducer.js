import { GET_BOOK_REQUEST, GET_BOOK_RESPONSE } from './types';

function bookReducer(initState = null, action) {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return (initState = 'loading');
    case GET_BOOK_RESPONSE:
      return (initState = { ...action.payload });
    default:
      return initState;
  }
}

export default bookReducer;
