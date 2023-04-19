import { createStore } from "redux";
import { rootReducer } from "./root-reduser";
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(rootReducer, devToolsEnhancer());