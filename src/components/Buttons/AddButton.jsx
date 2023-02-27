import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ handleSubmit }) => (
  <button onClick={handleSubmit} type="submit">
    Add book
  </button>
);

export default AddButton;
AddButton.propTypes = { handleSubmit: PropTypes.func.isRequired };
