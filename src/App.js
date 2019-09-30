import React, { Component, Fragment } from "react";
import "./App.css";
import NavBar from "./components/layouts/Navbar";
import Spinner from "./components/layouts/Spinner";
import Home from "./components/Home";
import Footer from "./components/layouts/Footer";

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
