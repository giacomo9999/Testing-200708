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
    return (
      <div data-test="component-input">
        <h1>Blah</h1>
        <h1>{this.props}</h1>
        {contents}
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
