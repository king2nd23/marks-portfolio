import React from 'react';
import mainCSS from "./main.css";

const About = () => {
  const intro = "Hi. I'm Mark, a Web Developer located in the Raleigh-Durham area. ";
  const schoolInfo = "Studying Information Sciences & Technology at Penn State University";
  const mySummary = "Skilled at writing efficient, well-designed, and testable code\
   using current best practices. Capable of managing web page creation and repair\
    projects with full accuracy and efficiency.";


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
    </div>
  )
}
export default About;
