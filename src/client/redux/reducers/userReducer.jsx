import {
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED
} from "../../utils/constants.js";
export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS_FULFILLED: {
      return [...action.data];
    }
  }

  return state;
}
