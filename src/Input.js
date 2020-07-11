import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form">
        <input
          data-test="input-box"
          type="text"
          placeholder="Enter Guess"
        ></input>
        <button data-test="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Input);
