import React, { Component } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Filter />
        <Footer />
      </div>
    );
  }
}

export default App;
