import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapper">{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
