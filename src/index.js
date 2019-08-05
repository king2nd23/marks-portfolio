import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import About from "./About";

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
      <Header />
      <About />
      </React.Fragment>
    )
  }
}















ReactDOM.render(<App />, document.querySelector("#root"));
