
import { SET_FILTER } from "./filter-const";

export const filters = (state = 'all', actions) => {
  switch (actions.type) {
    case SET_FILTER:
      return actions.filter;
    default:
      return state;
  }
}

