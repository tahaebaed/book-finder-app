import { call, takeLatest, put } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { fetchCallResponse } from './actions';
import { handleFetchBooks } from './api';
import { GET_BOOKS_REQUEST } from './types';

function* getBooksHandler({ query }) {
  try {
    const response = yield call(handleFetchBooks, query);
    const { items, error } = response;
    if (error) {
      yield toast.error(error.message);
    }
    yield put(fetchCallResponse(items));
  } catch (err) {
    console.error(err.message);
  }
}

export function* booksSaga() {
  yield takeLatest(GET_BOOKS_REQUEST, getBooksHandler);
}
