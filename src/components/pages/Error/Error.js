import PropTypes from 'prop-types';
import React from 'react';

import './style.scss';

const Error = ({ message = 'Something went wrong' }) => {
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
