import React, { Component } from "react";

class StateCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
          <span>{this.state.count}</span>
          <button>-</button>
        </div>
      </React.Fragment>
    );
  }
}

export default StateCounter;
