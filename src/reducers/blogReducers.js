import { GET_BLOG_DATA, GET_BLOG_DATA_ERROR } from "../actionTypes";

const initialState = {
  status: null,
  message: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BLOG_DATA:
      return {
        ...action.response,
        status: action.response.status,
      };
      break;
    case GET_BLOG_DATA_ERROR:
      return {
        status: action.error.response.status,
        message: action.error.response.data,
      };
      break;
    default:
      return state;
  }
}
