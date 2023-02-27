import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import RemoveButton from '../Buttons/RemoveButton';
import { removeBook } from '../../redux/books/bookSlice';

const Book = ({ id, item }) => {
  const appId = 'B5qsOM2xpT42cFtPkgSg';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
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
