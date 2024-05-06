import React from "react";

import "../assets/components/css/Buttons.css";

class Buttons extends React.Component {
  render() {
    return (
      <div className="main-container">
        <button className="strt" onClick={this.props.onStart}>
          Start
        </button>
        <button className="stop" onClick={this.props.onStop}>
          Stop
        </button>
        <button className="reset" onClick={this.props.onReset}>
          Reset
        </button>
      </div>
    );
  }
}
export default Buttons;
