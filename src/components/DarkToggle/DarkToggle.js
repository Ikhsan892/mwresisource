import React, { useCallback } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { Brightness7, Brightness3 } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { toggledark, setundark } from "../../actions";
import { useLocation } from "react-router-dom";

const DarkToggle = () => {
  const { dark } = useSelector((state) => state.dark);
  let url = useLocation();
  const dispatch = useDispatch();
  const click = useCallback(() => {
    dispatch(toggledark());
  }, []);
  const balik = useCallback(() => {
    dispatch(setundark());
  }, []);
  React.useEffect(() => {
    if (url.pathname === "/home") {
      balik();
    }
  }, [url]);
  return (
    <div>
      <Tooltip title='dark mode'>
        <IconButton aria-label='darktheme' onClick={click} color='inherit'>
          {dark ? <Brightness7 /> : <Brightness3 />}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DarkToggle;
