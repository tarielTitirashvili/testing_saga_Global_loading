import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import passedTrainingsReducer from './reducer';
import { setLoadingAC } from './actions';

const httpMiddleware = (store) => (next) => (action) => {
  // console.log(action)
  return next(action);
};
const effectMiddleware = (next) => (effect) => {
  console.log(effect.payload);
  if(effect.payload.fn){
    store.dispatch(setLoadingAC(true));
  }else if(effect.payload.action){
    store.dispatch(setLoadingAC(false));

  }
  // if (effect.payload.pattern) {
  //   console.log(typeof effect.payload.pattern === 'string');
  //   if (typeof effect.payload.pattern === 'string') {
  //     console.log('loadings');
  //     store.dispatch(setLoadingAC(true));
  //     return next(effect);
  //   } else {
  //     store.dispatch(setLoadingAC(false));
  //     return next(effect);
  //   }
  // }
  return next(effect);
};

let reducers = combineReducers({
  passedTrainings: passedTrainingsReducer,
});

const sagaMiddleWare = createSagaMiddleware({ effectMiddlewares: [effectMiddleware] });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare, httpMiddleware)),
);

sagaMiddleWare.run(rootSaga);
export default store;
