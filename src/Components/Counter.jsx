import { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  decrement = () => {
    this.setState(
      { value: this.state.value - 1 } || { value: (this.state.value = 0) }
    );
  };

  render() {
    return (
      <>
        <h1>"Value" - {this.state.value}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
