import React, { Component } from "react";
import HogCard from './HogCard'

class HogContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => < HogCard hog={hog} formatImage={this.props.formatImage} showDetails={this.props.showDetails}/>)}
      </div>
    );
  }
}

export default HogContainer;
