import { createStore, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from '../reducer';

let defaultState = {
  todos: []
}

export const configurateStore = ( initialstate = defaultState ) => {
  var store = createStore( reducer, initialstate, compose(
    autoRehydrate()
    )
  );
  persistStore(store, { storage: AsyncStorage });
  return store;
}
