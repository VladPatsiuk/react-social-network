import React from 'react'
import classes from './Preloader.module.css';

const Preloader = (props) => {
  return (
    <div className={classes.ldsRing}><div></div><div></div><div></div><div></div></div>
  )
}

export default Preloader;