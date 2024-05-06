import React from "react";

import Buttons from "./components/Buttons";

import "./assets/index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
    };
    this.timer = null;
  }

  handleStart = () => {
    this.setState({
      isOn: true,
    });
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  };
  handleStop = () => {
    this.setState({
      isOn: false,
    });
    clearInterval(this.timer);
  };
  handleReset = () => {
    this.setState({
      time: 0,
      isOn: false,
    });
    clearInterval(this.timer);
  };
  render() {
    return (
      <div className="main">
        <h1>Timer</h1>
        <h2>
          {Math.floor(this.state.time / 60)} mins {this.state.time % 60} secs
        </h2>

        <Buttons
          onStart={this.handleStart}
          onStop={this.handleStop}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}
export default App;
