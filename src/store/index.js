import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, {END} from 'redux-saga';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
      reducers,
      composeWithDevTools(
          applyMiddleware(
              reduxImmutableStateInvariant(),
              sagaMiddleware
          )
      )
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

