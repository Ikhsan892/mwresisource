import { GET_CATEGORY_DATA } from "../actionTypes";

const initialState = {
  category_lists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_DATA:
      return {
        ...state,
        category_lists: action.response,
      };
      break;
    default:
      return state;
  }
}
