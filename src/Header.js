import React from "react";
import logo from "./favicon.ico";
import mainCSS from "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faFileCode, faFileAlt, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


//need to add on hover to the entire nav menu that adds color to the icons
//need to add 2nd hover to individual nav icons that adds a light gradient

const Header = () => {
  return(
    <header>
      <div className="navBar">
        <div class="logo flexItem"></div>
        <div className="aboutLink flexItem"><FontAwesomeIcon icon={faAddressBook} size="6x"/>
          <span>about</span>
        </div>
        <div className="aboutLink flexItem"><FontAwesomeIcon icon={faFileCode} size="6x"/>
          <span>portfolio</span>
        </div>
        <div className="aboutLink flexItem"><FontAwesomeIcon icon={faFileAlt} size="6x"/>
          <span>resume</span>
        </div>
        <div className="aboutLink flexItem"><FontAwesomeIcon icon={faGithub} size="6x"/>
          <span>github</span>
        </div>
        <div className="aboutLink flexItem"><FontAwesomeIcon icon={faEnvelope} size="6x"/>
          <span>email</span>
        </div>
      </div>
    </header>
  )
};
export default Header;
