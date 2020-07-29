import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.background} src="https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg" alt="" />
      </div>
      <div className="description">
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo;