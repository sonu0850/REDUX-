import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   const token= localStorage.getItem("token")
  return (
    <>
     
      <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#">
  <a className="navbar-brand" href="">
         <Link to="/"> <img src="https://i.pinimg.com/originals/19/58/44/19584422dd025495732e84f7d531a6ea.png" alt="" width={50} /> </Link>
        </a>
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse d-flex justify-content space-between " id="navbarSupportedContent" >
    {token ?  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
              <NavLink to="/Home"> Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/Contact">Contact.Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About">About</NavLink>
            </li>
          </ul> : "" }
   
   
  </div>
</nav>

    </>
  );
};

export default Navbar;
