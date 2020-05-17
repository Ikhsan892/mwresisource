import React,{Suspense} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import {
  Hidden,
  Grid,
  CircularProgress,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  Button,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import Blog from './components/Blog'
// const Post = lazy(() => import('./components/Post'))
// const Paginasi = lazy(() => import('./components/Pagination'))
const informations = [
  {
    id : 1,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 2,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 3,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 4,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 5,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 6,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 7,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 8,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },

  {
    id : 9,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 10,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 11,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 12,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 13,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 14,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
  {
    id : 15,
    media : '/assets/mbanner3.jpg',
    headline : 'Cara Transfer',
    content : 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica'
  },
]
const useStyles  = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  image : {
    display : 'block',
    marginTop : '5px',
    marginRight: 'auto',
    marginLeft : 'auto',
    width : '400px',
    height : '400px',
    [theme.breakpoints.down('sm')] : {
      width : '200px',
      height : '200px',
    },
  },
  h2: {
    textAlign : 'center'
  },
  button : {
    display:'block',
    width : '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom : '10px',
    [theme.breakpoints.up('sm')] : {
      width : '30%',
    },
  }
}))
const Information = ({carousel,mcarousel}) => {
  const classes = useStyles()
  // const [posts, setPosts] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [postPerPage] = useState(5)
  // const [currentPage, setCurrentPage] = useState(1)
  // const [id, setId] = useState('')
  // const [open, setOpen] = useState(false)
  // const handleClose = () => {
  //   setOpen(false)
  // }
  // const handleClick = (event) => {
  //   event.persist()
  //   setId(event.target.id)
  //   setOpen(true)
  // }
  //
  // useEffect(() => {
  //   const url = 'https://jsonplaceholder.typicode.com/posts'
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => {
  //     setPosts(json)
  //     setLoading(false)
  //   })
  //   return(
  //     setPosts([])
  //   )
  // },[])
  // let indexLastPage = currentPage * postPerPage
  // let indexFirstPage = indexLastPage - postPerPage
  // let currentPost = posts.slice(indexFirstPage,indexLastPage)

  // const pageNumber = (pageNumber) => setCurrentPage(pageNumber)
  return(
    <div>
      <Hidden smUp>
         <Suspense fallback={<div>Loading...</div>}>
             {mcarousel}
         </Suspense>
       </Hidden>
       <Container>
         <Hidden xsDown>
           <Suspense fallback={<div>Loading...</div>}>
               {carousel}
           </Suspense>
         </Hidden>
         <LazyLoadImage src = "/assets/informasi.svg" alt="Invoice" className={classes.image}/>
         <Hidden smDown>
           <h2 className={classes.h2}>Butuh Informasi Disini</h2>
         </Hidden>
         <Hidden mdUp>
           <h4 className={classes.h2}>Butuh Informasi Disini</h4>
         </Hidden>
         <form onSubmit={(e) => {
           e.preventDefault()
           alert('submit')
         }} autoComplete ="off">
           <TextField id="outlined-basic" style={{boxSizing:'content-box'}} placeholder="Cari Informasimu disini" variant="outlined" fullWidth/>
           <br/>
           <Button variant="contained" color="primary" className={classes.button}>
             CARI
           </Button>
         </form>
         <hr/>
         <Grid container spacing={4} justify="center">
          {informations.map((p) => {
            return(
              <Grid item key={p.id}>
                 <Card className={classes.root}>
                   <CardActionArea>
                     <CardMedia
                       className={classes.media}
                       image={p.media}
                       title="Contemplative Reptile"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {p.headline}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                         {`${p.content.slice(0,100)}...`}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                   <CardActions>
                     <Button size="small" color="primary">
                       Baca Lengkap
                     </Button>
                   </CardActions>
                 </Card>
              </Grid>
            )
          })}
         </Grid>
        </Container>
    </div>
  )
    // return(
    //   <div>
    //     <Hidden smUp>
    //       <Suspense fallback={<div>Loading...</div>}>
    //           {mcarousel}
    //       </Suspense>
    //     </Hidden>
    //     <Container>
    //       <Hidden xsDown>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             {carousel}
    //         </Suspense>
    //       </Hidden>
    //       <LazyLoadImage src = "/assets/informasi.svg" alt="Invoice" className={classes.image}/>
    //       <Hidden smDown>
    //         <h2 className={classes.h2}>Butuh Informasi Disini</h2>
    //       </Hidden>
    //       <Hidden mdUp>
    //         <h4 className={classes.h2}>Butuh Informasi Disini</h4>
    //       </Hidden>
    //       <form onSubmit={(e) => {
    //         e.preventDefault()
    //         alert('submit')
    //       }} autoComplete ="off">
    //         <TextField id="outlined-basic" style={{boxSizing:'content-box'}}label="Masukkan Nomor Resi" variant="outlined" fullWidth/>
    //         <br/>
    //         <Button variant="contained" color="primary" className={classes.button}>
    //           CEK INVOICE
    //         </Button>
    //       </form>
    //       <hr/>
    //       <Grid
    //           container
    //           direction="column"
    //           justify="center"
    //           alignItems="center"
    //           spacing={5}
    //         >
    //         <Suspense fallback={<div><CircularProgress/></div>}>
    //           <Grid item xs={12} md={6} lg={9}>
    //           {
    //             loading ?  <CircularProgress/> :
    //               <Post posts = {currentPost} loading = {loading} clicken={handleClick}/>
    //           }
    //           </Grid>
    //           <Grid item xs={12} md={6} lg={6}>
    //             <Paginasi totalPost={posts.length} postPerPage={postPerPage} paginate={pageNumber}/>
    //           </Grid>
    //         </Suspense>
    //       </Grid>
    //     </Container>
    //   </div>
    // )
}

export default Information
