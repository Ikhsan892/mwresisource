import {
  GET_RESI_DATA,
  GET_RESI_DATA_ERROR,
  TOGGLE_ERROR_RESI_DATA,
  SET_FOUND_STATE_TO_FALSE,
} from "../actionTypes";

const initialState = {
  error: false,
  status: 404,
  found: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESI_DATA:
      return {
        ...action.response,
        found: true,
      };
      break;
    case SET_FOUND_STATE_TO_FALSE:
      return {
        ...state,
        found: false,
      };
      break;
    case GET_RESI_DATA_ERROR:
      return {
        error: true,
        status: 404,
      };
    case TOGGLE_ERROR_RESI_DATA:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
}
