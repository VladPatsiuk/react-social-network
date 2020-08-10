import React from 'react';
import classes from './Header.module.css'; 
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://i.pinimg.com/originals/8f/5a/92/8f5a9289e92b864cf1b2d4fc8a6f00c0.jpg" alt="" />

      <div className={classes.header__login}>
        {props.isAuthorized ? <div> {props.login} - <button onClick={props.logout}>logout</button></div>  : 
        <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;