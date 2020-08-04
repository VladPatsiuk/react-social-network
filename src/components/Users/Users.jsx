import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user_picture.jpg'
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.usersPerPage)

  let array = []
  for (let i = 1; i <= pagesCount; i++) {
    array.push(i)
  }
    
  return (
    <div>
      <div>
        {array.map(number => <span key={"key#" + number} className={number === props.currentPage ? classes.activePage : ""} onClick={(e) => props.onPageChange(number)}>{number} </span>)}
      </div>
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <NavLink to={`profile/${user.id}`}>
              <img className={classes.img} src={user.photos.small !== null ? user.photos.small : userPhoto} alt="" />
            </NavLink>
            <div>
              <button onClick={() => props.toggleFollow(user.id)}>{user.followed ? "Unfollow" : "Follow"}</button>
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>  
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  )
}

export default Users
