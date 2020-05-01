import React from 'react'
import './DarkToggle.css'
const DarkToggle = ({klik, check}) => {
  return(
    <div class="toggleWrapper">
      <input type="checkbox" checked={check} class="dn" id="dn" onChange={klik}/>
      <label for="dn" class="toggle">
        <span class="toggle__handler">
          <span class="crater crater--1"></span>
          <span class="crater crater--2"></span>
          <span class="crater crater--3"></span>
        </span>
        <span class="star star--1"></span>
        <span class="star star--2"></span>
        <span class="star star--3"></span>
        <span class="star star--4"></span>
        <span class="star star--5"></span>
        <span class="star star--6"></span>
      </label>
    </div>
  )
}

export default DarkToggle
