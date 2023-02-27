/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthBooks } from '../../redux/books/bookSlice';
import Form from '../Form';
import Book from './Book';

const Books = () => {
  const booklists = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const appId = 'B5qsOM2xpT42cFtPkgSg';
  const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
  useEffect(() => {
    dispatch(fecthBooks(url));
  }, []);

  return (
    <div>
      <div>
        {booklists?.map(([key, value]) => (
          <Book key={key} id={key} item={value[0]} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
