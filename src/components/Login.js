import React from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

function Main() {
  return (
    <div className="container">
      <h2 className="login">Login</h2>
      <div className="ip">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/> 
      </div>
      <Link to="/dashboard"><button className="btn">Login</button></Link>
      <div className="cf">
        <p>create new email</p>
        <p>Forgot password?</p>
      </div>
    </div>
  );
}

export default Main;