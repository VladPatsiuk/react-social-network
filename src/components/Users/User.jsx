import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user_picture.jpg'
import { NavLink } from 'react-router-dom';


const User = ({follow, unfollow, id, photos, isFollowingFetching, name, status, followed}) => {
    
  return (
    <div key={id}>
      <span>
        <NavLink to={`profile/${id}`}>
          <img
            className={classes.img}
            src={photos.small !== null ? photos.small : userPhoto}
            alt=""
          />
        </NavLink>
        <div>
          {followed ? (
            <button
              disabled={isFollowingFetching.some((el) => el === id)}
              onClick={() => {
                unfollow(id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={isFollowingFetching.some((el) => el === id)}
              onClick={() => {
                follow(id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{name}</div>
          <div>{status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
}

export default User
