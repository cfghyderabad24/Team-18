import React from "react";
import Backvid from "./Backvid";
import { Link } from "react-router-dom";  
export default function Home() {
  

  return (
    <>
      <Backvid></Backvid>
      <div className="container homewelcome">
        <h1 className="display-2">    🌾 Empowering Farmers, One Seed at a Time
        </h1>
        <div>
        <Link className="forbuttons" to="/farmer" role="button" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Farmer
        </Link><Link className="forbuttons" to="/volunteer" role="button" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Volunteer
        </Link></div>
      </div>

    
    </>
  );
}
