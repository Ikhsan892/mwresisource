import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
const Paginasi = ({totalPost, postPerPage, paginate}) => {
  const handleChange = (event, value) => {
     paginate(value);
   };
  return(
    <div>
       <Pagination count={Math.ceil(totalPost/postPerPage)} onChange={handleChange} variant="outlined" color="primary" />
    </div>
  )
}

export default Paginasi
