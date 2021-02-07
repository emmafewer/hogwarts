import React, { Component } from "react";

class HogCard extends Component {

  render() {
    return (
      <div className="ui card" onClick={() => this.props.showDetails(this.props.hog)}>
        {this.props.hog.name}
        <img src={this.props.formatImage(this.props.hog.name)} alt="avatar"></img>
      </div>
    );
  }
}

export default HogCard;
