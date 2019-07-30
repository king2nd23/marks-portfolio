import React from "react";
import logo from "./favicon.ico";
import mainCSS from "./main.css"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
  return(
    <header>
      <div className="logoContainer">
        <img class="logo" src={logo} alt="mk logo"/>
      </div>
      <nav>
        <ul className="myInfo">
          <li className="aboutLink">about</li>
          <li className="portfolioLink">portfolio</li>
          <li className="resumeLink">resume</li>
          <li className="emailLink"><FontAwesomeIcon icon={faEnvelope} /></li>
          <li className="gitLink"><FontAwesomeIcon icon={faGithub} /></li>
        </ul>
      </nav>
    </header>
  )
};
export default Header;
