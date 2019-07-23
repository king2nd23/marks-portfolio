import React from "react";

const Header = () => {
  return(
    <header>
      <div className="logo">
        <img src={"public/favicon.ico"} alt="mk logo"/>
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
