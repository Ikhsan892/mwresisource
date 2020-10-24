import { TOGGLE_DARK, SET_UNDARK } from "../actionTypes";

const initialState = {
  dark: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK:
      return {
        ...state,
        dark: !state.dark,
      };
      break;
    case SET_UNDARK:
      return {
        ...state,
        dark: false,
      };
    default:
      return state;
  }
}
