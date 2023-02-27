import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveButton from '../Buttons/RemoveButton';
import { removeBook } from '../../redux/books/bookSlice';

const Book = ({ id, item }) => {
  console.log(item);
  console.log(id);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <>
      <div>
        <section>
          <span>{item.author}</span>
          <span>{item.title}</span>
          <RemoveButton onClick={() => handleDelete()} />
        </section>
      </div>
    </>
  );
};

export default Book;
Book.propTypes = { item: PropTypes.objectOf.isRequired };
Book.propTypes = { id: PropTypes.string.isRequired };
