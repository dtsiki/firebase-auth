import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
