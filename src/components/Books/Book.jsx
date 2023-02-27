import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveButton from '../Buttons/RemoveButton';
import { removeBook } from '../../redux/books/bookSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <>
      <div>
        <section>
          <span>{item.author}</span>
          <span>{item.title}</span>
          <RemoveButton onClick={() => handleDelete(item.item_id)} />
        </section>
      </div>
    </>
  );
};

export default Book;
Book.propTypes = { item: PropTypes.objectOf.isRequired };
