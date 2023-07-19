import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import { Outlet, useLocation } from 'react-router-dom'



const FixedComponent = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    if (
     !JSON.parse(localStorage.getItem("login"))?.username && pathname != "/login"
    ) {
      window.location.href = "http://localhost:3000/login";
      console.log("true");
    } 
  },[pathname]);
  return (
      <div>
        <Navbar/>
        <Outlet></Outlet>
       

      </div>
  )
}

export default FixedComponent