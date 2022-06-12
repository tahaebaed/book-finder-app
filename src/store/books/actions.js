import { GET_BOOKS_REQUEST, GET_BOOKS_RESPONSE } from './types';

export const handleFetchAllBookCall = query => ({
  type: GET_BOOKS_REQUEST,
  query,
});
export const fetchCallResponse = books => ({
  type: GET_BOOKS_RESPONSE,
  payload: books,
});
