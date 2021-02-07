import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import MainHog from './MainHog'

class App extends Component {
  state = {
    hogs: hogs,
    selectedHog: false
  }

  formatImage = (name) => {
    let hog = name.split(' ').join('_').toLowerCase()
    let hogImage = require(`../hog-imgs/${hog}.jpg`)
    return hogImage
  }

  showDetails = (hog) => {
    this.setState({selectedHog: hog})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.state.selectedHog ? <MainHog selectedHog={this.state.selectedHog} formatImage={this.formatImage}/> : null}
        <HogContainer hogs={this.state.hogs} formatImage={this.formatImage} showDetails={this.showDetails}/>
      </div>
    );
  }
}

export default App;
