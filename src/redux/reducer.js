import {
  CHANGE_LOADING_STATUS,
  SET_PASSED_TRAININGS_FROM_API_TO_STATE,
  SET_PASSED_TRAININGS_ON_SAVE,
} from './constants';

const initState = {
  passedTrainings: [],
  loading: false,
};

export default function passedTrainingsReducer(state = initState, action) {
  switch (action.type) {
    case SET_PASSED_TRAININGS_FROM_API_TO_STATE:
      return {
        ...state,
        passedTrainings: action.passedTrainings,
      };
    case CHANGE_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case SET_PASSED_TRAININGS_ON_SAVE:
      return {
        ...state,
        passedTrainings: [...state.passedTrainings, action.training],
      };
    default:
      return state;
  }
}
