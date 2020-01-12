import { FETCHING, FETCH_USERS_REJECTED } from "../../utils/constants.js";
export default function reducer(
  state = {
    fetching: false
  },
  action
) {
  switch (action.type) {
    case FETCHING: {
      return {
        ...state,
        fetching: action.data
      };
    }
    case FETCH_USERS_REJECTED: {
      return {
        ...state,
        fetching: action.data
      };
    }
  }

  return state;
}
