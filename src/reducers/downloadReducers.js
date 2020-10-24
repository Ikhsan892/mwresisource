import { SET_DOWNLOAD, SET_DOWNLOAD_FALSE } from "../actionTypes";

let initialState = {
  download: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DOWNLOAD:
      return {
        ...state,
        download: !state.download,
      };
      break;
    case SET_DOWNLOAD_FALSE:
      return {
        ...state,
        download: false,
      };
      break;
    default:
      return state;
      break;
  }
}
