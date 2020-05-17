import React,{useState} from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Button,
  Typography
} from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Blog from './Blog'
const Post = ({posts, loading,clicken}) => {
  // const [open, setOpen] = useState(false)
  // const handleClose = () => {
  //   setOpen(false)
  // }
  // const handleClick = (event) => {
  //   setOpen(true)
  //   event.persist()
  //   setId(event.target.id)
  // }
  return(
    <div>
        {
          loading ? 'Loading...' :
          posts.map((p) => {
            return(
              <div  key={p.id}>
              <Card style={{maxWidth : '345px', marginBottom : '20px'}}>
                 <CardActionArea>
                  <div id={p.id}>
                     <CardMedia
                       component="img"
                       alt="Contemplative Reptile"
                       height="140"
                       image="/assets/mbanner3.jpg"
                       title="Contemplative Reptile"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {p.title}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {`${p.body.slice(0,50)}...`}
                       </Typography>
                     </CardContent>
                  </div>
                 </CardActionArea>
                 <CardActions>
                   <Button size="small" color="primary" onClick={(id) => clicken(id)}>
                     <div id={p.id}>Read More</div>
                   </Button>
                 </CardActions>
               </Card>
              </div>
            )
          })
        }
    </div>
  )
}

export default Post
