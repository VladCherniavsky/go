import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware, {END} from 'redux-saga';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const sagaMiddleware = createSagaMiddleware();

let instance = null;

class StoreSingletone {
  static store;
  static persistor;

  persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2
  };

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.initStoreAndPersistor();
  }

  initStoreAndPersistor() {
    const pReducer = persistReducer(this.persistConfig, reducers);

    this.store = createStore(
        pReducer,
        composeWithDevTools(
            applyMiddleware(
                reduxImmutableStateInvariant(),
                sagaMiddleware
            )
        )
    );
    this.store.runSaga = sagaMiddleware.run;
    this.store.close = () => this.store.dispatch(END);

    this.persistor = persistStore(this.store);
  }
}

export default StoreSingletone;

