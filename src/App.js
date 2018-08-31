import React, { Component } from "react";
import Header from "./Components/Header/Header";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
