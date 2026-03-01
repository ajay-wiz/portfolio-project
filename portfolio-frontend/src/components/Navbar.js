import React from "react";
import { FaUserCircle } from "react-icons/fa";

function Navbar(){

 const user =
 JSON.parse(localStorage.getItem("user"));

 const logout=()=>{
  localStorage.removeItem("user");
  window.location="/";
 };

 return(
 <nav className="navbar navbar-dark bg-dark shadow">

  <div className="container-fluid">

   <h4 className="text-white">
    🚀 My Portfolio
   </h4>

   <div className="d-flex align-items-center">

    <FaUserCircle
     size={28}
     className="text-white me-2"/>

    <span className="text-white me-3">
     {user.name}
    </span>

    <button
     className="btn btn-danger btn-sm"
     onClick={logout}>
     Logout
    </button>

   </div>

  </div>
 </nav>
 );
}

export default Navbar;