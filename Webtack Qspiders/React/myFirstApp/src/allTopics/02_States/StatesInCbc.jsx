import { Component } from "react";

class StatesInCbc extends Component {
  state = { count: 0 }; // Initialize state

  incre = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decr = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log(this); // Points to current class instance

    return (
      <>
        <h1>Learn State In Class Based Component</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.incre}>Incr</button>
        <button onClick={this.decr}>Decr</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default StatesInCbc;
