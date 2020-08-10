import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import userPhoto from '../../../assets/img/user_picture.jpg'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

  if (!props.profileInfo) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.description}>
          <img className={classes.profile__image} src={props.profileInfo.photos.large || userPhoto} alt="fuck you!"></img>
          <ProfileStatusWithHooks status={props.status} setStatus={props.setStatus} />
      </div>
      </div>
      
    </div>
  )
}

export default ProfileInfo;