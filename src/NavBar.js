import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginForm from './components/LoginForm';

const NavBar = (props) => {
  const loggedIn = props.currentUser.id;
  const conditionalLink = loggedIn ? props.currentUser.username : 'signup';
  
  return (
    <div className="navbar top fixed" id="App-header">
      <div className="navbar left">
        <img src="tarot.png" alt="TarotVR Logo" width="46px" height="46px"/>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/vr">VR</NavLink>
        <NavLink to={`/${conditionalLink}`}>{ loggedIn ? 'Profile' : 'Sign Up'}</NavLink>     
      </div>
      <div className="navbar right">
        {loggedIn ? <button className="logout" onClick={props.handleLogout}> Log Out </button> : (
              < LoginForm handleLogin={props.handleLogin} />
            )}
      </div>
    </div>
  );
};

export default NavBar;
