import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveButton from '../Buttons/RemoveButton';
import { removeBook } from '../../redux/books/bookSlice';

const appId = process.env.REACT_APP_ID;
const bookUrl = process.env.REACT_APP_BOOKS;
const url = `${bookUrl}/${appId}/books`;

const Book = ({ id, item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    const delItem = {
      item_id: id,
      ...item,
    };
    dispatch(removeBook({ url, key: id, item: delItem }));
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
