import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginForm from './components/LoginForm';

const NavBar = (props) => {
  const loggedIn = props.currentUser.id
  
  return (
    <div className="navbar top fixed" id="App-header">
      <div className="navbar left">
        <img src="tarot.png" alt="TarotVR Logo" width="46px" height="46px"/>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/vr">VR</NavLink>
        {loggedIn ? null : <NavLink to="/signup">Sign Up</NavLink> }      
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
