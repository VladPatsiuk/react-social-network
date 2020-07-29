import React from 'react';
import classes from './Profile.module.css'; 


const Profile = () => {
  return (
    <div className={classes.content}>
          <div>
            <img src="https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg" alt="" />
          </div>
          <div>
            ava + description
          </div>
          <div>
            My posts
            <div>
              New Post
            </div>
          </div>
          <div>
            <div className={classes.item}>
              post 1
            </div>
            <div className={classes.item}>
              post 2
            </div>
          </div>
          
        </div>
  )
}

export default Profile;