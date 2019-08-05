import React from "react";
import logo from "./favicon.ico";
import {CodeAlt} from 'styled-icons/boxicons-regular/CodeAlt';
import {DocumentText} from 'styled-icons/typicons/DocumentText';
import {Mail} from 'styled-icons/feather/Mail';
import {Github} from 'styled-icons/feather/Github';
import {AddressCard} from 'styled-icons/fa-solid/AddressCard';


const Header = () => {
  return(
    <header>
      <div className="navBar" id="navBar">
        <ul className="flexContainer">
          <li className="logo flexItem">
            <a hrref="#">
              <AddressCard size="48"/>
              <span>logo</span>
            </a>
          </li>
          <li className="aboutLink flexItem">
            <a hrref="#">
              <AddressCard size="48"/>
              <span>about</span>
            </a>
          </li>
          <li className="portfolioLink flexItem">
            <a hrref="#">
              <CodeAlt />
              <span>portfolio</span>
            </a>
          </li>
          <li className="resumeLink flexItem">
            <a hrref="#">
              <DocumentText />
              <span>resume</span>
            </a>
          </li>
          <li className="gitLink flexItem">
            <a hrref="#">
              <Github />
              <span>github</span>
            </a>
          </li>
          <li className="emailLink flexItem">
            <a hrref="#">
              <Mail />
              <span>email</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
};
export default Header;
