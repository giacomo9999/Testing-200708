import React from "react";
import PropTypes from "prop-types";

const Congrats = (props) => {
  return props.success ? (
    <div data-test="component-congrats">
      <h1>Congratulations</h1>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
};

Congrats.propTypes = { success: PropTypes.bool.isRequired };

export default Congrats;
