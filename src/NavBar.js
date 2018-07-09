import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/signup">Sign Up</NavLink><br/>
      <NavLink to="/vr">VR</NavLink><br/>
      <NavLink to="/">Home</NavLink>

    </div>
  );
};

export default NavBar;
