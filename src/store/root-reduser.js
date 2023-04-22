import { combineReducers } from "redux";

import { todos } from "./todos/todos-reduser";
// import { filters } from "./filters/filter-reducer";


export const rootReducer = combineReducers({
  todos,
  // filters
});