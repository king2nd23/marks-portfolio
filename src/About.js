import React from 'react';

const About = () => {
  const intro = "Hi. I'm Mark, a Web Developer located in the Raleigh-Durham area. ";
  const schoolInfo = "Studying Information Sciences & Technology at Penn State University";
  const mySummary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return(
    <div className="aboutPage">
      <div className="introSection">
        <div className="introduction">
          <h1>{intro}</h1>
          <p>{schoolInfo}</p>
        </div>
        <div className="summary">
          <p>{mySummary}</p>
        </div>
      </div>
      <div className="skillSection">
        <div className="skill-header"><h2>Skills</h2></div>
        <div className="flexContainer-skill">
          <ul className="skillList">
            <li className="flexItem-skill">
              <p className="flexItem-skill-text">HTML5</p>
              <img src="/images/HTMLlogo.svg" alt="HTML5" title="HTML5"/>
            </li>
            <li className="flexItem-skill">
              <p className="flexItem-skill-text">CSS3</p>
              <img src="/images/CSS.svg" alt="CSS3" title="CSS3"/>
            </li>
            <li className="flexItem-skill">
              <p className="flexItem-skill-text">JavaScript(ES6)</p>
              <img src="/images/JSlogo.svg" alt="JavaScript" title="JavaScript"/>
            </li>
            <li className="flexItem-skill">
              <p className="flexItem-skill-text">React</p>
              <img src="/images/reactjslogo.svg" alt="React" title="React"/>
            </li>
            <li className="flexItem-skill">
              <p className="flexItem-skill-text">Bootstrap</p>
              <img src="/images/bootstraplogo.svg.png" alt="Bootstrap" title="Bootstrap"/>
            </li>
            <li className="flexItem-skill">
              <p className="flexItem-skill-text">Git</p>
              <img src="/images/githublogo.svg" alt="Git" title="Git"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About;
