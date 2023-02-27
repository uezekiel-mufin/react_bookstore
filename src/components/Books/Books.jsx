/* eslint-disable operator-linebreak */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fecthBooks } from '../../redux/books/bookSlice';
import Form from '../Form';
import Book from './Book';

const appId = 'B5qsOM2xpT42cFtPkgSg';

const Books = () => {
  const bookUrl = process.env.REACT_APP_BOOKS;
  const booklists = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const url = `${bookUrl}/${appId}/books`;
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
