import React, { Component, Fragment } from "react";
import "./App.css";
import { Footer, NavBar, Spinner } from "./components/layouts";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Spinner />
        <Home />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
