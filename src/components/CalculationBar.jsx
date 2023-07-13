import React from 'react';
import PropTypes from 'prop-types';

const CalculationBar = ({ value }) => <input type="text" className="col-12 form-control mb-2 text-end" readOnly disabled value={value} />;

CalculationBar.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CalculationBar.defaultProps = {
  value: '0',
};
export default CalculationBar;
