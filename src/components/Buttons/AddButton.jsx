import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ handleSubmit }) => (
  <button
    onClick={handleSubmit}
    type="submit"
    className="flex text-white rounded-md justify-center items-center bg-[#0290ff] px-4 py-2 md:py-4 w-[150px]"
  >
    Add book
  </button>
);

export default AddButton;
AddButton.propTypes = { handleSubmit: PropTypes.func.isRequired };
