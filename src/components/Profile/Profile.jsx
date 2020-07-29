import React from 'react';
import classes from './Profile.module.css'; 
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
  return (
    <div>
          <div>
            <img className={classes.background} src="https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg" alt="" />
          </div>
          <div>
            ava + description
          </div>
          <MyPosts />
        </div>
  )
}

export default Profile;