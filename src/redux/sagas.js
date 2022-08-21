import { call, put, take, takeLeading } from 'redux-saga/effects';
import { getPEople } from '../API';
import { GET_PASSED_TRAININGS_FROM_API } from './constants';
import { setPassedTrainingsAC } from './actions';

const lazyApi = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await getPEople();
      resolve(data);
    }, 3000);
  });
};

export function* getTrainingsFromAPIWorker() {
  const data = yield call(lazyApi);

  yield put(setPassedTrainingsAC(data.data.results));
}

export default function* passedTrainingsWatcher() {
  yield takeLeading(GET_PASSED_TRAININGS_FROM_API, getTrainingsFromAPIWorker);
}
