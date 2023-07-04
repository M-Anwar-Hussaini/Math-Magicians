import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, btnType, col }) => (
  <button type="button" className={`border col-${col} btn btn-${btnType}`}>
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  col: PropTypes.number,
};

Button.defaultProps = {
  btnType: 'light',
  col: 3,
};
export default Button;
