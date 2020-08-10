import React from 'react';
import classes from './Users.module.css'
import userPhoto from '../../assets/img/user_picture.jpg'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, totalUsersCount, usersPerPage, isFollowingFetching, users, follow, unfollow, onPageChange}) => {
    
  return (
    <div>
      <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount} onPageChange={onPageChange} usersPerPage={usersPerPage} />
      {
        users.map(user => <User key={user.id} id={user.id} name={user.name} photos={user.photos} status={user.status} followed={user.followed} isFollowingFetching={isFollowingFetching} />)
      }
    </div>
  )
}

export default Users
