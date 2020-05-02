import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness3Icon from '@material-ui/icons/Brightness3';
const DarkToggle = ({check, click}) => {
  return(
    <div>
    <Tooltip title = "dark mode">
      <IconButton aria-label="darktheme" onClick={click} color="inherit">
        {check ? <Brightness3Icon/> : <Brightness7Icon/>}
      </IconButton>
    </Tooltip>
    </div>
  )
}

export default DarkToggle
