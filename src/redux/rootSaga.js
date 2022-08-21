import { spawn } from 'redux-saga/effects';
import passedTrainingsWatcher from './sagas';

export default function* rooSaga() {
  yield spawn(passedTrainingsWatcher);
}
