import {
  LOADING_LAYOUT_DATA_TRUE,
  LOADING_LAYOUT_DATA_FALSE,
  LOADING_SEARCH_RESI_DATA_TRUE,
  LOADING_SEARCH_RESI_DATA_FALSE,
  LOADING_SEARCH_TRACK_DATA_TRUE,
  LOADING_SEARCH_TRACK_DATA_FALSE,
  LOADING_BLOG_DETAILS_DATA_FALSE,
  LOADING_BLOG_DETAILS_DATA_TRUE,
  LOADING_BLOG_DATA_TRUE,
  LOADING_BLOG_DATA_FALSE,
  LOADING_CATEGORY_DATA_TRUE,
  LOADING_CATEGORY_DATA_FALSE,
} from "../actionTypes";

const initialState = {
  layout_loading: false,
  resi_loading: false,
  track_loading: false,
  blog_loading: true,
  category_loading: true,
  blogDetails_loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_LAYOUT_DATA_TRUE:
      return {
        ...state,
        layout_loading: !state.layout_loading,
      };
      break;
    case LOADING_LAYOUT_DATA_FALSE:
      return {
        ...state,
        layout_loading: false,
      };
    case LOADING_SEARCH_RESI_DATA_TRUE:
      return {
        ...state,
        resi_loading: true,
      };
      break;
    case LOADING_SEARCH_RESI_DATA_FALSE:
      return {
        ...state,
        resi_loading: false,
      };
    case LOADING_SEARCH_TRACK_DATA_TRUE:
      return {
        ...state,
        track_loading: true,
      };
      break;
    case LOADING_SEARCH_TRACK_DATA_FALSE:
      return {
        ...state,
        track_loading: false,
      };
    case LOADING_BLOG_DATA_TRUE:
      return {
        ...state,
        blog_loading: true,
      };
      break;
    case LOADING_BLOG_DATA_FALSE:
      return {
        ...state,
        blog_loading: false,
      };
    case LOADING_BLOG_DETAILS_DATA_TRUE:
      return {
        ...state,
        blogDetails_loading: true,
      };
      break;
    case LOADING_BLOG_DETAILS_DATA_FALSE:
      return {
        ...state,
        blogDetails_loading: false,
      };
    case LOADING_CATEGORY_DATA_TRUE:
      return {
        ...state,
        category_loading: true,
      };
      break;
    case LOADING_CATEGORY_DATA_FALSE:
      return {
        ...state,
        category_loading: false,
      };
    default:
      return state;
  }
}
