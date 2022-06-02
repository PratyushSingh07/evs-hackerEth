import React from 'react'
import reactRouterDom from 'react-router-dom'
import './Home.css'
import { Link,useHistory } from "react-router-dom";
function Home() {
  return (
    <>
  <div className="hero">
    <div className="navbar">
      <img src="" alt="" />
     <Link to={'/login'}> <button type="button">Log In</button></Link>
     <Link to={'/signup'}> <button type="button">Sign Up</button></Link>
    </div>
    <div className="content">
      <small>Welcome to our</small>
      <h1>
        World's <br /> creative studio
      </h1>
      <button type="button">Take a Tour </button>
    </div>
    <div className="bubble" />
  </div>
</>
  )
}

export default Home