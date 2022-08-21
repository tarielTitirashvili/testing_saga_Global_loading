import {
  CHANGE_LOADING_STATUS,
  GET_PASSED_TRAININGS_FROM_API,
  SET_PASSED_TRAININGS_FROM_API_TO_STATE,
  SET_PASSED_TRAININGS_ON_SAVE,
} from './constants';

export const setPassedTrainingsAC = (passedTrainings) => ({
  type: SET_PASSED_TRAININGS_FROM_API_TO_STATE,
  passedTrainings,
});
export const getPassedTrainingsAC = () => ({
  type: GET_PASSED_TRAININGS_FROM_API,
});

export const setPassedTrainingsOnSaveAC = (training) => ({
  type: SET_PASSED_TRAININGS_ON_SAVE,
  training,
});

export const setLoadingAC = (status) => ({
  type: CHANGE_LOADING_STATUS,
  status,
});
