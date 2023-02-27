import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const FilterButton = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(checkStatus())}>
      Categories
    </button>
  );
};

export default FilterButton;
