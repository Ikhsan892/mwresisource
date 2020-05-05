import React from 'react'
import {
  IconButton,
  Tooltip
} from '@material-ui/core';
import {
  Brightness7,
  Brightness3
} from '@material-ui/icons';
const DarkToggle = ({check, click}) => {
  return(
    <div>
    <Tooltip title = "dark mode">
      <IconButton aria-label="darktheme" onClick={click} color="inherit">
        {check ? <Brightness7/> : <Brightness3/> }
      </IconButton>
    </Tooltip>
    </div>
  )
}

export default DarkToggle
