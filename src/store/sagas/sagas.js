import { all } from 'redux-saga/effects';
import { bookSaga } from '../book/saga';
import { booksSaga } from '../books/saga';

export function* rootSaga() {
  yield all([booksSaga(), bookSaga()]);
}
