import React from 'react';
import PropTypes from 'prop-types';

const RemoveButton = ({ onClick }) => (
  <button onClick={onClick} type="button" className="pl-4 capitalize">
    remove
  </button>
);

export default RemoveButton;
RemoveButton.propTypes = { onClick: PropTypes.func.isRequired };
