import React from "react";
import logo from "./favicon.ico";
import mainCSS from "./main.css"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//need to add on hover to the entire nav menu that adds color to the icons
//need to add 2nd hover to individual nav icons that adds a light gradient

const Header = () => {
  return(
    <header>
      <div className="navBar">
        <div class="logo flexItem"><img src={logo} alt="mk logo"/></div>
        <div className="aboutLink flexItem">about</div>
        <div className="portfolioLink flexItem">portfolio</div>
        <div className="resumeLink flexItem">resume</div>
        <div className="emailLink flexItem"><FontAwesomeIcon icon={faEnvelope} /></div>
        <div className="gitLink flexItem"><FontAwesomeIcon icon={faGithub} /></div>
      </div>
    </header>
  )
};
export default Header;
