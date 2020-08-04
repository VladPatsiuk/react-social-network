import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';

const ProfileInfo = (props) => {

  if (!props.profileInfo) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img className={classes.background} src="https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg" alt="" />
      </div>
      <div className="description">
        <img src={props.profileInfo.photos.large}></img>
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo;