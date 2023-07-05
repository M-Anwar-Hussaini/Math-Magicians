import React from 'react';
import PropTypes from 'prop-types';

const Calculation = ({ value }) => (
  <input
    type="text"
    className="col-12 form-control mb-2 text-end"
    readOnly
    disabled
    value={value}
  />
);

Calculation.propTypes = {
  value: PropTypes.number,
};

Calculation.defaultProps = {
  value: 0,
};
export default Calculation;
