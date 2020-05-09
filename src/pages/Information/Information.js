import React,{useState, useEffect,lazy,Suspense} from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import {
  Hidden,
  Grid,
  LinearProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const Post = lazy(() => import('./components/Post'))
const Paginasi = lazy(() => import('./components/Pagination'))
const useStyles  = makeStyles((theme) => ({
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
}))
const Information = () => {
  const classes = useStyles()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [postPerPage] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    fetch(url)
    .then(response => response.json())
    .then(json => setPosts(json))
    setLoading(false)

  },[])
  let indexLastPage = currentPage * postPerPage
  let indexFirstPage = indexLastPage - postPerPage
  let currentPost = posts.slice(indexFirstPage,indexLastPage)

  const pageNumber = (pageNumber) => setCurrentPage(pageNumber)
    return(
      <div>
        <LazyLoadImage src = "/assets/informasi.svg" alt="Invoice" className={classes.image}/>
        <Hidden smDown>
          <h2 className={classes.h2}>Butuh Informasi Disini</h2>
        </Hidden>
        <Hidden mdUp>
          <h4 className={classes.h2}>Butuh Informasi Disini</h4>
        </Hidden>
        <hr/>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={5}
          >
          <Suspense fallback={<div><LinearProgress/></div>}>
            <Grid item xs={12} md={6} lg={9}>
            {
              loading ?  <LinearProgress/> :
                <Post posts = {currentPost} loading = {loading}/>
            }
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paginasi totalPost={posts.length} postPerPage={postPerPage} paginate={pageNumber}/>
            </Grid>
          </Suspense>
        </Grid>
      </div>
    )
}

export default Information