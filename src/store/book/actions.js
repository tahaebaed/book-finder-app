import { GET_BOOK_REQUEST, GET_BOOK_RESPONSE } from './types';

export const fetchBookResQuest = id => ({
  type: GET_BOOK_REQUEST,
  id,
});
export const fetchBookResponse = payload => ({
  type: GET_BOOK_RESPONSE,
  payload,
});
