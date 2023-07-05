import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, btnType, col }) => (
  <button type="button" className={`border col-${col} btn btn-${btnType}`}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
};

export default Button;
