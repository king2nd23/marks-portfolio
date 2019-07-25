import React from "react";
import logo from "./favicon.ico";
import mainCSS from "./main.css"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
          <FontAwesomeIcon icon={faCheck} />

        </ul>
      </nav>
    </header>
  )
};
export default Header;
