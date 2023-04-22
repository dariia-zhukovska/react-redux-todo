import { createStore } from "redux";
import { rootReducer } from "./root-reduser";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { loadState, saveState } from './local-storage';
import throttle from 'lodash/throttle';

export const configureStore = ()=> {

  const persistedState = loadState();

  const store = createStore(
    rootReducer,
    persistedState,
    devToolsEnhancer(),
  );

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos,
    });
  }, 1000));

  return store;
}