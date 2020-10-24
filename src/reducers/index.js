import { combineReducers } from "redux";
import darkReducers from "./darkReducers";
import layoutReducers from "./layoutReducers";
import downloadReducers from "./downloadReducers";
import loadingReducers from "./loadingReducers";
import invoiceReducers from "./invoiceReducers";
import blogReducers from "./blogReducers";
import blogDetailsReducers from "./blogDetailsReducers";
import categoryReducers from "./categoryReducers";
import trackReducers from "./trackReducers";

export default combineReducers({
  dark: darkReducers,
  layout: layoutReducers,
  download: downloadReducers,
  blog: blogReducers,
  blogDetails: blogDetailsReducers,
  category: categoryReducers,
  loading: loadingReducers,
  resi: invoiceReducers,
  track: trackReducers,
});
