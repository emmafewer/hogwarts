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

  handleSort = (e) => {
    switch (e.target.value) {
      case 'greased':
        let filteredHogs = hogs.filter(hog => hog.greased == true)
        this.setState({hogs:filteredHogs})
      case 'name':
        let sortedNames = hogs.sort((a,b) => (a.name > b.name)? 1 : -1)
        this.setState({hogs:sortedNames})
      case 'weight':
        let sortedWeights = hogs.sort((a,b) => (a.weight > b.weight))
        this.setState({hogs:sortedWeights})
      default:
        this.setState({hogs:hogs})
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <select onChange={this.handleSort}>
            <option value="default">Sort Hog</option>
            <option value="greased">Greased</option>
            <option value="name">Name</option>
            <option value="weight">weight</option>
        </select>
        {this.state.selectedHog ? <MainHog selectedHog={this.state.selectedHog} formatImage={this.formatImage}/> : null}
        <HogContainer hogs={this.state.hogs} formatImage={this.formatImage} showDetails={this.showDetails}/>
      </div>
    );
  }
}

export default App;
