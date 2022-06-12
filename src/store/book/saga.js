import { call, takeLatest, put } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import { fetchBookResponse } from './actions';
import { handleFetchOneBook } from './api';
import { GET_BOOK_REQUEST } from './types';

function* getOneBookHandler({ id }) {
  try {
    const response = yield call(handleFetchOneBook, id);
    const res = response;
    if (res.error) {
      yield toast.error(res.error.message);
    }
    yield put(fetchBookResponse(res));
  } catch (err) {
    console.error(err.message);
  }
}

export function* bookSaga() {
  yield takeLatest(GET_BOOK_REQUEST, getOneBookHandler);
}
