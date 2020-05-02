import React from 'react'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import Apple from './img/apple.png'
import Asus from './img/asus.png'
const useStyles = makeStyles((theme) => ({
  root: {
     display: 'flex',
     flexWrap: 'wrap',
     justifyContent: 'space-around',
     overflow: 'hidden',
     backgroundColor: theme.palette.background.paper,
   },

 }))
const SponsorIcon = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <GridList cols={2.5}>
        <GridListTile>
          <img src={Apple} alt="merk" className={classes.img}/>
        </GridListTile>
        <GridListTile>
          <img src={Asus} alt="merk" className={classes.img}/>
        </GridListTile>
      </GridList>
    </div>
  )
}
export default SponsorIcon
