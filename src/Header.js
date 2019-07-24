import React from "react";
import logo from "./favicon.ico";
import mainCSS from "./main.css"

const Header = () => {
  return(
    <header>
      <div className="logoContainer">
        <img class="logo" src={logo} alt="mk logo"/>
      </div>
      <nav>
        <ul className="myInfo">
          <li>about</li>
          <li>projects</li>
          <li>resume</li>
          <li>github</li>
          <li>email</li>
        </ul>
      </nav>
    </header>
  )
};
export default Header;
