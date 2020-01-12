import axios from "axios";
import {
  FETCH_USERS_FULFILLED,
  FETCH_USERS_REJECTED,
  FETCHING
} from "../../utils/constants.js";
import config from "../../config/config.js";

export function fetchUsers() {
  return dispatch => {
    dispatch(fetching(true));
    axios
      .get(config.apiEndPoints.getUsers, {
        withCredentials: true
      })
      .then(response => {
        dispatch(fetching(false));
        dispatch({
          type: FETCH_USERS_FULFILLED,
          data: response.data
        });
      })
      .catch(error => {
        dispatch(fetching(false));
        dispatch({
          type: FETCH_USERS_REJECTED
        });
      });
  };
}
export function fetching(status) {
  return {
    type: FETCHING,
    data: status
  };
}
