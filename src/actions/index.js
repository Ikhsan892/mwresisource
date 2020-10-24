import {
  TOGGLE_DARK,
  SET_UNDARK,
  SET_DOWNLOAD,
  SET_DOWNLOAD_FALSE,
  SET_FOUND_STATE_TO_FALSE,
  SET_FOUND_STATE_TRACK_TO_FALSE,
  LOADING_LAYOUT_DATA_TRUE,
  LOADING_LAYOUT_DATA_FALSE,
  LOADING_BLOG_DATA_TRUE,
  LOADING_BLOG_DATA_FALSE,
  LOADING_BLOG_DETAILS_DATA_TRUE,
  LOADING_BLOG_DETAILS_DATA_FALSE,
  LOADING_CATEGORY_DATA_TRUE,
  LOADING_CATEGORY_DATA_FALSE,
  LOADING_SEARCH_RESI_DATA_TRUE,
  LOADING_SEARCH_RESI_DATA_FALSE,
  LOADING_SEARCH_TRACK_DATA_FALSE,
  LOADING_SEARCH_TRACK_DATA_TRUE,
  GET_LAYOUT_DATA,
  GET_CATEGORY_DATA,
  GET_BLOG_DETAILS_DATA,
  GET_BLOG_DETAILS_DATA_ERROR,
  GET_HOME_DATA,
  GET_RESI_DATA,
  GET_BLOG_DATA,
  GET_BLOG_DATA_ERROR,
  GET_RESI_DATA_ERROR,
  GET_TRACK_DATA,
  GET_TRACK_DATA_ERROR,
  TOGGLE_ERROR_RESI_DATA,
  TOGGLE_ERROR_TRACK_DATA,
} from "../actionTypes";
import axios from "axios";

export const toggledark = () => {
  return {
    type: TOGGLE_DARK,
  };
};

export const setundark = () => {
  return {
    type: SET_UNDARK,
  };
};

export const getlayoutdata = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_LAYOUT_DATA_TRUE });
    const response = await fetch("http://localhost:8000/api/layout");
    const layout = await response.json();
    dispatch({ type: GET_LAYOUT_DATA, layout });
    dispatch({ type: LOADING_LAYOUT_DATA_FALSE });
  };
};
export const getResiData = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_SEARCH_RESI_DATA_TRUE });
    try {
      const response = await axios.get("http://localhost:8000/api/invoice", {
        params: {
          no_resi: id.toUpperCase(),
        },
      });
      dispatch({ type: GET_RESI_DATA, response });
      dispatch({ type: LOADING_SEARCH_RESI_DATA_FALSE });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_RESI_DATA_ERROR });
      dispatch({ type: LOADING_SEARCH_RESI_DATA_FALSE });
    }
  };
};
export const getBlogData = (search_data = "null", category_data = "null") => {
  return async (dispatch) => {
    dispatch({ type: LOADING_BLOG_DATA_TRUE });
    try {
      const response = await axios.get("http://localhost:8000/api/blog", {
        params: {
          search: search_data,
          category: category_data,
        },
      });
      dispatch({ type: GET_BLOG_DATA, response });
      dispatch({ type: LOADING_BLOG_DATA_FALSE });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_BLOG_DATA_ERROR, error });
      dispatch({ type: LOADING_BLOG_DATA_FALSE });
    }
  };
};
export const getBlogDetailsData = (slug) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_BLOG_DETAILS_DATA_TRUE });
    try {
      const response = await axios.get(
        "http://localhost:8000/api/blog/details",
        {
          params: {
            slug: slug,
          },
        }
      );
      dispatch({ type: GET_BLOG_DETAILS_DATA, response });
      dispatch({ type: LOADING_BLOG_DETAILS_DATA_FALSE });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_BLOG_DETAILS_DATA_ERROR, error });
      dispatch({ type: LOADING_BLOG_DETAILS_DATA_FALSE });
    }
  };
};
export const getCategoryData = () => {
  return async (dispatch) => {
    dispatch({ type: LOADING_CATEGORY_DATA_TRUE });
    try {
      const response = await axios.get(
        "http://localhost:8000/api/category_list"
      );
      dispatch({ type: GET_CATEGORY_DATA, response });
      dispatch({ type: LOADING_CATEGORY_DATA_FALSE });
    } catch (error) {
      console.error(error);
    }
  };
};
export const getTrackData = (id) => {
  return async (dispatch) => {
    dispatch({ type: LOADING_SEARCH_TRACK_DATA_TRUE });
    try {
      const response = await axios.get("http://localhost:8000/api/track", {
        params: {
          no_resi: id.toUpperCase(),
        },
      });
      dispatch({ type: GET_TRACK_DATA, response });
      dispatch({ type: LOADING_SEARCH_TRACK_DATA_FALSE });
    } catch (error) {
      console.error(error);
      dispatch({ type: GET_TRACK_DATA_ERROR });
      dispatch({ type: LOADING_SEARCH_TRACK_DATA_FALSE });
    }
  };
};
export const setFoundStateToFalse = () => {
  return {
    type: SET_FOUND_STATE_TO_FALSE,
  };
};
export const setFoundStateTrackToFalse = () => {
  return {
    type: SET_FOUND_STATE_TRACK_TO_FALSE,
  };
};
export const gethomedata = () => {
  return {
    type: GET_HOME_DATA,
  };
};
export const setResiDataToNotError = () => {
  return {
    type: TOGGLE_ERROR_RESI_DATA,
  };
};
export const setTrackDataToNotError = () => {
  return {
    type: TOGGLE_ERROR_TRACK_DATA,
  };
};
export const downloadFile = () => {
  return {
    type: SET_DOWNLOAD,
  };
};

export const notDownloadFile = () => {
  return {
    type: SET_DOWNLOAD_FALSE,
  };
};
