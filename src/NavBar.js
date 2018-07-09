import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar" id="App-header">
      <img src="tarot.png" alt="TarotVR Logo" width="46px" height="46px"/>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/vr">VR</NavLink>

    </div>
  );
};

export default NavBar;
