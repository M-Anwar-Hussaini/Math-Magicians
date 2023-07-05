import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value, btnType, col, click,
}) => (
  <button
    type="button"
    className={`border col-${col} btn btn-${btnType}`}
    onClick={click}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  btnType: PropTypes.string.isRequired,
  col: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
